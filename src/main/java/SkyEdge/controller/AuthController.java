package SkyEdge.controller;

import java.time.LocalDateTime;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import SkyEdge.model.User;
import SkyEdge.security.UserTemplate;
import SkyEdge.service.AuthenticationService;
import SkyEdge.service.EmailService;
import SkyEdge.service.UserService;
import SkyEdge.util.email.EmailDetails;
import jakarta.validation.Valid;

@Controller
public class AuthController {
    @Value("${token.reset.timeout.minutes}")
    private int reset_token_timeout;

    @Value("${site.domain}")
    private String site_domain;
    @Autowired
    private AuthenticationService authenticationService;

    @Autowired
    private UserService userService;

    @Autowired
    private EmailService emailService;
    // @Autowired
    // private JavaMailSender mailSender;

    @GetMapping("/login")
    public String login() {
        return "login";
    }

    @GetMapping("/register")
    public String register(Model model) {
        UserTemplate userTemplate = new UserTemplate();
        model.addAttribute("user", userTemplate);
        return "/register";
    }

    @PostMapping("/register")
    public String registerUser(@ModelAttribute("user") @Valid UserTemplate ut, BindingResult bindingResult,
            Model model) {
        if (bindingResult.hasErrors()) {
            model.addAttribute("error",
                    "Password must be at least 6 characters long and contain at least one digit and one uppercase letter.");
            return "/register";
        }
        authenticationService.registerUser(ut.getEmail(), ut.getName(), ut.getUsername(), ut.getPassword());
        return "login";
    }

    @GetMapping("/forgot-password")
    public String forgotPassword(Model model) {
        return "forgot-password";
    }

    @PostMapping("/forgot-password")
    public String resetPassword(@RequestParam("email") String requestEmail, Model model,
            RedirectAttributes attributes) {
        Optional<User> optionalUser = userService.findOneByEmail(requestEmail);
        if (optionalUser.isPresent()) {
            User user = userService.findById(optionalUser.get().getUserId()).get();
            String resetToken = UUID.randomUUID().toString();
            user.setResetToken(resetToken);
            user.setTokenExpiryDate(LocalDateTime.now().plusMinutes(reset_token_timeout));
            userService.saveExisting(user);
            String reset_message = "This is the reset password link: " + site_domain + "change-password?token="
                    + resetToken;
            EmailDetails emailDetails = new EmailDetails(user.getEmail(), reset_message,
                    "Reset password for your SkyEdge account.");
            if (emailService.sendSimpleEmail(emailDetails) == false) {
                attributes.addFlashAttribute("error", "Error while sending email!");
            }
            attributes.addFlashAttribute("message", "Password reset email sent!");
            return "redirect:/login";
        } else {
            attributes.addFlashAttribute("message", "No user found with the email supplied!");
            return "redirect:/forgot-password";
        }

    }

    @GetMapping("/change-password")
    public String changePassword(Model model, @RequestParam("token") String token, RedirectAttributes attributes) {
        Optional<User> optionalUser = userService.findByToken(token);
        if (token.equals("")) {
            attributes.addFlashAttribute("error", "Invalid Token!");
            return "redirect:/forgot-password";
        }
        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            LocalDateTime now = LocalDateTime.now();
            if (now.isAfter(optionalUser.get().getTokenExpiryDate())) {
                attributes.addFlashAttribute("error", "Token Expired!");
                return "redirect:/forgot-password";
            }
            model.addAttribute("user", user);
            return "change-password";
        }
        attributes.addFlashAttribute("error", "Invalid Token!");
        return "redirect:/forgot-password";
    }

    @PostMapping("/change-password")
    public String handleChangePassword(@ModelAttribute User user, RedirectAttributes attributes) {
        Optional<User> newUser = userService.findById(user.getUserId());
        newUser.get().setPassword(user.getPassword());
        newUser.get().setResetToken("");
        userService.save(newUser.get());
        attributes.addFlashAttribute("message", "Password changed successfully!");
        return "redirect:/login";
    }

}

package SkyEdge.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import SkyEdge.model.Product;
import SkyEdge.model.Subscriber;
import SkyEdge.model.User;
import SkyEdge.repository.SubscriberRepository;
import SkyEdge.service.ProductService;
import SkyEdge.service.UserService;
import SkyEdge.util.constants.Categories;
import jakarta.validation.Valid;

@Controller
public class UserController {

    @Value("${token.reset.timeout.minutes}")
    private int reset_token_timeout;

    @Value("${site.domain}")
    private String site_domain;

    @Autowired
    private UserService userService;

    @Autowired
    private ProductService productService;

    @GetMapping("/")
    public String home() {
        return "index";
    }

    @GetMapping("/profile")
    public String profile(@AuthenticationPrincipal User user, Model model) {
        User newUser = userService.findOneByUserId(user.getUserId());
        model.addAttribute("user", newUser);
        return "profile";
    }

    @PostMapping("/profile")
    public String saveProfile(@Valid @ModelAttribute User user, Model model) {
        User newUser = userService.findOneByUserId(user.getUserId());
        newUser.setEmail(user.getEmail());
        newUser.setName(user.getName());
        userService.saveExisting(newUser);
        return "redirect:/profile";
    }

    @GetMapping("/about-us")
    public String about_us() {
        return "about-us";
    }

    @GetMapping("/contact-us")
    public String contact_us() {
        return "contact-us";
    }

    @GetMapping("/shop")
    public String shop(
            @RequestParam(value = "category", required = false, defaultValue = "default") String category,
            @RequestParam(value = "sortMode", required = false, defaultValue = "0") int sortMode,
            @RequestParam(value = "page", required = false, defaultValue = "0") int page,
            @RequestParam(value = "size", required = false, defaultValue = "9") int size,
            @RequestParam(value = "direction", required = false, defaultValue = "asc") String direction,
            @RequestParam(value = "query", required = false) String query,
            Model model) {

        List<String> categories = Categories.getAllCategories();
        model.addAttribute("categories", categories);
        model.addAttribute("category", category);
        model.addAttribute("sortMode", sortMode);

        Pageable pageable = PageRequest.of(page, size, Sort.by(getSortDirection(direction), getSortProperty(sortMode)));
        Page<Product> productsPage = productService.getAllProducts(pageable);

        if (!category.equals("default")) {
            productsPage = productService.getProductsByCategory(category, pageable);
        }

        if (query != null && !query.isEmpty()) {
            productsPage = productService.searchProducts(query, pageable);
        }

        model.addAttribute("products", productsPage);
        if (productsPage.isEmpty()) {
            model.addAttribute("message", "No products available in the selected category.");
        }

        return "shop";
    }

    private String getSortProperty(int sortMode) {
        switch (sortMode) {
            case 1:
                return "id";
            case 2:
                return "name";
            case 3:
                return "price";
            default:
                return "id";
        }
    }

    private Sort.Direction getSortDirection(String dir) {
        return "desc".equalsIgnoreCase(dir) ? Sort.Direction.DESC : Sort.Direction.ASC;
    }

    @GetMapping("/product-details/{id}")
    public String product_details(@PathVariable(value = "id") int id, Model model) throws NotFoundException {
        Product product = productService.findById(id).get();
        model.addAttribute("product", product);
        return "product-details";
    }

    @RequestMapping("/about")
    public String requestMethodName() {
        return "about";
    }

    @Autowired
    SubscriberRepository subscriberRepository;

    @PostMapping("/sendEmail")
    public String sendEmail(@Valid @RequestParam String email) {
        Subscriber newSubscriber = new Subscriber();
        newSubscriber.setEmail(email);
        subscriberRepository.save(newSubscriber);
        return "redirect:/";
    }

    @GetMapping("/sendEmail")
    public String addEmail(Model model) {
        Subscriber subsccriber = new Subscriber();
        model.addAttribute("subscriber", subsccriber);
        return "redirect:/";
    }
}

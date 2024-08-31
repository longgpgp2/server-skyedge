package SkyEdge.service;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import SkyEdge.model.Role;
import SkyEdge.model.User;
import jakarta.transaction.Transactional;

@Service
@Transactional
public class AuthenticationService {
    @Autowired
    private UserService userService;

    @Autowired
    private RoleService roleService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public User registerUser(String email, String name, String username, String password) {
        Role userRole = roleService.findByAuthority("USER").get();

        Set<Role> authorities = new HashSet<>();
        authorities.add(userRole);
        System.out.println("role added");
        return userService.save(new User(email, name, username, password, authorities));
    }

}

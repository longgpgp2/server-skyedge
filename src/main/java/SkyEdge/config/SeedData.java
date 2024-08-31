package SkyEdge.config;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import SkyEdge.model.Role;
import SkyEdge.model.User;
import SkyEdge.service.RoleService;
import SkyEdge.service.UserService;

@Component
public class SeedData implements CommandLineRunner {
    @Autowired
    private RoleService roleService;

    @Autowired
    private UserService userService;

    @Override
    public void run(String... args) throws Exception {
        if (roleService.findByAuthority("USER").isEmpty()) {
            Role role = new Role();
            role.setAuthority("USER");
            roleService.save(role);
        }
        if (roleService.findByAuthority("ADMIN").isEmpty()) {
            Role role = new Role();
            role.setAuthority("ADMIN");
            roleService.save(role);
        }
        if (roleService.findByAuthority("SUPERADMIN").isEmpty()) {
            Role role = new Role();
            role.setAuthority("SUPERADMIN");
            roleService.save(role);
            Set<Role> authorities = new HashSet<>();
            authorities.add(role);
            userService.save(
                    new User("skyedgespringboot@gmail.com", "Super Admin", "superadmin", "123456aA",
                            authorities));
        }
    }

}

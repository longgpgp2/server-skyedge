package SkyEdge.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import SkyEdge.model.Order;
import SkyEdge.model.Product;
import SkyEdge.service.OrderService;
import SkyEdge.service.ProductService;
import SkyEdge.service.RoleService;
import SkyEdge.service.UserService;

@Controller
public class AdminController {

    @Autowired
    private ProductService productService;

    @Autowired
    private UserService userService;

    @Autowired
    private RoleService roleService;

    @Autowired
    private OrderService orderService;

    @GetMapping("/admin")
    public String admin(Model model) {
        List<Product> products = productService.findAll();
        List<Order> orders = orderService.findAll();
        int numOfProducts = products.size();
        List<Object> productHistory = new ArrayList<>();
        Long numOfUsers = userService.countByAuthorities(roleService.findByAuthority("USER"));
        Double totalRevenue = 0.0;
        for (Order order : orders) {
            if (order.getStatus().equals("APPROVED"))
                totalRevenue += order.getCost();
        }
        for (Product product : products) {
            List<String> history = new ArrayList<>();
            history.add(product.getCreatedBy().getUsername());
            history.add(" has created a new product: " + product.getName() + ".");
            history.add(product.getImageFileName());
            productHistory.add(history);
        }
        model.addAttribute("totalRevenue", totalRevenue);
        model.addAttribute("orders", orders);
        model.addAttribute("productHistory", productHistory);
        model.addAttribute("numOfProducts", numOfProducts);
        model.addAttribute("numOfUsers", numOfUsers);
        return "admin/dashboard/admin-dashboard";
    }
}
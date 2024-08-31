package SkyEdge.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import SkyEdge.model.CartOrder;
import SkyEdge.model.CartOrderDTO;
import SkyEdge.model.Order;
import SkyEdge.model.Product;
import SkyEdge.model.ProductOrder;
import SkyEdge.model.User;
import SkyEdge.model.Voucher;
import SkyEdge.service.CartOrderService;
import SkyEdge.service.OrderService;
import SkyEdge.service.ProductOrderService;
import SkyEdge.service.ProductService;
import SkyEdge.service.VoucherService;

@Controller
public class CartController {

    @Autowired
    private ProductService productService;

    @Autowired
    private ProductOrderService productOrderService;

    @Autowired
    private CartOrderService cartOrderService;

    @Autowired
    private VoucherService voucherService;

    @Autowired
    private OrderService orderService;

    @GetMapping("/cart")
    public String cart(Model model, @AuthenticationPrincipal User user) {
        List<CartOrder> cartOrders = cartOrderService.findAllByUserId(user.getUserId());
        List<Integer> cartOrderIds = new ArrayList<>();
        List<CartOrderDTO> cartOrderDTOs = new ArrayList();
        int total = 0;
        for (CartOrder cartOrder : cartOrders) {
            cartOrderIds.add(cartOrder.getCartOrderId());
            Product product = productService.findOneById(cartOrder.getProductId());
            CartOrderDTO cartOrderDTO = new CartOrderDTO(product, cartOrder.getQuantity());
            cartOrderDTOs.add(cartOrderDTO);
            total += product.getPrice() * (cartOrder.getQuantity());
        }
        Order productInCart = new Order();
        productInCart.setProductOrderId(cartOrderIds);
        productInCart.setCost(total);
        model.addAttribute("productInCart", productInCart);
        model.addAttribute("orders", cartOrderDTOs);
        return "cart";
    }

    @GetMapping("/cart/delete")
    public String deleteProductInCart(@RequestParam("id") int id, @AuthenticationPrincipal User user) {
        int cartOrderId = cartOrderService.findByProductIdAndUserId(id, user.getUserId()).get().getCartOrderId();
        cartOrderService.deleteById(cartOrderId);
        return "redirect:/cart";
    }

    @GetMapping("/cart/payment-info")
    public String showPaymentInfo(Model model, @AuthenticationPrincipal User user) {
        List<CartOrder> cartOrders = cartOrderService.findAllByUserId(user.getUserId());
        List<Integer> cartOrderIds = new ArrayList<>();
        List<CartOrderDTO> cartOrderDTOs = new ArrayList<>();
        int total = 0;
        for (CartOrder cartOrder : cartOrders) {
            cartOrderIds.add(cartOrder.getCartOrderId());
            Product product = productService.findOneById(cartOrder.getProductId());
            CartOrderDTO cartOrderDTO = new CartOrderDTO(product, cartOrder.getQuantity());
            cartOrderDTOs.add(cartOrderDTO);
            total += product.getPrice() * (cartOrder.getQuantity());
        }
        Order productInCart = new Order();
        productInCart.setProductOrderId(cartOrderIds);
        productInCart.setCost(total);
        model.addAttribute("productInCart", productInCart);
        model.addAttribute("orders", cartOrderDTOs);
        return "payment-info";
    }

    @GetMapping("/cart/payment")
    public String shopPayment(Model model, @AuthenticationPrincipal User user,
            @RequestParam("customerName") String customerName, @RequestParam("email") String email,
            @RequestParam("phone") String phone, @RequestParam("address") String address,
            @RequestParam(value = "voucherCode", required = false, defaultValue = "") String voucherCode) {
        List<CartOrder> cartOrders = cartOrderService.findAllByUserId(user.getUserId());
        List<Integer> productOrderIds = new ArrayList<>();
        List<CartOrderDTO> cartOrderDTOs = new ArrayList<>();
        List<Voucher> vouchers = voucherService.findAll();
        List<ProductOrder> productOrders = productOrderService.findAllByUserId(user.getUserId());
        String newVoucherCode = voucherCode;
        double total = 0.0;
        for (CartOrder cartOrder : cartOrders) {
            Product product = productService.findOneById(cartOrder.getProductId());
            CartOrderDTO cartOrderDTO = new CartOrderDTO(product, cartOrder.getQuantity());
            cartOrderDTOs.add(cartOrderDTO);
            total += product.getPrice() * (cartOrder.getQuantity());
            ProductOrder productOrder = new ProductOrder();
            productOrder.setProductId(product.getId());
            productOrder.setQuantity(cartOrder.getQuantity());
            productOrder.setUserId(user.getUserId());
            productOrderService.save(productOrder);
            productOrderIds.add(productOrder.getProductOrderId());
        }
        Order productInCart = new Order();
        double skyMemberDiscount = 20;
        double discount = 0;
        String currentVoucherName = "";
        Optional<Voucher> voucher = voucherService.findVoucherByVoucherCode(newVoucherCode);
        if (voucher.isPresent()) {
            currentVoucherName = voucher.get().getName();
            discount = voucher.get().getDiscount();
        }

        discount = discount + skyMemberDiscount;
        model.addAttribute("currentVoucherName", currentVoucherName);
        model.addAttribute("currentVoucherDiscount", discount);
        model.addAttribute("totalBefore", total);
        total = total - total * discount / 100;
        productInCart.setCost(total);
        productInCart.setProductOrderId(productOrderIds);
        productInCart.setCustomerName(customerName);
        productInCart.setAddress(address);
        productInCart.setEmail(email);
        productInCart.setPhone(phone);
        productInCart.setDiscount(discount);
        model.addAttribute("voucherCode", newVoucherCode);
        model.addAttribute("productInCart", productInCart);
        model.addAttribute("orders", cartOrderDTOs);
        model.addAttribute("vouchers", vouchers);
        return "payment";
    }

    @PostMapping("/cart/payment/add")
    public String sendOrder(@ModelAttribute Order productInCart) {
        Order order = new Order();
        order.setCost(productInCart.getCost());
        order.setAddress(productInCart.getAddress());
        order.setCustomerName(productInCart.getCustomerName());
        order.setEmail(productInCart.getEmail());
        order.setPhone(productInCart.getPhone());
        order.setStatus("PENDING");
        order.setProductOrderId(productInCart.getProductOrderId());
        order.setDiscount(productInCart.getDiscount());
        orderService.save(order);
        cartOrderService.deleteAll();
        return "redirect:/cart";
    }
}

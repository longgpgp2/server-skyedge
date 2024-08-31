package SkyEdge.controller;

import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.sql.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import SkyEdge.model.CartOrder;
import SkyEdge.model.Product;
import SkyEdge.model.ProductDto;
import SkyEdge.model.User;
import SkyEdge.service.CartOrderService;
import SkyEdge.service.ProductService;
import jakarta.validation.Valid;

@Controller
public class ProductController {
    @Autowired
    private ProductService productService;

    @Autowired
    private CartOrderService cartOrderService;

    @GetMapping("/product-details/add")
    public String buyProduct(@RequestParam("product-id") int productId,
            @RequestParam("product-quantity") int quantity, @AuthenticationPrincipal User user, Model model) {
        System.out.println(productId);
        if (productService.findById(productId).isPresent()) {
            Product product = productService.findById(productId).get();
            if (product.getStock() >= quantity) {
                if (cartOrderService.findByProductId(productId).isEmpty()) {
                    CartOrder cartOrder = new CartOrder(productId, quantity);
                    cartOrder.setUserId(user.getUserId());
                    cartOrderService.save(cartOrder);
                } else {
                    CartOrder cartOrder = cartOrderService.findOneByProductIdAndUserId(productId, user.getUserId());
                    cartOrder.setQuantity(cartOrder.getQuantity() + quantity);
                    cartOrderService.save(cartOrder);
                }

                return "redirect:/cart";
            }
        }
        return "redirect:/product-details/" + productId;
    }

    @GetMapping("/admin/product")
    public String listProducts(Model model) {

        List<Product> products = productService.getAllProducts();
        model.addAttribute("products", products);

        Long productCount = productService.getProductCount();
        model.addAttribute("productCount", productCount);

        return "admin/product/admin-product";
    }

    @GetMapping("/admin/product/add")
    public String addProduct(Model model) {
        ProductDto productDto = new ProductDto();
        model.addAttribute("productDto", productDto);
        return "admin/product/admin-addproduct";
    }

    @PostMapping("/admin/product/add")
    public String addNewProduct(@Valid @ModelAttribute ProductDto productDto, Product product, BindingResult result,
            @AuthenticationPrincipal User user) {

        MultipartFile image = productDto.getImageFile();
        if (image == null || image.isEmpty()) {
            result.rejectValue("imageFile", "NotEmpty", "Image is required");
            return "admin/product/admin-addproduct";
        }

        if (result.hasErrors()) {
            return "admin/product/admin-addproduct";
        }
        Date date;
        String storageFileName = product.getCreatedAt() + "_" + image.getOriginalFilename();
        try {
            String uploadDir = "public/images/";
            Path uploadPath = Paths.get(uploadDir);
            if (!Files.exists(uploadPath)) {
                Files.createDirectories(uploadPath);
            }
            try (InputStream inputStream = image.getInputStream()) {
                Files.copy(inputStream, Paths.get(uploadDir + storageFileName), StandardCopyOption.REPLACE_EXISTING);
            }
        } catch (Exception ex) {
            System.out.println("Exception: " + ex.getMessage());
        }

        Product newProduct = new Product();
        newProduct.setDeleted(false);
        newProduct.setName(productDto.getName());
        newProduct.setDescription(productDto.getDescription());
        newProduct.setImageFileName(storageFileName);
        newProduct.setCountry(productDto.getCountry());
        newProduct.setManufacturer(productDto.getManufacturer());
        newProduct.setPrice(productDto.getPrice());
        newProduct.setStock(productDto.getStock());
        newProduct.setCategory(productDto.getCategory());
        newProduct.setCountry(productDto.getCountry());
        newProduct.setDiscount(productDto.getDiscount());
        newProduct.setFront(productDto.getFront());
        newProduct.setSide(productDto.getSide());
        newProduct.setWidth(productDto.getWidth());
        newProduct.setHeight(productDto.getHeight());
        newProduct.setCreatedBy(user);
        productService.save(newProduct);
        return "redirect:/admin/product";
    }

    @GetMapping("/admin/product/search")
    public String searchProduct(@RequestParam("query") String query, Model model) {
        List<Product> products = productService.findByNameContainingIgnoreCase(query);
        System.out.println(products);
        model.addAttribute("products", products);
        Long productCount = productService.getProductCount();
        model.addAttribute("productCount", productCount);
        return "admin/product/admin-product";
    }

    @GetMapping("/admin/product/delete")
    public String deleteProduct(@RequestParam int id) {
        if (productService.findById(id).isPresent()) {
            Product product = productService.findById(id).get();
            product.setDeleted(true);
            productService.save(product);
        }
        return "redirect:/admin/product";
    }

    @GetMapping("/admin/product/edit")
    public String showUpdateProduct(Model model, @RequestParam int id) {
        try {
            Product product = productService.findById(id).get();
            model.addAttribute("product", product);

            ProductDto productDto = new ProductDto();
            productDto.setName(product.getName());
            productDto.setDescription(product.getDescription());
            productDto.setCountry(product.getCountry());
            productDto.setManufacturer(product.getManufacturer());
            productDto.setPrice(product.getPrice());
            productDto.setStock(product.getStock());
            productDto.setCategory(product.getCategory());
            productDto.setCountry(product.getCountry());
            productDto.setDiscount(product.getDiscount());
            productDto.setFront(product.getFront());
            productDto.setSide(product.getSide());
            productDto.setWidth(product.getWidth());
            productDto.setHeight(product.getHeight());
            model.addAttribute("productDto", productDto);
        } catch (Exception ex) {
            System.out.println("Exception: " + ex.getMessage());
            return "redirect:/admin/product";
        }
        return "admin/product/admin-updateproduct";
    }

    @PostMapping("/admin/product/edit")
    public String updateProduct(Model model, @RequestParam int id, @Valid @ModelAttribute ProductDto productDto,
            BindingResult result) {
        try {
            Product product = productService.findById(id).get();
            model.addAttribute("product", product);

            // if (result.hasErrors()){
            // return "admin/product/admin-updateproduct";
            // }
            if (!productDto.getImageFile().isEmpty()) {
                // delete old image
                String uploadDir = "public/images/";
                Path oldImagePath = Paths.get(uploadDir + product.getImageFileName());

                try {
                    Files.delete(oldImagePath);
                } catch (Exception ex) {
                    System.out.println("Exception: " + ex.getMessage());
                }

                // Save new image file

                MultipartFile image = productDto.getImageFile();
                String storageFileName = product.getId() + "_" + image.getOriginalFilename();

                try (InputStream inputStream = image.getInputStream()) {
                    Files.copy(inputStream, Paths.get(uploadDir + storageFileName),
                            StandardCopyOption.REPLACE_EXISTING);
                }
                product.setImageFileName(storageFileName);
            }
            product.setName(productDto.getName());
            product.setDescription(productDto.getDescription());
            product.setCountry(productDto.getCountry());
            product.setManufacturer(productDto.getManufacturer());
            product.setPrice(productDto.getPrice());
            product.setStock(productDto.getStock());
            product.setCategory(productDto.getCategory());
            product.setCountry(productDto.getCountry());
            product.setDiscount(productDto.getDiscount());
            product.setFront(productDto.getFront());
            product.setSide(productDto.getSide());
            product.setWidth(productDto.getWidth());
            product.setHeight(productDto.getHeight());
            productService.save(product);
        } catch (Exception ex) {
            System.out.println("Exception: " + ex.getMessage());
        }

        return "redirect:/admin/product";
    }

    @GetMapping("/*")
    public String defaultPage() {
        return "redirect:/admin/product";
    }
}

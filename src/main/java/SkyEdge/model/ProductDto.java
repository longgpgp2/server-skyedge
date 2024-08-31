package SkyEdge.model;

import org.springframework.web.multipart.MultipartFile;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ProductDto {
    private MultipartFile imageFile;

    @NotEmpty(message = "Name is required")
    private String name;

    @Size(max = 1000, message = "The description cannot exceed 2000 characters")
    private String description;

    private double price;

    private int stock;

    @NotEmpty(message = "Country is required")
    private String country;

    @NotEmpty(message = "Manufacturer is required")
    private String manufacturer;

    @NotEmpty(message = "Category is required")
    private String category;

    private int discount;

    private double front;
    private double side;

    private double width;

    private double height;
}

package SkyEdge.model;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "name", length = 100, nullable = false)
    private String name;

    @Column(name = "description", length = 1000)
    private String description;

    @Column(name = "image", columnDefinition = "TEXT")
    private String imageFileName;

    @Column(name = "price")
    private double price;

    @Column(name = "stock")
    private int stock;

    @Column(name = "country", length = 100)
    private String country;

    @Column(name = "manufacturer", length = 100)
    private String manufacturer;

    @Column(name = "category", length = 50)
    private String category;

    @Column(name = "discount")
    private int discount;

    @Column(name = "front")
    private double front;

    @Column(name = "side")
    private double side;

    @Column(name = "width")
    private double width;

    @Column(name = "height")
    private double height;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinTable(name = "user_product_junction", joinColumns = {
            @JoinColumn(name = "product_id") }, inverseJoinColumns = {
                    @JoinColumn(name = "user_id") })
    private User createdBy;

    @Column
    private LocalDate createdAt = LocalDate.now();

    @Column
    private Boolean deleted;
}

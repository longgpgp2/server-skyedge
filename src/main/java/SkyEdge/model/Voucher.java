package SkyEdge.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Voucher {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private int id;

@Column(name = "icon")
private String icon;

@Column(name = "code", length = 45, nullable = false)
private String code;

@Column(name = "name", length = 100, nullable = false)
private String name;

@Column(name = "discount", length = 10)
private int discount;

@Column(name = "type", length = 50)
private String type;

@Column(name = "stock")
private int stock;

// @Column(name = "applicable", length = 1000)
// private String applicable;

// @Column(name = "validity_start")
// private LocalDate validityStart;

// @Column(name = "validity_end")
// private LocalDate validityEnd;

}
package SkyEdge.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class VoucherDto {
    private int id;
    private String icon;

    private String code;

    private String name;

    private int discount;

    private String type;

    private int stock;

    // private String applicable;

    // private LocalDate validityStart;

    // private LocalDate validityEnd;

}
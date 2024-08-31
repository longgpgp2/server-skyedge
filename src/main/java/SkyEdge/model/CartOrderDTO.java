package SkyEdge.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class CartOrderDTO {
    private Product product;
    private int quantity;
}

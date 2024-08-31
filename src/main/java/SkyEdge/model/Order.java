package SkyEdge.model;

import java.time.LocalDate;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "user_order")
@NoArgsConstructor
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int orderId;

    @Column(name = "order_date", columnDefinition = "DATE")
    private LocalDate date = LocalDate.now();
    private List<Integer> productOrderId;
    private String status;
    private String address;
    private String phone;
    private double cost;
    private String customerName;
    private String email;
    private double discount;
    // private Voucher voucher;
    // private double total;
    // public void applyVoucher(Voucher voucher) {
    // this.voucher = voucher;
    // }
    // public void applyVoucher(Voucher voucher) {
    // // TODO Auto-generated method stub
    // throw new UnsupportedOperationException("Unimplemented method
    // 'applyVoucher'");
    // }

    // public double calculateTotalAfterDiscount() {
    // if (voucher != null) {
    // double discount = total * voucher.getDiscount() / 100;
    // return total - discount;
    // } else {
    // return total;
    // }
    // }
}
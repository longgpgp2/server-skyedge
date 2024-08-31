package SkyEdge.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import SkyEdge.model.Voucher;

@Repository
public interface VoucherRepository extends JpaRepository<Voucher, Integer> {
    List<Voucher> findByNameContainingIgnoreCase(String query);

    @Query("SELECT COUNT(p) FROM Voucher p")
    Long countVouchers();

    Optional<Voucher> findByCode(String code);
}
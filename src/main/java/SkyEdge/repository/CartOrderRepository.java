package SkyEdge.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import SkyEdge.model.CartOrder;

@Repository
public interface CartOrderRepository extends JpaRepository<CartOrder, Integer> {

    CartOrder findOneByProductId(int id);

    void deleteAllByProductId(int id);

    void deleteByCartOrderId(int id);

    Optional<CartOrder> findByProductId(int id);

    void deleteByProductId(int id);

    List<CartOrder> findAllByUserId(int userId);

    Optional<CartOrder> findByCartOrderId(int cartOrderId);

    Optional<CartOrder> findByProductIdAndUserId(int id, int userId);

    CartOrder findOneByProductIdAndUserId(int productId, int userId);

}

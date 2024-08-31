package SkyEdge.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import SkyEdge.model.ProductOrder;

@Repository
public interface ProductOrderRepository extends JpaRepository<ProductOrder, Integer> {

    ProductOrder findOneByProductId(int id);

    void deleteAllByProductId(int id);

    void deleteByProductOrderId(int id);

    Optional<ProductOrder> findByProductId(int id);

    void deleteByProductId(int id);

    List<ProductOrder> findAllByUserId(int userId);

    Optional<ProductOrder> findByProductOrderId(int productOrderId);

}

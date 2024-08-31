package SkyEdge.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import SkyEdge.model.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {
    List<Product> findByNameContainingIgnoreCase(String query);

    @Query("SELECT COUNT(p) FROM Product p")
    Long countProducts();

    Product findOneById(int productId);

    List<Product> findAllByDeleted(boolean deleted);

    List<Product> findAllByCategory(String category);

    List<Product> findAllByCategoryAndDeleted(String category, boolean b);

    Page<Product> findByCategory(String category, Pageable pageable);

    Page<Product> findByNameContainingIgnoreCase(String productName, Pageable pageable);
}
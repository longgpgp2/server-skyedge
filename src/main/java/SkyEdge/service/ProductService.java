package SkyEdge.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import SkyEdge.model.Product;
import SkyEdge.repository.ProductRepository;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public List<Product> getAllProducts() {
        return productRepository.findAllByDeleted(false);
    }

    public Product findByProductId(int id) throws NotFoundException {
        return productRepository.findById(id).get();
    }

    public Optional<Product> getProductById(int id) {
        return productRepository.findById(id);
    }

    public Long getProductCount() {
        return productRepository.countProducts();
    }

    public Product saveProduct(Product product) {
        return productRepository.save(product);
    }

    public void deleteProduct(int id) {
        productRepository.deleteById(id);
    }

    public List<Product> getProductsByCategory(String category) {
        return productRepository.findAllByCategoryAndDeleted(category, false);
    }

    public Page<Product> getAllProducts(Pageable pageable) {
        return productRepository.findAll(pageable);
    }

    public Page<Product> getProductsByCategory(String category, Pageable pageable) {
        return productRepository.findByCategory(category, pageable);
    }

    public Page<Product> searchProducts(String query, Pageable pageable) {
        return productRepository.findByNameContainingIgnoreCase(query, pageable);
    }

    public List<Product> findAll() {
        return productRepository.findAll();
    }

    public Product findOneById(int productId) {
        return productRepository.findOneById(productId);
    }

    public Optional<Product> findById(int productId) {
        return productRepository.findById(productId);
    }

    public void save(Product newProduct) {
        productRepository.save(newProduct);
    }

    public List<Product> findByNameContainingIgnoreCase(String query) {
        return productRepository.findByNameContainingIgnoreCase(query);
    }
}

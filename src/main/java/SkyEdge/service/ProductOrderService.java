package SkyEdge.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import SkyEdge.model.ProductOrder;
import SkyEdge.repository.ProductOrderRepository;

@Service
public class ProductOrderService {
    @Autowired
    private ProductOrderRepository productOrderRepository;

    public List<ProductOrder> findAllByUserId(int userId) {
        return productOrderRepository.findAllByUserId(userId);
    }

    public void save(ProductOrder productOrder) {
        productOrderRepository.save(productOrder);
    }

    public Optional<ProductOrder> findByProductOrderId(int productOrderId) {
        return productOrderRepository.findByProductOrderId(productOrderId);
    }
}

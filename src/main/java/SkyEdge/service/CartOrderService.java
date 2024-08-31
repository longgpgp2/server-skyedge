package SkyEdge.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import SkyEdge.model.CartOrder;
import SkyEdge.repository.CartOrderRepository;

@Service
public class CartOrderService {
    @Autowired
    private CartOrderRepository cartOrderRepository;

    public List<CartOrder> findAllByUserId(int userId) {
        return cartOrderRepository.findAllByUserId(userId);
    }

    public Optional<CartOrder> findByProductIdAndUserId(int id, int userId) {
        return cartOrderRepository.findByProductIdAndUserId(id, userId);
    }

    public void deleteById(int cartOrderId) {
        cartOrderRepository.deleteById(cartOrderId);
    }

    public void deleteAll() {
        cartOrderRepository.deleteAll();
    }

    public Optional<CartOrder> findByProductId(int productId) {
        return cartOrderRepository.findByProductId(productId);
    }

    public void save(CartOrder cartOrder) {
        cartOrderRepository.save(cartOrder);
    }

    public CartOrder findOneByProductIdAndUserId(int productId, int userId) {
        return cartOrderRepository.findOneByProductIdAndUserId(productId, userId);
    }

}

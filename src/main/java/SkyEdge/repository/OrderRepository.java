package SkyEdge.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import SkyEdge.model.Order;

@Repository
public interface OrderRepository extends JpaRepository<Order, Integer> {

    // Order findCurrentOrder(int userId);

    // Order findCurrentOrder(int userId);

}

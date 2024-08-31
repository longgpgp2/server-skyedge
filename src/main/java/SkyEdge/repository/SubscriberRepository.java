package SkyEdge.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import SkyEdge.model.Subscriber;

@Repository
public interface SubscriberRepository extends JpaRepository<Subscriber, Integer> {
    List<Subscriber> findByEmailContainingIgnoreCase(String query);

    @Query("SELECT COUNT(p) FROM Subscriber p")
    Long countSubscribers();

}
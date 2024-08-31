package SkyEdge.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import SkyEdge.model.Role;
import SkyEdge.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    List<User> findByUsernameContainingIgnoreCase(String query);

    // @Query("SELECT COUNT(p) FROM User p")
    Optional<User> findByUsername(String username);

    Long countByAuthorities(Optional<Role> optional);

    User findOneByUserId(int userId);

    Optional<User> findOneByEmail(String requestEmail);

    Optional<User> findByResetToken(String token);

    List<User> findByIsLocked(Boolean isLocked);
}

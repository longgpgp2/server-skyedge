package SkyEdge.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import SkyEdge.model.Role;
import SkyEdge.model.User;
import SkyEdge.repository.UserRepository;

@Service
public class UserService implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder encoder;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        System.out.println("In the user details service");

        return userRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not valid"));
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public void deleteUser(int id) {
        userRepository.deleteById(id);
    }

    public Long countByAuthorities(Optional<Role> optional) {
        return userRepository.countByAuthorities(optional);
    }

    public Optional<User> findById(int id) {
        return userRepository.findById(id);
    }

    public Optional<User> findByToken(String token) {
        return userRepository.findByResetToken(token);
    }

    public Optional<User> findOneByEmail(String email) {
        return userRepository.findOneByEmail(email);
    }

    public User saveExisting(User user) {
        return userRepository.save(user);
    }

    public User save(User user) {
        user.setPassword(encoder.encode(user.getPassword()));
        // if (user.getPhoto() == null) {
        // String path = photo_prefix.replace("**", "images/person.png");
        // user.setPhoto(path);
        // }

        return userRepository.save(user);
    }

    public Long countByAuthorities() {
        return userRepository.count();
    }

    public List<User> findAll() {
        return userRepository.findAll();
    }

    public User findOneByUserId(int userId) {
        return userRepository.findOneByUserId(userId);
    }

    public List<User> findByUsernameContainingIgnoreCase(String query) {
        return userRepository.findByUsernameContainingIgnoreCase(query);
    }

    public List<User> findValidUsers() {
        return userRepository.findByIsLocked(false);
    }
}

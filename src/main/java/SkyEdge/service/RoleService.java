package SkyEdge.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import SkyEdge.model.Role;
import SkyEdge.repository.RoleRepository;

@Service
public class RoleService {
    @Autowired
    private RoleRepository roleRepository;

    public Optional<Role> findByAuthority(String authority) {
        return roleRepository.findByAuthority(authority);
    }

    public void save(Role role) {
        roleRepository.save(role);
    };

}

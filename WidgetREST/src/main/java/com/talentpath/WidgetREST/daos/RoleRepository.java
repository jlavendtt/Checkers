package com.talentpath.WidgetREST.daos;

import com.talentpath.WidgetREST.models.Role;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RoleRepository extends JpaRepository<Role, Integer> {

    Optional<Role> findByName( Role.RoleName name );

}

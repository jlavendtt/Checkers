package com.talentpath.WidgetREST.daos;

import com.talentpath.WidgetREST.models.PublicWidget;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PublicWidgetRepository extends JpaRepository<PublicWidget, Integer> {
}

package com.talentpath.WidgetREST.daos;

import com.talentpath.WidgetREST.models.PersonalWidget;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PersonalWidgetRepository extends JpaRepository<PersonalWidget, Integer> {
}

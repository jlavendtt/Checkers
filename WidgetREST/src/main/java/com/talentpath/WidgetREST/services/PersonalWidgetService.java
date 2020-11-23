package com.talentpath.WidgetREST.services;

import com.talentpath.WidgetREST.daos.PersonalWidgetRepository;
import com.talentpath.WidgetREST.daos.UserRepository;
import com.talentpath.WidgetREST.models.PersonalWidget;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PersonalWidgetService {

    @Autowired
    UserRepository userRepo;

    @Autowired
    PersonalWidgetRepository repo;

    public List<PersonalWidget> getAllWidgetsFor(String name) {
        throw new UnsupportedOperationException();
    }

    public PersonalWidget getWidgetByIdFor(Integer id, String name) {
        throw new UnsupportedOperationException();
    }

    public PersonalWidget addWidgetFor(PersonalWidget toAdd, String name) {
        throw new UnsupportedOperationException();

    }

    public PersonalWidget editWidgetFor(PersonalWidget updated, String name) {
        throw new UnsupportedOperationException();

    }
}

package com.talentpath.WidgetREST.services;

import com.talentpath.WidgetREST.daos.PublicWidgetRepository;
import com.talentpath.WidgetREST.models.PublicWidget;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PublicWidgetService {

    @Autowired
    PublicWidgetRepository repo;

    public List<PublicWidget> getAllWidgets() {
        return repo.findAll();
    }

    public PublicWidget getWidgetById(Integer id) {
        return repo.getOne( id);
    }

    public PublicWidget addWidget(PublicWidget toAdd) {
        return repo.saveAndFlush( toAdd );
    }

    public PublicWidget editWidget(PublicWidget updated) {
        return repo.saveAndFlush( updated );

    }

    public void deleteWidgetById(Integer id) {
        repo.deleteById( id );
    }
}

package com.talentpath.WidgetREST.controllers;

import com.talentpath.WidgetREST.models.PublicWidget;
import com.talentpath.WidgetREST.services.PublicWidgetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/public/wdgt")
public class PublicController {

    @Autowired
    PublicWidgetService service;

    @GetMapping("/")
    public List<PublicWidget> getAllWidgets(){
        return service.getAllWidgets();
    }

    @GetMapping( "/{id}")
    public PublicWidget getWidgetById(@PathVariable Integer id){
        return service.getWidgetById( id );
    }

    @PostMapping("/")
    public PublicWidget addWidget( @RequestBody PublicWidget toAdd ){
        return service.addWidget( toAdd );
    }

    @PutMapping("/")
    public PublicWidget editWidget( @RequestBody PublicWidget updated ){
        return service.editWidget( updated );
    }

    @DeleteMapping("/{id}")
    public void deleteWidgetById( @PathVariable Integer id ){
        service.deleteWidgetById( id );
    }


}

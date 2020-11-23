package com.talentpath.WidgetREST.controllers;

import com.talentpath.WidgetREST.models.PersonalWidget;
import com.talentpath.WidgetREST.models.PublicWidget;
import com.talentpath.WidgetREST.services.PersonalWidgetService;
import com.talentpath.WidgetREST.services.PublicWidgetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/api/personal/wdgt")
public class PersonalController {

    @Autowired
    PersonalWidgetService service;

    @GetMapping("/")
    public List<PersonalWidget> getAllWidgets(Principal principal){

        return service.getAllWidgetsFor( principal.getName() );
    }

    @GetMapping( "/{id}")
    public PersonalWidget getWidgetById(@PathVariable Integer id, Principal principal){
        return service.getWidgetByIdFor( id, principal.getName() );
    }

    @PostMapping("/")
    public PersonalWidget addWidget( @RequestBody PersonalWidget toAdd, Principal principal ){
        return service.addWidgetFor( toAdd, principal.getName() );
    }

    @PutMapping("/")
    public PersonalWidget editWidget( @RequestBody PersonalWidget updated, Principal principal ){

        return service.editWidgetFor( updated, principal.getName() );
    }


}

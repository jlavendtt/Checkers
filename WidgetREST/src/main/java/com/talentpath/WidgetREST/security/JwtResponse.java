package com.talentpath.WidgetREST.security;

import java.util.List;

public class JwtResponse {

    private String token;
    private String type="Bearer";

    private Integer id;
    private String userName;
    private String email;
    private List<String> roles;

    public JwtResponse( String token, Integer id, String username, String email, List<String> roles ){
        this.token = token;
        this.id = id;
        this.userName = username;
        this.email = email;
        this.roles = roles;
    }

    public JwtResponse(){

    }
}

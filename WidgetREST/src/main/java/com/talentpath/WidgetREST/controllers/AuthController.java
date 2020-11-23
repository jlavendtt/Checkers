package com.talentpath.WidgetREST.controllers;

import com.talentpath.WidgetREST.daos.RoleRepository;
import com.talentpath.WidgetREST.daos.UserRepository;
import com.talentpath.WidgetREST.models.Role;
import com.talentpath.WidgetREST.models.User;
import com.talentpath.WidgetREST.security.*;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.security.Principal;
import java.util.Date;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/auth/")
public class AuthController {

    @Autowired
    AuthenticationManager authManager;

    @Autowired
    UserRepository userRepo;

    @Autowired
    RoleRepository roleRepo;

    @Autowired
    PasswordEncoder encoder;

    @Value( "${widget.app.jwtexpirationms}")
    private Integer jwtExpirationMs;

    @Value("${widget.app.jwtsecret}")
    private String jwtSecret;

    @PostMapping("/signin")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest request){



        //authenticate user and generate jwt token
        //generate response object

        Authentication authentication = authManager.authenticate(
                new UsernamePasswordAuthenticationToken( request.getUsername(), request.getPassword() ));

        UserDetailImpl details = (UserDetailImpl)  authentication.getPrincipal();


        SecurityContextHolder.getContext().setAuthentication( authentication );

        String token = io.jsonwebtoken.Jwts.builder()
                        .setSubject( request.getUsername() )
                        .setIssuedAt( new Date())
                        .setExpiration( new Date(new Date().getTime() +  jwtExpirationMs ))
                        .signWith( SignatureAlgorithm.HS512 ,jwtSecret )
                        .compact();

        return ResponseEntity.ok(
                new JwtResponse( token, details.getId(), details.getUsername(), details.getEmail(),

                        details.getAuthorities().stream().map( auth -> auth.getAuthority() ).collect(Collectors.toList())

                        ));

    }

    @PostMapping
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest request ){

        if( userRepo.existsByUsername( request.getUsername() )){
            return ResponseEntity.badRequest()
                    .body( new MessageResponse( "Error: Username is already taken" ));
        }

        if( userRepo.existsByEmail( request.getEmail()  )){
            return ResponseEntity.badRequest()
                    .body( new MessageResponse("Error: Email is already in use"));
        }

        User toAdd = new User( request.getUsername(), request.getEmail(), encoder.encode(request.getPassword()) );

        toAdd.getRoles().add( roleRepo.findByName(Role.RoleName.ROLE_USER).get());

        toAdd = userRepo.saveAndFlush(toAdd);

        return ResponseEntity.ok( new MessageResponse("User registered successfully!") );

    }


}

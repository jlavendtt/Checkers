package com.talentpath.WidgetREST.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

//@Configuration      //tells Spring that this is to be used once for config
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    UserDetailsServiceImpl userDetailsService;


    @Autowired
    JwtAuthEntryPoint entryPoint;


    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        super.configure(auth);
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .cors()
                .and()
                .csrf().disable()
                .exceptionHandling()
                    .authenticationEntryPoint( entryPoint )
                .and()
                    .sessionManagement().sessionCreationPolicy( SessionCreationPolicy.STATELESS )
                .and()
                    .authorizeRequests()
                        .antMatchers( "/" ).permitAll()

                        //TODO: limit this to GET
                .antMatchers( HttpMethod.GET, "/api/public/wdgt", "/api/public/wdgt/**") .permitAll()
                .antMatchers( HttpMethod.POST, "/api/public/wdgt" ).hasRole("ADMIN")
                .antMatchers( HttpMethod.PUT, "/api/public/wdgt" ).hasRole("ADMIN")
                .antMatchers( HttpMethod.DELETE, "/api/public/wdgt" ).hasRole("ADMIN")


                .antMatchers( HttpMethod.GET, "/api/role/wdgt", "/api/role/wdgt/**").authenticated()
                .antMatchers( HttpMethod.POST, "/api/role/wdgt" ).hasAnyRole("ADMIN", "AUTHOR")
                .antMatchers( HttpMethod.PUT, "/api/role/wdgt" ).hasAnyRole("ADMIN", "AUTHOR")
                .antMatchers( HttpMethod.DELETE, "/api/role/wdgt" ).hasAnyRole("ADMIN", "AUTHOR")


                .antMatchers( HttpMethod.GET, "/api/personal/wdgt", "/api/personal/wdgt/**").authenticated()
                .antMatchers( HttpMethod.POST, "/api/personal/wdgt" ).authenticated()
                .antMatchers( HttpMethod.PUT, "/api/personal/wdgt" ).authenticated()
                .antMatchers( HttpMethod.DELETE, "/api/personal/wdgt" ).authenticated()


                .antMatchers( HttpMethod.GET, "/api/userdata", "/api/userdata/**").hasRole("ADMIN")
                .antMatchers( HttpMethod.POST, "/api/userdata" ).hasRole("ADMIN")
                .antMatchers( HttpMethod.PUT, "/api/userdata" ).hasRole("ADMIN")
                .antMatchers( HttpMethod.DELETE, "/api/userdata" ).hasRole("ADMIN")


                .antMatchers( HttpMethod.POST, "/api/auth/signin").permitAll()
                .antMatchers( HttpMethod.POST, "/api/auth/signup").permitAll()

                .antMatchers( HttpMethod.POST, "/api/games/begin").permitAll()
                .antMatchers( HttpMethod.GET, "/api/games/").permitAll()
                .antMatchers( HttpMethod.POST, "/api/games/move").permitAll()
                .antMatchers( HttpMethod.GET, "/api/games/moves").permitAll()
                .antMatchers( HttpMethod.GET, "/api/games/game/**").permitAll()


                .anyRequest().authenticated();

    }


    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }


    @Bean
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }

}

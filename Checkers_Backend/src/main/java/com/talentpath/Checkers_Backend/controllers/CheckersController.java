package com.talentpath.Checkers_Backend.controllers;

import com.talentpath.Checkers_Backend.models.Game;
import com.talentpath.Checkers_Backend.models.UserMove;
import com.talentpath.Checkers_Backend.services.CheckersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class CheckersController {

    @Autowired
    CheckersService service;

    @PostMapping("/start")
    public Integer startGame() {
        return 1;
        //return service.startGame();
    }

    @GetMapping("/games/{gameId}")
    public Game getGame(@PathVariable Integer gameId) {
        return new Game(1,2,3);
        //return service.getGame(gameId);
    }

    @GetMapping("/games")
    public List<Game> getGames() {
        List<Game> games = new ArrayList<>();
        Game game1 = new Game(1,2,3);
        Game game2 = new Game(4,5,6);
        games.add(game1);
        games.add(game2);
        return games;
        //return service.getGames();
    }

    @PutMapping("/makemove")
    public Game enterMove(@RequestBody UserMove userMove) {
        return service.enterMove(userMove);
    }

    

}

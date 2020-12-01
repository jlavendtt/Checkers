package com.talentpath.WidgetREST.controllers;


import com.talentpath.WidgetREST.ViewModels.GameView;
import com.talentpath.WidgetREST.ViewModels.Play;
import com.talentpath.WidgetREST.services.GameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLOutput;
import java.util.ArrayList;
import java.util.List;
@CrossOrigin
@RestController
@RequestMapping("/api/games/")
public class GameController {
    @Autowired
    GameService service;

    @PostMapping("begin")
    GameView  beginGame() {
        return service.StartGame();
    }

    @GetMapping("")
    public List<GameView> getAllGames() {
        return service.getAllGames();
    }
    @PostMapping( "move")
    public GameView enterMove( @RequestBody Play userMove)  {
        return service.move(userMove);

    }

    @GetMapping("moves/{gameId}")
    public List<Play> getMoves(@PathVariable Integer gameId)  {
        List<Play> moves = new ArrayList<Play>();
        moves.add(new Play());
        moves.add(new Play());
        return moves;
    }

    @GetMapping("game/{gameId}")
    public GameView getGame(@PathVariable Integer gameId)  {
        return service.getGameViewById(gameId);
    }

    @DeleteMapping("rewind/{gameId}")
    public Integer rewind(@PathVariable Integer gameId) {
        service.deleteLastMove(gameId);
        return gameId;

    }

}

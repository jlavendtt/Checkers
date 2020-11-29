package com.talentpath.WidgetREST.controllers;


import com.talentpath.WidgetREST.ViewModels.GameView;
import com.talentpath.WidgetREST.ViewModels.Play;
import com.talentpath.WidgetREST.services.GameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
        List<GameView> list = new ArrayList<GameView>();
        list.add(new GameView(-1));
        return list;
    }
    @PostMapping( "move")
    public GameView enterMove( @RequestBody Play userMove)  {
        return service.move(userMove);

    }

}

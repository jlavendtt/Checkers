package com.talentpath.WidgetREST.services;

import com.talentpath.WidgetREST.models.Game;
import com.talentpath.WidgetREST.models.Move;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest
class GameServiceTest {

    @Autowired
    GameService service;

//    @Test
//    void startGame() {
//    }
//    @Test
//    void getMoves() {
//        List<Move> moves = service.getMoves(1);
//        int i = 0;
//    }

    @Test
    void getGame() {
        Game game = service.getGameById(3);
        int i = 0;


    }
}
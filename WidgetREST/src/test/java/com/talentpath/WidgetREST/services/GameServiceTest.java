package com.talentpath.WidgetREST.services;

import com.talentpath.WidgetREST.daos.GameRepository;
import com.talentpath.WidgetREST.daos.MoveRepository;
import com.talentpath.WidgetREST.daos.TestDao;
import com.talentpath.WidgetREST.models.Game;
import com.talentpath.WidgetREST.models.Move;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
@ExtendWith(SpringExtension.class)
@ActiveProfiles( "production" )
class GameServiceTest {
    TestDao testDao = new TestDao();

    @Autowired
    GameService service;

    @Autowired
    MoveRepository moveRepo;

//    @Test
//    void startGame() {
//    }
//    @Test
//    void getMoves() {
//        List<Move> moves = service.getMoves(1);
//        int i = 0;
//    }

//    @Test
//    void getGame() {
//        Game game = service.getGameById(3);
//        int i = 0;
//
//
//    }
    @Test
    void addMove() {
        Move move = new Move();
        move.setTurnOver(true);
        move.setStartPos(12);
        move.setEndPos(14);
        move.setMoveNum(99);
        move.setGameNum(new Game(1,null,null));
        moveRepo.saveAndFlush(move);
        int i = 0;
    }
    @Test
    void findMovesById() {
        List<Move> list = moveRepo.findByGameNumId(1);
        assertEquals(1,list.size());
    }
}
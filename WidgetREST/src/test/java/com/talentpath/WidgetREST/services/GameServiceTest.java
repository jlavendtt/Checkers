package com.talentpath.WidgetREST.services;

import com.talentpath.WidgetREST.ViewModels.GameView;
import com.talentpath.WidgetREST.ViewModels.Play;
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

    @Autowired
    GameService service;

    @Autowired
    MoveRepository moveRepo;

    @Autowired
    GameRepository gameRepo;

    @Test
    void addGame() {
        Game game = new Game();
        gameRepo.saveAndFlush(game);
    }

    @Test
    void addMove() {

        Game game = new Game();
        game = gameRepo.saveAndFlush(game);
        Play play = new Play();
        play.setGameNum(game.getId());
        service.addMove(play);

    }
    @Test
    void findMovesById() {
        Game game = new Game();
        game = gameRepo.saveAndFlush(game);
        int id = game.getId();
        Play play = new Play();
        play.setGameNum(id);
        service.addMove(play);
        List<Move> list = moveRepo.findByGameNumId(id);
        assertEquals(1,list.size());
    }
    @Test
    void deleteLastWord() {
        Game game = new Game();
        game = gameRepo.saveAndFlush(game);
        int id = game.getId();
        Play play = new Play();
        play.setGameNum(id);
        service.addMove(play);
        service.deleteLastMove(id);
        List<Move> moves = service.getMoves(id);
        assertEquals(0,moves.size());

    }
    @Test
    void getGameViewById() {
        Game game = new Game();
        game = gameRepo.saveAndFlush(game);
        int id = game.getId();
        GameView view = service.getGameViewById(id);
        assertEquals(view.getRep(),new GameView().getRep());

    }

}
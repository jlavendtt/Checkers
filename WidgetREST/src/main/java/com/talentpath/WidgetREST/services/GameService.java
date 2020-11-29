package com.talentpath.WidgetREST.services;

import com.talentpath.WidgetREST.ViewModels.GameView;
import com.talentpath.WidgetREST.daos.GameRepository;
import com.talentpath.WidgetREST.models.Game;
import com.talentpath.WidgetREST.models.Move;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class GameService {
    @Autowired
    GameRepository gameDao;

    public GameView StartGame() {
        Game game = new Game();
       Game va =  gameDao.saveAndFlush(game);

        return new GameView(va.getId());
    }

    public GameView move() {
        return null;
    }
    public List<Move> getMoves() {
        return null;
    }
}

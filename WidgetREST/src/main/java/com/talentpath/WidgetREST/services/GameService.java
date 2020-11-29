package com.talentpath.WidgetREST.services;

import com.talentpath.WidgetREST.ViewModels.GameView;
import com.talentpath.WidgetREST.daos.GameRepository;
import com.talentpath.WidgetREST.daos.MoveRepository;
import com.talentpath.WidgetREST.models.Game;
import com.talentpath.WidgetREST.models.Move;
import com.talentpath.WidgetREST.models.MoveId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service

public class GameService {
    @Autowired
    GameRepository gameDao;

    @Autowired
    MoveRepository moveDao;

    public GameView StartGame() {
        Game game = new Game();
       Game va =  gameDao.saveAndFlush(game);

        return new GameView(va.getId());
    }

    public Game getGameById(Integer id) {
        return gameDao.getOne(1);
    }

    public GameView move() {
        return null;
    }

    public List<Move> getMoves(Integer id) {
        Game game = getGameById(id);
        List<MoveId> ids = new ArrayList<MoveId>();
        for (int i = 0; i<250;++i) {
            MoveId moveid = new MoveId(game,i);
            ids.add(moveid);
        }
        List<Move> moves = moveDao.findAllById(ids);
        return moves;
    }
}

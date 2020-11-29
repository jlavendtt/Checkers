package com.talentpath.WidgetREST.services;

import com.talentpath.WidgetREST.ViewModels.GameView;
import com.talentpath.WidgetREST.ViewModels.Play;
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
        List<Integer> ids = new ArrayList<Integer>();
        ids.add(id);

        List<Game> games = gameDao.findAllById(ids);
        return games.get(0);
    }

    public void addMove(Play usermove) {
        Move move = new Move();
        move.setGameNum(getGameById(usermove.getGameNum()));
        move.setMoveNum(usermove.getMoveNum());
        move.setStartPos(usermove.getStartPos());
        move.setEndPos(usermove.getEndPos());
        move.setTurnOver(usermove.isTurnOver());
        moveDao.save(move);


    }

    public GameView move(Play userMove) {
        addMove(userMove);
        GameView view = new GameView(userMove.getGameNum());
        List<Move> moves = getMoves(userMove.getGameNum());
        for (int i = 0; i< moves.size(); ++i) {
            Move move = moves.get(i);
            if (move.isTurnOver()) view.setRedTurn(!view.isRedTurn());
            int start = move.getStartPos();
            int starti = start/8;
            int startj = start%8;
            int end = move.getEndPos();
            int endi = end/8;
            int endj = end%8;
            view.getRep()[endi][endj] = view.getRep()[starti][startj];
            view.getRep()[starti][startj] = "_";
            int difx = Math.abs(starti-endi);
            int dify = Math.abs(startj-endj);
            if (difx>1 || dify>1) {
                int midi = (starti+endi)/2;
                int midj = (startj+endj)/2;
                view.getRep()[midi][midj] = "_";
            }
            if (endi==0 && view.getRep()[endi][endj].equals("r")) {
                view.getRep()[endi][endj] = "R";
            }
            if (endi==7 && view.getRep()[endi][endj].equals("b")) {
                view.getRep()[endi][endj] = "B";
            }
        }
        return view;
    }

    public List<Move> getMoves(Integer id) {
        List<Move> moves = moveDao.findByGameNumId(id);
        return moves;
    }
}

package com.talentpath.Checkers_Backend.services;

import com.talentpath.Checkers_Backend.daos.CheckersDao;
import com.talentpath.Checkers_Backend.models.Game;
import com.talentpath.Checkers_Backend.models.UserMove;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CheckersService {

    CheckersDao dao;

    @Autowired
    public CheckersService(CheckersDao dao) {
        this.dao = dao;
    }

    public Integer startGame() {
        return dao.startGame();
    }

    public Game enterMove(UserMove userMove) {
        return dao.enterMove(userMove);
    }

    public List<Game> getGames() {
       return dao.getGames();
    }

    public Game getGame(Integer gameId) {
        return dao.getGame(gameId);
    }
}

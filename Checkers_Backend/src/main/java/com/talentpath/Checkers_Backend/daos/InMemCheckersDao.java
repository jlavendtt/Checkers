package com.talentpath.Checkers_Backend.daos;

import com.talentpath.Checkers_Backend.models.Game;
import com.talentpath.Checkers_Backend.models.UserMove;

import java.util.List;

public class InMemCheckersDao implements CheckersDao {
    @Override
    public Integer startGame() {
        return null;
    }

    @Override
    public Game enterMove(UserMove userMove) {
        return null;
    }

    @Override
    public List<Game> getGames() {
        return null;
    }

    @Override
    public Game getGame(Integer gameId) {
        return null;
    }
}

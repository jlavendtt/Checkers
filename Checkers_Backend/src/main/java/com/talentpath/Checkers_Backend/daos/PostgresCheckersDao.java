package com.talentpath.Checkers_Backend.daos;

import com.talentpath.Checkers_Backend.models.Game;
import com.talentpath.Checkers_Backend.models.UserMove;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@Profile({"production"})
public class PostgresCheckersDao implements CheckersDao{

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

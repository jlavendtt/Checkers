package com.talentpath.Checkers_Backend.daos;

import com.talentpath.Checkers_Backend.models.Game;
import com.talentpath.Checkers_Backend.models.UserMove;

import java.util.List;

public interface CheckersDao {
    Integer startGame();

    Game enterMove(UserMove userMove);

    List<Game> getGames();

    Game getGame(Integer gameId);
}

package com.talentpath.Checkers_Backend.models;

public class Game {
    Integer gameId;
    Integer player1;
    Integer player2;

    public Game(Integer gameId, Integer player1, Integer player2) {
        this.gameId = gameId;
        this.player1 = player1;
        this.player2 = player2;
    }

    public void setGameId(Integer gameId) {
        this.gameId = gameId;
    }

    public void setPlayer1(Integer player1) {
        this.player1 = player1;
    }

    public void setPlayer2(Integer player2) {
        this.player2 = player2;
    }

    public Integer getGameId() {
        return gameId;
    }

    public Integer getPlayer1() {
        return player1;
    }

    public Integer getPlayer2() {
        return player2;
    }
}

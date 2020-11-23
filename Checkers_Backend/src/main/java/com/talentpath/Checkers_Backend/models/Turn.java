package com.talentpath.Checkers_Backend.models;

public class Turn {

    Integer gameId;
    Integer turnNum;
    Integer startPos;
    Integer endPos;
    Integer turnOver;

    public Turn(Integer gameId, Integer turnNum, Integer startPos, Integer endPos, Integer turnOver) {
        this.gameId = gameId;
        this.turnNum = turnNum;
        this.startPos = startPos;
        this.endPos = endPos;
        this.turnOver = turnOver;
    }

    public void setGameId(Integer gameId) {
        this.gameId = gameId;
    }

    public void setTurnNum(Integer turnNum) {
        this.turnNum = turnNum;
    }

    public void setStartPos(Integer startPos) {
        this.startPos = startPos;
    }

    public void setEndPos(Integer endPos) {
        this.endPos = endPos;
    }

    public void setTurnOver(Integer turnOver) {
        this.turnOver = turnOver;
    }

    public Integer getTurnNum() {
        return turnNum;
    }

    public Integer getStartPos() {
        return startPos;
    }

    public Integer getEndPos() {
        return endPos;
    }

    public Integer getTurnOver() {
        return turnOver;
    }

    public Integer getGameId() {
        return gameId;
    }
}

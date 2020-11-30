package com.talentpath.WidgetREST.ViewModels;

import java.util.Arrays;

public class GameView {
    private Integer id;
    private String[][] rep;
    private boolean redTurn;
    private Integer moveNum;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        GameView gameView = (GameView) o;

        if (redTurn != gameView.redTurn) return false;
        if (id != null ? !id.equals(gameView.id) : gameView.id != null) return false;
        if (!Arrays.deepEquals(rep, gameView.rep)) return false;
        return moveNum != null ? moveNum.equals(gameView.moveNum) : gameView.moveNum == null;
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + Arrays.deepHashCode(rep);
        result = 31 * result + (redTurn ? 1 : 0);
        result = 31 * result + (moveNum != null ? moveNum.hashCode() : 0);
        return result;
    }

    public Integer getMoveNum() {
        return moveNum;
    }

    public void setMoveNum(Integer moveNum) {
        this.moveNum = moveNum;
    }

    public GameView() {
        setUp();
        redTurn = true;
        moveNum = 1;
    }

    public GameView(Integer id, String[][] rep, boolean redTurn, Integer moveNum) {
        this.id = id;
        this.rep = rep;
        this.redTurn = redTurn;
        this.moveNum = moveNum;
    }

    public GameView(int gameNum) {
        this.id = gameNum;
        setUp();
        redTurn = true;
        moveNum = 1;
    }

    public void  setUp() {
        String[][] prototype = {
                {"_","b","_","b","_","b","_","b"},
                {"b","_","b","_","b","_","b","_"},
                {"_","b","_","b","_","b","_","b"},
                {"_","_","_","_","_","_","_","_"},
                {"_","_","_","_","_","_","_","_"},
                {"r","_","r","_","r","_","r","_"},
                {"_","r","_","r","_","r","_","r"},
                {"r","_","r","_","r","_","r","_"}
        };
        rep = prototype;

    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String[][] getRep() {
        return rep;
    }

    public void setRep(String[][] rep) {
        this.rep = rep;
    }

    public boolean isRedTurn() {
        return redTurn;
    }

    public void setRedTurn(boolean redTurn) {
        this.redTurn = redTurn;
    }
}

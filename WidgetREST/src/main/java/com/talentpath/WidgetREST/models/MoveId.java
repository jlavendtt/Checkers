package com.talentpath.WidgetREST.models;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import java.io.Serializable;

public class MoveId implements Serializable {


    private Game gameNum;
    private Integer moveNum;

    public MoveId() {
    }

    public MoveId(Game gameNum, Integer moveNum) {
        this.gameNum = gameNum;
        this.moveNum = moveNum;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        MoveId moveId = (MoveId) o;

        if (gameNum != null ? !gameNum.equals(moveId.gameNum) : moveId.gameNum != null) return false;
        return moveNum != null ? moveNum.equals(moveId.moveNum) : moveId.moveNum == null;
    }

    @Override
    public int hashCode() {
        int result = gameNum != null ? gameNum.hashCode() : 0;
        result = 31 * result + (moveNum != null ? moveNum.hashCode() : 0);
        return result;
    }

    public Game getGameNum() {
        return gameNum;
    }

    public void setGameNum(Game gameNum) {
        this.gameNum = gameNum;
    }

    public Integer getMoveNum() {
        return moveNum;
    }

    public void setMoveNum(Integer moveNum) {
        this.moveNum = moveNum;
    }
}

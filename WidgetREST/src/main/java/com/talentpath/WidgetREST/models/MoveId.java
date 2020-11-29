package com.talentpath.WidgetREST.models;

import java.io.Serializable;

public class MoveId implements Serializable {

    private Integer gameNumId;
    private Integer moveNum;

    public MoveId() {
    }

    public MoveId(Integer gameNumId, Integer moveNum) {
        this.gameNumId = gameNumId;
        this.moveNum = moveNum;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        MoveId moveId = (MoveId) o;

        if (gameNumId != null ? !gameNumId.equals(moveId.gameNumId) : moveId.gameNumId != null) return false;
        return moveNum != null ? moveNum.equals(moveId.moveNum) : moveId.moveNum == null;
    }

    @Override
    public int hashCode() {
        int result = gameNumId != null ? gameNumId.hashCode() : 0;
        result = 31 * result + (moveNum != null ? moveNum.hashCode() : 0);
        return result;
    }

    public Integer getGameNumId() {
        return gameNumId;
    }

    public void setGameNumId(Integer gameNumId) {
        this.gameNumId = gameNumId;
    }

    public Integer getMoveNum() {
        return moveNum;
    }

    public void setMoveNum(Integer moveNum) {
        this.moveNum = moveNum;
    }
}
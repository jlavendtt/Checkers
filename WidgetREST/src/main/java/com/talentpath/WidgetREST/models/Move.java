package com.talentpath.WidgetREST.models;


import jdk.jfr.BooleanFlag;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table( name="moves")
@IdClass(MoveId.class)
public class Move {


    @Id
    @ManyToOne
    private Game gameNum;

    @Id
    @GeneratedValue( strategy = GenerationType.AUTO)
    private Integer moveNum;

    @NotNull
    @Size(max = 120)
    private Integer startPos;

    @NotNull
    @Size(max = 120)
    private Integer endPos;

    private boolean turnOver;


    public Move() {
    }

    public Move(Game gameNum, Integer moveNum, @NotNull @Size(max = 120) Integer startPos) {
        this.gameNum = gameNum;
        this.moveNum = moveNum;
        this.startPos = startPos;
    }

    public Integer getStartPos() {
        return startPos;
    }

    public void setStartPos(Integer startPos) {
        this.startPos = startPos;
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Move move = (Move) o;

        if (gameNum != null ? !gameNum.equals(move.gameNum) : move.gameNum != null) return false;
        return moveNum != null ? moveNum.equals(move.moveNum) : move.moveNum == null;
    }

    @Override
    public int hashCode() {
        int result = gameNum != null ? gameNum.hashCode() : 0;
        result = 31 * result + (moveNum != null ? moveNum.hashCode() : 0);
        return result;
    }
}

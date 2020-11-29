package com.talentpath.WidgetREST.ViewModels;

public class GameView {
    private Integer id;
    private String[][] rep;
    private boolean redTurn;

    public GameView() {
        setUp();
        redTurn = true;
    }

    public GameView(int gameNum) {
        this.id = gameNum;
        setUp();
        redTurn = true;
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

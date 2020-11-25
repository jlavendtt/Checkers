package com.talentpath.WidgetREST.models;

import javax.persistence.*;

@Entity
@Table( name="games")
public class Game {
    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY)        //maybe AUTO instead?
    private Integer id;

    @ManyToOne
    private User player1;

    @ManyToOne
    private User player2;

    public Game() {
    }

    public Game(Integer id, User player1, User player2) {
        this.id = id;
        this.player1 = player1;
        this.player2 = player2;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public User getPlayer1() {
        return player1;
    }

    public void setPlayer1(User player1) {
        this.player1 = player1;
    }

    public User getPlayer2() {
        return player2;
    }

    public void setPlayer2(User player2) {
        this.player2 = player2;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Game game = (Game) o;

        if (id != null ? !id.equals(game.id) : game.id != null) return false;
        if (player1 != null ? !player1.equals(game.player1) : game.player1 != null) return false;
        return player2 != null ? player2.equals(game.player2) : game.player2 == null;
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (player1 != null ? player1.hashCode() : 0);
        result = 31 * result + (player2 != null ? player2.hashCode() : 0);
        return result;
    }
}

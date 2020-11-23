package com.talentpath.WidgetREST.models;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table( name="personalwidgets" )
public class PersonalWidget {

    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY)
    Integer id;

    @NotBlank
    @Size( max=50 )
    private String name;


//    @NotNull
//    private Integer user_id;

    @ManyToOne
    private User associatedUser;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public User getAssociatedUser() {
        return associatedUser;
    }

    public void setAssociatedUser(User associatedUser) {
        this.associatedUser = associatedUser;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        PersonalWidget that = (PersonalWidget) o;

        if (id != null ? !id.equals(that.id) : that.id != null) return false;
        if (name != null ? !name.equals(that.name) : that.name != null) return false;
        return associatedUser != null ? associatedUser.equals(that.associatedUser) : that.associatedUser == null;
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (name != null ? name.hashCode() : 0);
        result = 31 * result + (associatedUser != null ? associatedUser.hashCode() : 0);
        return result;
    }
}

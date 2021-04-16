package com.georgidinov.domain;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import java.util.Objects;

import static com.georgidinov.util.EntityConstants.COLUMN_NAME_USER_ID;

@Entity
public class CommunityUserCredentials {

    //== fields ==
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String email;
    private String password;

    @OneToOne
    @JoinColumn(name = COLUMN_NAME_USER_ID)
    private CommunityUser user;


    //== constructors ==
    public CommunityUserCredentials() {
    }


    //== getters and setters ==
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public CommunityUser getUser() {
        return user;
    }

    public void setUser(CommunityUser user) {
        this.user = user;
    }

    //== equals hashcode and toString ==


    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof CommunityUserCredentials)) {
            return false;
        }

        CommunityUserCredentials that = (CommunityUserCredentials) o;

        if (!Objects.equals(id, that.id)) {
            return false;
        }
        if (!Objects.equals(email, that.email)) {
            return false;
        }
        return Objects.equals(password, that.password);
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        return result + 53;
    }
}
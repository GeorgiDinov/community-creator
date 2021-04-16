package com.georgidinov.domain;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import java.util.Objects;

import static com.georgidinov.util.EntityConstants.COLUMN_NAME_USER;
import static com.georgidinov.util.EntityConstants.COLUMN_NAME_USER_ID;

@Entity
public class CommunityUser {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = COLUMN_NAME_USER_ID)
    private Long id;

    private String firstName;
    private String lastName;

    @OneToOne(mappedBy = COLUMN_NAME_USER, cascade = CascadeType.PERSIST)
    private CommunityUserAddress address;

    @OneToOne(mappedBy = COLUMN_NAME_USER, cascade = CascadeType.PERSIST)
    private CommunityUserCredentials credentials;


    //== constructors ==
    public CommunityUser() {
    }


    //== getters and setters ==
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public CommunityUserAddress getAddress() {
        return address;
    }

    public void setAddress(CommunityUserAddress address) {
        this.address = address;
    }

    public CommunityUserCredentials getCredentials() {
        return credentials;
    }

    public void setCredentials(CommunityUserCredentials credentials) {
        this.credentials = credentials;
    }

    //== equals hashcode and toString ==

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof CommunityUser)) {
            return false;
        }

        CommunityUser that = (CommunityUser) o;

        if (!Objects.equals(id, that.id)) {
            return false;
        }
        if (!Objects.equals(firstName, that.firstName)) {
            return false;
        }
        return Objects.equals(lastName, that.lastName);
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        return result + 31;
    }

    @Override
    public String toString() {
        return "CommunityUser{" +
                "id=" + id +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                '}';
    }
}
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
public class CommunityUserAddress {

    //== fields ==
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String street;
    private String city;
    private String province;

    @OneToOne
    @JoinColumn(name = COLUMN_NAME_USER_ID)
    private CommunityUser user;


    //== constructors ==
    public CommunityUserAddress() {
    }


    //== getters and setters ==
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getProvince() {
        return province;
    }

    public void setProvince(String province) {
        this.province = province;
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
        if (!(o instanceof CommunityUserAddress)) {
            return false;
        }

        CommunityUserAddress that = (CommunityUserAddress) o;

        if (!Objects.equals(id, that.id)) {
            return false;
        }
        if (!Objects.equals(street, that.street)) {
            return false;
        }
        if (!Objects.equals(city, that.city)) {
            return false;
        }
        return Objects.equals(province, that.province);
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        return result + 17;
    }

    @Override
    public String toString() {
        return "CommunityUserAddress{" +
                "id=" + id +
                ", street='" + street + '\'' +
                ", city='" + city + '\'' +
                ", province='" + province + '\'' +
                '}';
    }
}
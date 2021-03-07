package com.georgidinov.repository;

import com.georgidinov.domain.CommunityUserAddress;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CommunityUserAddressRepository extends JpaRepository<CommunityUserAddress, Long> {

}
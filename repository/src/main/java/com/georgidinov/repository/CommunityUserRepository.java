package com.georgidinov.repository;

import com.georgidinov.domain.CommunityUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CommunityUserRepository extends JpaRepository<CommunityUser, Long> {

}
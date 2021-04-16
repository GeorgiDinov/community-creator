package com.georgidinov.repository;

import com.georgidinov.domain.CommunityUserCredentials;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CommunityUserCredentialsRepository extends JpaRepository<CommunityUserCredentials, Long> {

}
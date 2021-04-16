package com.georgidinov.web.bootstrap;

import com.georgidinov.domain.CommunityUser;
import com.georgidinov.domain.CommunityUserAddress;
import com.georgidinov.domain.CommunityUserCredentials;
import com.georgidinov.repository.CommunityUserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements CommandLineRunner {

    Logger log = LoggerFactory.getLogger(DataLoader.class);

    private final CommunityUserRepository communityUserRepository;

    @Autowired
    public DataLoader(CommunityUserRepository communityUserRepository) {
        this.communityUserRepository = communityUserRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        this.insertUser();
        log.info("Loaded...");
    }


    private void insertUser() {
        CommunityUserAddress address = new CommunityUserAddress();
        address.setStreet("Chiprovets");
        address.setCity("Plovdiv");
        address.setProvince("Plovdiv");

        CommunityUserCredentials credentials = new CommunityUserCredentials();
        credentials.setEmail("email@example.com");
        credentials.setPassword("password");

        CommunityUser user = new CommunityUser();
        user.setFirstName("John");
        user.setLastName("Doe");

        user.setAddress(address);
        address.setUser(user);

        user.setCredentials(credentials);
        credentials.setUser(user);

        this.communityUserRepository.save(user);
    }
}
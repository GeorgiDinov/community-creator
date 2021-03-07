package com.georgidinov.web;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EntityScan(basePackages = "com.georgidinov.domain")
@EnableJpaRepositories(basePackages = "com.georgidinov.repository")
public class WebMain {

    public static void main(String[] args) {
        SpringApplication.run(WebMain.class, args);
    }

}

// for problems in multi module spring boot situations relate to
// https://spring.io/guides/gs/multi-module/
//---------------------------------------------------------------------------------------
//    If yourapplication also uses JPA or Spring Data,
//        the@EntityScan and@EnableJpaRepositories(and related) annotations
//        inherit only their base package from@SpringBootApplication when not explicitly specified.
//        That is,once you specify scanBasePackageClasses or scanBasePackages,
//        you might also have to also explicitly use
//    @EntityScan and@EnableJpaRepositories with their package scans explicitly configured.
//---------------------------------------------------------------------------------------
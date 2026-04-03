package com.Airline;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = "com.Airline")
public class AirlineBackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(AirlineBackendApplication.class, args);
    }
}
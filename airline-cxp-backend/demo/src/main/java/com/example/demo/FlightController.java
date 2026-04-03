package com.example.demo;

import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/api/flights")
@CrossOrigin(origins = "http://localhost:3000")
public class FlightController {

    @GetMapping
    public List<Map<String, String>> getFlights() {

        List<Map<String, String>> flights = new ArrayList<>();

        Map<String, String> flight1 = new HashMap<>();
        flight1.put("name", "American Airlines");
        flight1.put("price", "$320");

        Map<String, String> flight2 = new HashMap<>();
        flight2.put("name", "Delta Airlines");
        flight2.put("price", "$350");

        flights.add(flight1);
        flights.add(flight2);

        return flights;
    }
}
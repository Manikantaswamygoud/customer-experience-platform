package com.example.demo;

import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/api/bookings")
@CrossOrigin(origins = "http://localhost:3000")
public class BookingController {

    private List<Map<String, String>> bookings = new ArrayList<>();

    @PostMapping
    public Map<String, String> createBooking(@RequestBody Map<String, String> booking) {
        bookings.add(booking);
        return booking;
    }

    @GetMapping
    public List<Map<String, String>> getBookings() {
        return bookings;
    }
}
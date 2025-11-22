package com.example.demo.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.entity.SeatBookingRequest;
import com.example.demo.service.BookingService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class BookingController {

    @Autowired
    private BookingService bookingService;

    @PostMapping("/book-seats")
    public ResponseEntity<String> bookSeats(@RequestBody SeatBookingRequest request) {

        bookingService.bookSeats(request.getShowId(), request.getSeatIds());

        return ResponseEntity.ok("Seats booked successfully");
    }
}



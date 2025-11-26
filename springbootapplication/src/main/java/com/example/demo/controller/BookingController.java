package com.example.demo.controller;


import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.entity.Booking;
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
    // Save a booking (called after payment)
    @PostMapping("/save-booking")
    public Booking saveBooking(@RequestBody Booking booking) {

        // add timestamp
        booking.setBookingTime(
                LocalDateTime.now().format(DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm"))
        );

        return bookingService.saveBooking(booking);
    }

    // Fetch bookings for a user
    @GetMapping("/bookings/{email}")
    public List<Booking> getBookings(@PathVariable String email) {
        return bookingService.getBookingsByEmail(email);
    }

}



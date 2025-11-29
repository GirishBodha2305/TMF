package com.example.demo.service;


import java.util.List;

import com.example.demo.entity.Booking;

public interface BookingService {

    void bookSeats(Long showId, List<Long> seatIds);
    Booking saveBooking(Booking booking);

    List<Booking> getBookingsByEmail(String email);
}

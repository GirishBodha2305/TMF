package com.example.demo.service;


import java.util.List;

public interface BookingService {

    void bookSeats(Long showId, List<Long> seatIds);
}

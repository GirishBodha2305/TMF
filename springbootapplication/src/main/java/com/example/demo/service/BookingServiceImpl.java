package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Booking;
import com.example.demo.entity.Seat;
import com.example.demo.repository.BookingRepository;
import com.example.demo.repository.SeatRepository;

@Service
public class BookingServiceImpl implements BookingService {

    @Autowired
    private SeatRepository seatRepository;
    
    @Autowired 
    private BookingRepository bookingrepository;

    @Override
    public void bookSeats(Long showId, List<Long> seatIds) {

        // Load all seats by IDs
        List<Seat> seats = seatRepository.findAllById(seatIds);

        for (Seat seat : seats) {
            // Optional safety: ensure seat belongs to the given show
            if (!seat.getShow().getShowId().equals(showId)) {
                // you can skip or throw exception; here we skip
                continue;
            }

            // Mark as booked
            if (!seat.isBooked()) {
                seat.setBooked(true);
            }
        }

        seatRepository.saveAll(seats);
    }

    @Override
    public Booking saveBooking(Booking booking) {
        return bookingrepository.save(booking);
    }

    @Override
    public List<Booking> getBookingsByEmail(String email) {
        return bookingrepository.findByUserEmail(email);
    }
}

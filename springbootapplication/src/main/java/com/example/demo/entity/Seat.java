package com.example.demo.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "seats")
public class Seat {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String seatNumber; // A1, A2...

    private boolean isBooked;

    @ManyToOne
    @JoinColumn(name = "show_id")
    private MovieShow show;

    public Seat() {}

    public Seat(String seatNumber, boolean isBooked, MovieShow show) {
        this.seatNumber = seatNumber;
        this.isBooked = isBooked;
        this.show = show;
    }

    // ------- Getters and Setters ------- //

    public Long getId() {
        return id;
    }

    public String getSeatNumber() {
        return seatNumber;
    }

    public void setSeatNumber(String seatNumber) {
        this.seatNumber = seatNumber;
    }

    public boolean isBooked() {
        return isBooked;
    }

    public void setBooked(boolean booked) {
        isBooked = booked;
    }

    public MovieShow getShow() {
        return show;
    }

    public void setShow(MovieShow show) {
        this.show = show;
    }
}

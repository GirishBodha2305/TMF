package com.example.demo.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "booking")
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String showTime;
    public Booking(Long id, String showTime, Long showId, String movieName, String theatreName, String seatNumbers,
			String userEmail, String bookingTime) {
		super();
		this.id = id;
		this.showTime = showTime;
		this.showId = showId;
		this.movieName = movieName;
		this.theatreName = theatreName;
		this.seatNumbers = seatNumbers;
		this.userEmail = userEmail;
		this.bookingTime = bookingTime;
	}

	public String getShowTime() {
		return showTime;
	}

	public void setShowTime(String showTime) {
		this.showTime = showTime;
	}

	private Long showId;

    private String movieName;
    private String theatreName;

    private String seatNumbers;    

    public Booking() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Booking(Long id, Long showId, String movieName, String theatreName, String seatNumbers, String userEmail,
			String bookingTime) {
		super();
		this.id = id;
		this.showId = showId;
		this.movieName = movieName;
		this.theatreName = theatreName;
		this.seatNumbers = seatNumbers;
		this.userEmail = userEmail;
		this.bookingTime = bookingTime;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getShowId() {
		return showId;
	}

	public void setShowId(Long showId) {
		this.showId = showId;
	}

	public String getMovieName() {
		return movieName;
	}

	public void setMovieName(String movieName) {
		this.movieName = movieName;
	}

	public String getTheatreName() {
		return theatreName;
	}

	public void setTheatreName(String theatreName) {
		this.theatreName = theatreName;
	}

	public String getSeatNumbers() {
		return seatNumbers;
	}

	public void setSeatNumbers(String seatNumbers) {
		this.seatNumbers = seatNumbers;
	}

	public String getUserEmail() {
		return userEmail;
	}

	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}

	public String getBookingTime() {
		return bookingTime;
	}

	public void setBookingTime(String bookingTime) {
		this.bookingTime = bookingTime;
	}

	private String userEmail;

    private String bookingTime;
}

package com.example.demo.entity;



import java.util.List;

public class SeatBookingRequest {

    private Long showId;
    private List<Long> seatIds;

    public SeatBookingRequest() {}

    public Long getShowId() {
        return showId;
    }

    public void setShowId(Long showId) {
        this.showId = showId;
    }

    public List<Long> getSeatIds() {
        return seatIds;
    }

    public void setSeatIds(List<Long> seatIds) {
        this.seatIds = seatIds;
    }
}

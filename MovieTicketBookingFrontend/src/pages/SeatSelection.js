import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function SeatSelection() {
  const { showId } = useParams();
  const navigate = useNavigate();

  const [seats, setSeats] = useState([]);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/api/shows/${showId}/seats`)
      .then(res => res.json())
      .then(data => {
        console.log("Seats Response:", data);
        setSeats(data);
      });
  }, [showId]);

  const toggleSeat = (seat) => {
    if (seat.booked) return;

    const seatId = seat.id;

    if (selected.includes(seatId)) {
      setSelected(selected.filter(id => id !== seatId));
    } else {
      setSelected([...selected, seatId]);
    }
  };

  const confirmBooking = () => {
    if (selected.length === 0) {
      alert("Please select at least one seat!");
      return;
    }

    const seatNumbers = selected
      .map(id => seats.find(s => s.id === id)?.seatNumber)
      .join(", ");

    navigate("/payment", {
      state: {
        seats: selected,                   // seat IDs
        seatNumbers: seatNumbers,          // A1, A2...
        total: selected.length * 150,
        showId: showId
      }
    });
  };

  return (
    <div style={styles.page}>
      <h2 style={styles.title}>🎟 Select Your Seats</h2>

      {/* Legend */}
      <div style={styles.legend}>
        <div style={styles.legendItem}>
          <div style={{ ...styles.legendBox, background: "#222" }}></div> Available
        </div>
        <div style={styles.legendItem}>
          <div style={{ ...styles.legendBox, background: "#ffcc00" }}></div> Selected
        </div>
        <div style={styles.legendItem}>
          <div style={{ ...styles.legendBox, background: "#555" }}></div> Booked
        </div>
        <div style={styles.legendItem}>
          <div style={{ ...styles.legendBox, background: "#0080ff" }}></div> VIP
        </div>
      </div>

      <div style={styles.screen}>SCREEN</div>

      {/* Seat Grid */}
      <div style={styles.grid}>
        {seats.map((seat) => {
          const isSelected = selected.includes(seat.id);
          const isVip = seat.seatNumber.startsWith("A");
          const isBooked = seat.booked;

          let bgColor = "#222"; // default available

          if (isBooked) bgColor = "#555";
          else if (isVip) bgColor = "#0080ff"; // VIP
          if (isSelected) bgColor = "#ffcc00"; // SELECTED always takes priority

          return (
            <div
              key={seat.id}
              style={{
                ...styles.seat,
                backgroundColor: bgColor,
                cursor: isBooked ? "not-allowed" : "pointer",
              }}
              onClick={() => toggleSeat(seat)}
            >
              {seat.seatNumber}
            </div>
          );
        })}
      </div>

      {/* Summary */}
      <div style={styles.summary}>
        <p>
          Selected Seats:{" "}
          {selected.map(id => seats.find(s => s.id === id)?.seatNumber).join(", ")}
        </p>
        <p>Total Price: ₹ {selected.length * 150}</p>

        <button style={styles.confirmBtn} onClick={confirmBooking}>
          ✅ Confirm Booking
        </button>
      </div>
    </div>
  );
}

const styles = {
  page: {
    padding: "40px",
    background: "#111",
    minHeight: "100vh",
    color: "white",
    fontFamily: "Poppins, sans-serif",
  },
  title: { textAlign: "center", color: "#ffcc00", marginBottom: "20px" },
  screen: {
    background: "#ffcc00",
    width: "60%",
    margin: "0 auto",
    padding: "10px",
    borderRadius: "6px",
    fontWeight: "bold",
    marginBottom: "30px",
    textAlign: "center",
  },
  legend: {
    display: "flex",
    justifyContent: "center",
    gap: "25px",
    marginBottom: "20px",
  },
  legendItem: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  legendBox: {
    width: "20px",
    height: "20px",
    borderRadius: "4px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(10, 1fr)",
    gap: "12px",
    justifyItems: "center",
    marginBottom: "40px",
  },
  seat: {
    width: "45px",
    height: "45px",
    borderRadius: "6px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontWeight: "bold",
  },
  summary: {
    textAlign: "center",
    fontSize: "20px",
  },
  confirmBtn: {
    marginTop: "20px",
    padding: "12px 25px",
    background: "#ffcc00",
    border: "none",
    borderRadius: "8px",
    fontSize: "18px",
    cursor: "pointer",
    fontWeight: "bold",
    color: "#222",
  },
};

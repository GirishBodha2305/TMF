import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Payment() {
  const location = useLocation();
  const navigate = useNavigate();

  // Data from SeatSelection
  const seats = location.state?.seats || [];       
  const seatNumbers = location.state?.seatNumbers;
  const showId = location.state?.showId;
  const total = location.state?.total || 0;

  // NEW FIELDS
  const movieName = location.state?.movieName;
  const theatreName = location.state?.theatreName;
  const showTime = location.state?.showTime;

  const completePayment = async () => {
    try {
      const email = localStorage.getItem("userName");

      // 1️⃣ BLOCK SEATS
      await fetch("http://localhost:8080/api/book-seats", {
        method: "POST", 
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          showId: showId,
          seatIds: seats
        }),
      });

      // 2️⃣ SAVE BOOKING DETAILS
      const response = await fetch("http://localhost:8080/api/save-booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          showId: showId,
          seatNumbers: seatNumbers,
          movieName: movieName,
          theatreName: theatreName,
          showTime: showTime,
          userEmail: email
        }),
      });

      if (response.ok) {
        alert("Payment Successful! 🎉 Seats Booked.");
        navigate("/movieslist");
      } else {
        alert("Booking Failed!");
      }

    } catch (err) {
      alert("Payment Error!");
      console.log(err);
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>💳 Payment</h2>

        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>🎟 Booking Summary</h3>
          <p><strong>Movie:</strong> {movieName}</p>
          <p><strong>Theatre:</strong> {theatreName}</p>
          <p><strong>Show Time:</strong> {showTime}</p>
          <p><strong>Seats:</strong> {seatNumbers}</p>
          <p><strong>Total Amount:</strong> ₹ {total}</p>
        </div>

        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Choose Payment Method</h3>

          <div style={styles.wallets}>
            <img
              src="https://static.vecteezy.com/system/resources/previews/056/850/862/non_2x/phonepe-app-icon-on-a-transparent-background-free-png.png"
              alt="PhonePe"
              style={styles.walletIcon}
              onClick={completePayment}
            />
            <img
              src="https://static.vecteezy.com/system/resources/previews/020/190/501/non_2x/paytm-logo-paytm-icon-free-free-vector.jpg"
              alt="Paytm"
              style={styles.walletIcon}
              onClick={completePayment}
            />
            <img
              src="https://animationvisarts.com/wp-content/uploads/2023/11/Frame-43-1.png"
              alt="GooglePay"
              style={styles.walletIcon}
              onClick={completePayment}
            />
          </div>
        </div>

        <button style={styles.payBtn} onClick={completePayment}>
          Pay ₹ {total}
        </button>
      </div>
    </div>
  );
}

const styles = {
  page: {
    background: "#111",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    background: "rgba(255, 255, 255, 0.15)",
    padding: "30px",
    borderRadius: "15px",
    width: "420px",
    color: "white",
    backdropFilter: "blur(10px)",
  },
  title: {
    textAlign: "center",
    fontSize: "28px",
    color: "#ffcc00",
  },
  section: {
    marginBottom: "25px",
  },
  sectionTitle: {
    fontSize: "20px",
    color: "#ffcc00",
  },
  wallets: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "10px",
  },
  walletIcon: {
    width: "90px",
    height: "45px",
    padding: "6px",
    background: "white",
    borderRadius: "8px",
    cursor: "pointer",
  },
  payBtn: {
    width: "100%",
    padding: "14px",
    backgroundColor: "#ffcc00",
    borderRadius: "8px",
    border: "none",
    color: "#111",
    fontWeight: "bold",
    fontSize: "16px",
    cursor: "pointer",
  },
};

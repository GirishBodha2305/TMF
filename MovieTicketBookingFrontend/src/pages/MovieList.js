import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [userName, setUserName] = useState("");
  const [bookings, setBookings] = useState([]);
  const [showBookings, setShowBookings] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    if (storedName) {
      setUserName(storedName);
    }

    fetch(`http://localhost:8080/api/movies?page=${page}&size=6`)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.content);
        setTotalPages(data.totalPages);
      });
  }, [page]);

  const fetchBookings = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/bookings/${userName}`);
      const data = await response.json();
      setBookings(data);
      setShowBookings(true);
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.overlay}>
        <div style={styles.header}>
          <h2 style={styles.title}>🎬 Movie List</h2>

          {userName && (
            <div style={styles.userInfo}>
              <span>🍿 {userName}</span>

              <button style={styles.myBookingsBtn} onClick={fetchBookings}>
                🎟 My Bookings
              </button>

              <button
                style={styles.logoutBtn}
                onClick={() => {
                  localStorage.clear();
                  window.location.href = "/login";
                }}
              >
                Logout
              </button>
            </div>
          )}
        </div>

        <div style={styles.grid}>
          {movies.map((movie) => (
            <div key={movie.movieId} style={styles.card}>
              <img
                src={movie.movieImageUrl}
                alt={movie.movieTitle}
                style={styles.image}
              />
              <div style={styles.cardBody}>
                <h3 style={styles.movieTitle}>{movie.movieTitle}</h3>
                <p>⏱ {movie.duration}</p>
                <p>🎭 {movie.genre}</p>
                <button
                  style={styles.bookButton}
                  onClick={() => navigate(`/movies/${movie.movieId}/shows`)}
                >
                  🎟️ Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div style={styles.pagination}>
          <button
            disabled={page === 0}
            onClick={() => setPage(page - 1)}
            style={styles.pageBtn}
          >
            ⬅ Prev
          </button>
          <span style={styles.pageText}>
            Page {page + 1} of {totalPages}
          </span>
          <button
            disabled={page + 1 === totalPages}
            onClick={() => setPage(page + 1)}
            style={styles.pageBtn}
          >
            Next ➡
          </button>
        </div>

        {showBookings && (
          <div style={styles.bookingOverlay}>
            <div style={styles.bookingCard}>
              <h3>🎟 My Bookings</h3>
              {bookings.length === 0 ? (
                <p>No bookings yet.</p>
              ) : (
                <ul>
                  {bookings.map((b) => (
                    <li key={b.id} style={styles.bookingItem}>
                      <p><strong>Movie:</strong> {b.movieName}</p>
                      <p><strong>Theatre:</strong> {b.theatreName}</p>
                      <p><strong>Seats:</strong> {b.seatNumbers}</p>
                      <p><strong>Show Time:</strong> {b.showTime}</p>
                    </li>
                  ))}
                </ul>
              )}
              <button style={styles.closeBtn} onClick={() => setShowBookings(false)}>
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  page: {
    backgroundImage:
      "url('https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=1500&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    color: "white",
    fontFamily: "Poppins, sans-serif",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    minHeight: "100vh",
    padding: "40px 60px",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "40px",
  },
  title: {
    fontWeight: "bold",
    color: "#ffcc00",
    fontSize: "32px",
  },
  userInfo: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    fontSize: "18px",
  },
  myBookingsBtn: {
    background: "#ffcc00",
    border: "none",
    color: "#222",
    borderRadius: "6px",
    padding: "6px 14px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  logoutBtn: {
    background: "transparent",
    border: "1px solid #ffcc00",
    color: "#ffcc00",
    borderRadius: "6px",
    padding: "6px 14px",
    cursor: "pointer",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "30px",
  },
  card: {
    borderRadius: "12px",
    overflow: "hidden",
    backgroundColor: "rgba(255,255,255,0.08)",
    backdropFilter: "blur(8px)",
    textAlign: "center",
    color: "white",
    boxShadow: "0 4px 25px rgba(0,0,0,0.4)",
    transition: "transform 0.3s",
  },
  image: {
    height: "380px",
    width: "100%",
    objectFit: "cover",
  },
  cardBody: {
    padding: "20px",
  },
  movieTitle: {
    color: "#ffcc00",
    fontWeight: "bold",
    fontSize: "20px",
  },
  bookButton: {
    marginTop: "12px",
    backgroundColor: "#ffcc00",
    border: "none",
    color: "#222",
    padding: "10px 20px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "15px",
  },
  pagination: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "15px",
    marginTop: "40px",
  },
  pageBtn: {
    backgroundColor: "#ffcc00",
    color: "#333",
    border: "none",
    padding: "8px 18px",
    borderRadius: "6px",
    fontWeight: "bold",
    cursor: "pointer",
  },
  bookingOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0,0,0,0.7)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  bookingCard: {
    background: "white",
    color: "#111",
    padding: "30px",
    borderRadius: "10px",
    width: "400px",
    maxHeight: "80vh",
    overflowY: "auto",
  },
  bookingItem: {
    marginBottom: "15px",
    borderBottom: "1px solid #ccc",
    paddingBottom: "10px",
  },
  closeBtn: {
    marginTop: "15px",
    background: "#ffcc00",
    border: "none",
    padding: "10px 20px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default MovieList;

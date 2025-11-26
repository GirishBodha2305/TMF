import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [userName, setUserName] = useState("");

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

  return (
    <div style={styles.page}>
      <div style={styles.overlay}>
        <div style={styles.header}>
          <h2 style={styles.title}>🎬 Movie List</h2>
          {userName && (
            <div style={styles.userInfo}>
              <span>🍿 {userName}</span>
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
  logoutBtn: {
    background: "transparent",
    border: "1px solid #ffcc00",
    color: "#ffcc00",
    borderRadius: "6px",
    padding: "6px 14px",
    cursor: "pointer",
    transition: "all 0.3s",
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
    transition: "all 0.3s ease",
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
  pageText: {
    color: "#fff",
    fontWeight: "500",
  },
};

export default MovieList;

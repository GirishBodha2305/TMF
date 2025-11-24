import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  const handleBrowseClick = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") {
      navigate("/movieslist"); // ✅ Go to MovieList if logged in
    } else {
      navigate("/login"); // 🚪 Redirect to Login
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.overlay}>
        <nav style={styles.navbar}>
          <h2 style={styles.logo}>🎬 CineBook</h2>
          <div style={styles.links}>
            <Link to="/register" style={styles.link}>Register</Link>
            <Link to="/login" style={styles.link}>Login</Link>
          </div>
        </nav>

        <div style={styles.heroContent}>
          <h1 style={styles.title}>Book Your Favorite Movie Tickets Anytime 🎟️</h1>
          <p style={styles.subtitle}>Fast • Easy • Secure</p>
          <button style={styles.button} onClick={handleBrowseClick}>
            Browse Movies
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    backgroundImage:
      "url('https://plus.unsplash.com/premium_photo-1709842822358-006f08261139?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW92aWUlMjB0aWNrZXRzfGVufDB8fDB8fHww')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    width: "100%",
    position: "relative",
    fontFamily: "Poppins, sans-serif",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    height: "100%",
    width: "100%",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 60px",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  logo: {
    fontSize: "28px",
    color: "#ffcc00",
    fontWeight: "bold",
  },
  links: {
    display: "flex",
    gap: "20px",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "18px",
    transition: "color 0.3s",
  },
  heroContent: {
    textAlign: "center",
    marginTop: "10%",
  },
  title: {
    fontSize: "48px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  subtitle: {
    fontSize: "22px",
    marginBottom: "30px",
    color: "#ffcc00",
  },
  button: {
    padding: "15px 30px",
    backgroundColor: "#ffcc00",
    border: "none",
    borderRadius: "8px",
    fontSize: "18px",
    cursor: "pointer",
    color: "#333",
    fontWeight: "bold",
    transition: "all 0.3s ease",
  },
};

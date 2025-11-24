import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [login, setLogin] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(login),
      });

      // ✅ Safely read body once (to avoid "body stream already read" error)
      const dataText = await response.text();
      let result;
      try {
        result = JSON.parse(dataText);
      } catch {
        result = dataText;
      }

      if (response.ok) {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("userName", result.name || login.email);
        // alert(`Welcome ${result.name || login.email}!`);
        navigate("/movieslist");
      } else {
        alert(result.message || result || "Login failed");
      }
    } catch (err) {
      console.error("Login error:", err);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <div style={styles.page}>
      {/* Placeholder styling */}
      <style>
        {`
          input::placeholder {
            color: #ffffff;
            opacity: 1;
            font-weight: 500;
          }
          input:focus::placeholder {
            color: #ffcc00;
            opacity: 1;
          }
        `}
      </style>

      <div style={styles.card}>
        <h2 style={styles.title}>Welcome Back 🎥</h2>
        <p style={styles.subtitle}>Login to book your favorite movie tickets</p>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="📧 Enter Your Email Address"
            required
            style={styles.input}
            onChange={(e) => setLogin({ ...login, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="🔒 Enter Your Password"
            required
            style={styles.input}
            onChange={(e) => setLogin({ ...login, password: e.target.value })}
          />

          <button type="submit" style={styles.button}>
            Login
          </button>
        </form>

        <p style={styles.footerText}>
          Don’t have an account?{" "}
          <Link to="/register" style={styles.link}>
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}

const styles = {
  page: {
    backgroundImage:
      "url('https://images.unsplash.com/photo-1505685296765-3a2736de412f?auto=format&fit=crop&w=1500&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Poppins, sans-serif",
  },
  card: {
    background: "rgba(0, 0, 0, 0.65)",
    backdropFilter: "blur(14px)",
    borderRadius: "16px",
    padding: "40px",
    width: "400px",
    color: "white",
    textAlign: "center",
    boxShadow: "0 8px 30px rgba(0, 0, 0, 0.6)",
  },
  title: {
    fontSize: "26px",
    marginBottom: "10px",
    fontWeight: "bold",
    color: "#ffcc00",
  },
  subtitle: {
    marginBottom: "25px",
    color: "#ddd",
  },
  input: {
    display: "block",
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "1px solid rgba(255,255,255,0.4)",
    outline: "none",
    background: "rgba(255,255,255,0.15)",
    color: "white",
    fontSize: "16px",
  },
  button: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#ffcc00",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
    fontWeight: "bold",
    color: "#333",
    marginTop: "10px",
    transition: "all 0.3s ease",
  },
  footerText: {
    marginTop: "20px",
    color: "#ccc",
  },
  link: {
    color: "#ffcc00",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const [data, setData] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:8080/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert("🎉 Registration Successful!");
      navigate("/login");
    } else {
      alert("❌ Registration Failed");
    }
  };

  // Add placeholder styling dynamically to all inputs
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      ::placeholder {
        color: #fff !important;
        opacity: 0.9 !important;
      }
      input:focus::placeholder {
        color: #ffcc00 !important;
      }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>Create Your Account 🎟️</h2>
        <p style={styles.subtitle}>
          Join CineBook and experience the magic of movies!
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="👤 Enter Your Full Name"
            required
            style={styles.input}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="📧 Enter Your Email Address"
            required
            style={styles.input}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="🔒 Create a Password"
            required
            style={styles.input}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />

          <button type="submit" style={styles.button}>
            Register
          </button>
        </form>

        <p style={styles.footerText}>
          Already have an account?{" "}
          <Link to="/login" style={styles.link}>
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}

const styles = {
  page: {
    backgroundImage:
      "url('https://images.unsplash.com/photo-1502136969935-8d8eef54d77c?auto=format&fit=crop&w=1500&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Poppins, sans-serif",
  },
  card: {
    background: "rgba(0, 0, 0, 0.7)",
    backdropFilter: "blur(14px)",
    borderRadius: "18px",
    padding: "40px",
    width: "400px",
    boxShadow: "0 8px 40px rgba(0, 0, 0, 0.6)",
    color: "white",
    textAlign: "center",
  },
  title: {
    fontSize: "28px",
    marginBottom: "10px",
    fontWeight: "bold",
    color: "#ffcc00",
  },
  subtitle: {
    marginBottom: "25px",
    color: "#eee",
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

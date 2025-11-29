import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function MovieShows() {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/api/movies/${movieId}/shows`)
      .then(res => res.json())
      .then(data => setShows(data));
  }, [movieId]);

  return (
    <div style={{ padding: "30px" }}>
      <h2>Available Shows</h2>

      {shows.map((s) => (
        <div key={s.showId} style={styles.card}>
          <h3>{s.theatre.theatreName} - {s.theatre.location}</h3>
          <p>⏱ {s.showTime}</p>

          {/* ⭐ SEND MOVIE + THEATRE + TIME TO SeatSelection */}
          <button
            style={styles.button}
            onClick={() =>
              navigate(`/shows/${s.showId}/seats`, {
                state: {
                  movieName: s.movie.movieTitle,
                  theatreName: s.theatre.theatreName,
                  showTime: s.showTime,
                }
              })
            }
          >
            Select Seats
          </button>
        </div>
      ))}
    </div>
  );
}

const styles = {
  card: {
    padding: "20px",
    margin: "15px 0",
    background: "#222",
    color: "white",
    borderRadius: "8px"
  },
  button: {
    padding: "10px 20px",
    background: "#ffcc00",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  }
};

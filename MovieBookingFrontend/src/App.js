import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; 
import Register from "./pages/Register";
import Login from "./pages/Login";
import MovieList from "./pages/MovieList";
import SeatSelection from "./pages/SeatSelection";
import MovieShows from "./pages/MovieShows";
import Payment from "./pages/Payment";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      {/* ✅ Navbar */}
      <div className="navbar">
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/movieslist" element={<MovieList />} />
        <Route path="/movies/:movieId/shows" element={<MovieShows />} />
        <Route path="/shows/:showId/seats" element={<SeatSelection />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

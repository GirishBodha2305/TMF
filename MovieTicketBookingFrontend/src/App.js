import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import MovieList from "./pages/MovieList";
import SeatSelection from "./pages/SeatSelection";
import MovieShows from "./pages/MovieShows";
import Payment from "./pages/Payment";

import ProtectedRoute from "./pages/ProtectedRoute";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="navbar"></div>

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* Protected Routes */}
        <Route
          path="/movieslist"
          element={
            <ProtectedRoute>
              <MovieList />
            </ProtectedRoute>
          }
        />

        <Route
          path="/movies/:movieId/shows"
          element={
            <ProtectedRoute>
              <MovieShows />
            </ProtectedRoute>
          }
        />

        <Route
          path="/shows/:showId/seats"
          element={
            <ProtectedRoute>
              <SeatSelection />
            </ProtectedRoute>
          }
        />

        <Route
          path="/payment"
          element={
            <ProtectedRoute>
              <Payment />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

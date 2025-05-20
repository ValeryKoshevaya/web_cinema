import React from "react";
import { useParams } from "react-router-dom";
import { movies } from "../data/movies";
import CinemaHall from "../components/CinemaHall";

const Booking = () => {
  const { id } = useParams();
  const movie = movies.find((m) => m.id.toString() === id);

  if (!movie) return <p>Фільм не знайдено</p>;

  return (
    <div className="app">
      <h2>{movie.title}</h2>
      <p><strong>Сеанс:</strong> {movie.time}</p>
      <CinemaHall />
    </div>
  );
};

export default Booking;

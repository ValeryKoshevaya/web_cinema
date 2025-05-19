import React from "react";
import "./MovieCard.css"; // для стилів картки

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.poster} alt={movie.title} />
      <div className="movie-details">
        <h2>{movie.title}</h2>
        <p><strong>Жанр:</strong> {movie.genre}</p>
        <p>{movie.description}</p>
        <p><strong>Сеанс:</strong> {movie.time}</p>
      </div>
    </div>
  );
};

export default MovieCard;

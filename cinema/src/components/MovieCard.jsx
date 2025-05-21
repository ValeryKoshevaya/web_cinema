// components/MovieCard.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Використовуємо Link замість useNavigate для кнопок

const MovieCard = ({ movie }) => {
    return (
        <div className="movie-card">
            <img src={movie.poster} alt={movie.title} />
            <div className="movie-card-content"> {/* Обгортка для контенту */}
                <h2>{movie.title}</h2>
                <p className="movie-card-description">{movie.description}</p>
                <p className="movie-card-info"><strong>Жанр:</strong> <span className="movie-card-genre">{movie.genre}</span></p>
                <p className="movie-card-info"><strong>Сеанс:</strong> <span className="movie-card-time">{new Date(movie.time).toLocaleString('uk-UA', { dateStyle: 'medium', timeStyle: 'short' })}</span></p>
                <Link to={`/booking/${movie.id}`}>
                    <button className="movie-card-button">Забронювати</button>
                </Link>
            </div>
        </div>
    );
};

export default MovieCard;
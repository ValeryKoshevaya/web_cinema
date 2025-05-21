// pages/MovieDetails.jsx
import React from 'react'; // Додано імпорт React
import { useParams } from "react-router-dom";
import { movies } from "../data/movies"; // Імпортуємо фільми

const MovieDetails = () => {
    const { id } = useParams();
    // Використовуємо find, щоб знайти фільм за id (яке тепер рядок)
    const movie = movies.find(movie => movie.id === id);

    if (!movie) {
        return <div className="loading-message">Фільм не знайдено.</div>;
    }

    return (
        <div className="movie-details-page section-container"> {/* Можете додати свій клас */}
            <h1 className="movie-details-title">{movie.title}</h1>
            <div className="movie-details-content">
                <img src={movie.poster} alt={movie.title} className="movie-details-poster" />
                <div className="movie-details-info">
                    <p className="movie-details-description">{movie.description}</p>
                    <p className="movie-details-meta"><strong>Жанр:</strong> {movie.genre}</p>
                    <p className="movie-details-meta"><strong>Тривалість:</strong> {movie.duration}</p> {/* Додано тривалість */}
                    <p className="movie-details-meta"><strong>Сеанс:</strong> {new Date(movie.time).toLocaleString('uk-UA', { dateStyle: 'full', timeStyle: 'short' })}</p>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;
// components/MovieList.jsx
import React, { useState } from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
    const [search, setSearch] = useState('');
    const [genreFilter, setGenreFilter] = useState('Усі');

    const genres = ["Усі", ...new Set(movies.map(movie => movie.genre))];

    const filteredMovies = movies.filter(movie => {
        const matchesTitle = movie.title.toLowerCase().includes(search.toLowerCase());
        const matchesGenre = genreFilter === 'Усі' || movie.genre === genreFilter;
        return matchesTitle && matchesGenre;
    });

    return (
        <div>
            <div className="movie-list-controls">
                <input
                    type="text"
                    placeholder="Пошук фільму за назвою..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="input-text movie-list-search"
                />
                <select
                    value={genreFilter}
                    onChange={(e) => setGenreFilter(e.target.value)}
                    className="input-text movie-list-search" // Reusing input style for select
                >
                    {genres.map((genre, index) => (
                        <option key={index} value={genre}>{genre}</option>
                    ))}
                </select>
            </div>

            <h3 className="movie-list-recommendations-title">Рекомендації</h3>
            {filteredMovies.length === 0 ? (
                <p className="no-movies-message">Фільми за вашим запитом не знайдено.</p>
            ) : (
                <div className="movie-list-grid">
                    {filteredMovies.map(movie => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default MovieList;
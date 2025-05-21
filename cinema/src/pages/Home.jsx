// pages/Home.jsx
import React from 'react';
import MovieList from '../components/MovieList';
import { movies } from '../data/movies'; // Імпортуємо фільми

const Home = () => (
    <div className="home-page">
        <h1 className="home-title">🎥 Зараз у кінотеатрах</h1>
        <MovieList movies={movies} />
    </div>
);

export default Home;
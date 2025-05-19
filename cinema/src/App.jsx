import React, { useState } from "react";
import { movies as moviesData } from "./data/movies";
import MovieList from "./components/MovieList";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMovies = moviesData.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <h1>Афіша фільмів</h1>
      <input
        type="text"
        placeholder="Пошук за назвою..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;

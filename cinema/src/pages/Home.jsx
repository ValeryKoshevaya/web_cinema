import { useState } from 'react';
import { movies } from '../data/movies';
import MovieList from '../components/MovieList';

const Home = () => {
  const [search, setSearch] = useState("");
  const filtered = movies.filter(m =>
    m.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Пошук фільму..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <MovieList movies={filtered} />
    </div>
  );
};

export default Home;
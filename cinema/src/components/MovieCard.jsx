import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => (
  <div className="card">
    <img src={movie.poster} alt={movie.title} />
    <h2>{movie.title}</h2>
    <p>{movie.description}</p>
    <p><strong>Жанр:</strong> {movie.genre}</p>
    <p><strong>Сеанс:</strong> {movie.time}</p>
    <Link to={`/booking/${movie.id}`} className="btn">Забронювати</Link>
  </div>
);

export default MovieCard;

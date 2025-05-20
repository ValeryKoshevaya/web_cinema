import { useState, useEffect } from 'react';
import BookingService from '../services/BookingService';

const ROWS = 5, COLS = 8;

const CinemaHall = ({ movieId }) => {
  const [selected, setSelected] = useState([]);
  const [booked, setBooked] = useState([]);

  useEffect(() => {
    const data = BookingService.getBookedSeats(movieId);
    setBooked(data);
  }, [movieId]);

  const toggleSeat = (seat) => {
    if (booked.includes(seat)) return;
    setSelected(prev =>
      prev.includes(seat) ? prev.filter(s => s !== seat) : [...prev, seat]
    );
  };

  return (
    <div>
      <div className="hall">
        {[...Array(ROWS * COLS)].map((_, i) => {
          const seat = i;
          const isBooked = booked.includes(seat);
          const isSelected = selected.includes(seat);
          return (
            <div
              key={i}
              className={`seat ${isBooked ? 'booked' : isSelected ? 'selected' : ''}`}
              onClick={() => toggleSeat(seat)}
            />
          );
        })}
      </div>
      <Form movieId={movieId} selected={selected} />
    </div>
  );
};

const Form = ({ movieId, selected }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!name || !email || !phone) return setError("Заповніть всі поля");
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return setError("Невірний email");
    BookingService.bookSeats(movieId, selected);
    alert("Бронювання успішне!");
  };

  return (
    <div className="form">
      {error && <p className="error">{error}</p>}
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Ім’я" />
      <input value={phone} onChange={e => setPhone(e.target.value)} placeholder="Телефон" />
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <button onClick={handleSubmit}>Підтвердити бронювання</button>
    </div>
  );
};

export default CinemaHall;
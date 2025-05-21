// pages/Booking.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BookingService from '../services/BookingService';
import CinemaHall from '../components/CinemaHall';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Toastify CSS
import { movies } from '../data/movies'; // Імпортуємо фільми для деталей

function Booking() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState({ name: '', phone: '', email: '' });
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const foundMovie = movies.find(m => m.id === id);
        if (foundMovie) {
            setMovie(foundMovie);
        } else {
            toast.error('Фільм не знайдено.');
            navigate('/');
        }
    }, [id, navigate]);

    const handleChange = (e) => {
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    };

    const validate = () => {
        const { name, phone, email } = userInfo;
        if (!name || !phone || !email) {
            toast.error('Будь ласка, заповніть всі обов\'язкові поля.');
            return false;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            toast.error('Будь ласка, введіть коректний email.');
            return false;
        }
        if (selectedSeats.length === 0) {
            toast.error('Будь ласка, оберіть хоча б одне місце.');
            return false;
        }
        return true;
    };

    const handleBooking = () => {
        if (!validate()) {
            return;
        }

        // Перевіряємо, чи є вже заброньовані місця, щоб уникнути подвійного бронювання
        const alreadyBooked = BookingService.getBookings(id);
        const conflicts = selectedSeats.filter(seat => alreadyBooked.includes(seat));
        if (conflicts.length > 0) {
            toast.error(`Місця ${conflicts.join(', ')} вже зайняті. Будь ласка, оберіть інші.`);
            return;
        }

        BookingService.saveBooking(id, selectedSeats, userInfo);
        toast.success('Бронювання успішне! Вас буде перенаправлено на головну сторінку.');

        setSelectedSeats([]);
        setUserInfo({ name: '', phone: '', email: '' });

        setTimeout(() => {
            navigate('/');
        }, 2000);
    };

    if (!movie) {
        return <div className="loading-message">Завантаження інформації про фільм...</div>;
    }

    return (
        <div className="booking-page">
            <h1 className="booking-movie-title">Бронювання квитків на "<span>{movie.title}</span>"</h1>
            <p className="booking-movie-time">Сеанс: <strong>{new Date(movie.time).toLocaleString('uk-UA', { dateStyle: 'full', timeStyle: 'short' })}</strong></p>

            <CinemaHall
                movieId={id}
                selectedSeats={selectedSeats}
                setSelectedSeats={setSelectedSeats}
            />

            <div className="user-info-form">
                <h2>Ваші дані</h2>
                <input
                    type="text"
                    name="name"
                    placeholder="Ваше ім'я"
                    value={userInfo.name}
                    onChange={handleChange}
                    className="input-text"
                    required
                />
                <input
                    type="tel" // Changed to type="tel" for phone
                    name="phone"
                    placeholder="Телефон"
                    value={userInfo.phone}
                    onChange={handleChange}
                    className="input-text"
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={userInfo.email}
                    onChange={handleChange}
                    className="input-text"
                    required
                />
                <button
                    onClick={handleBooking}
                    className="btn btn-success booking-submit-button"
                >
                    Підтвердити бронювання
                </button>
            </div>
            <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored" />
        </div>
    );
}

export default Booking;
// components/CinemaHall.jsx
import React, { useEffect, useState } from 'react';
import BookingService from '../services/BookingService'; // Перевірте шлях, якщо він змінився

const CinemaHall = ({ movieId, selectedSeats, setSelectedSeats }) => {
    const rows = 5;
    const cols = 8;
    const totalSeats = rows * cols;

    const [bookedSeats, setBookedSeats] = useState([]); // Отримуємо тільки заброньовані місця

    useEffect(() => {
        // Оновлюємо заброньовані місця при зміні movieId
        const currentBookedSeats = BookingService.getBookings(movieId);
        setBookedSeats(currentBookedSeats);
    }, [movieId]);

    const toggleSeat = (seatNumber) => {
        // Перевіряємо, чи місце вже заброньоване
        if (bookedSeats.includes(seatNumber)) {
            return;
        }

        // Перемикаємо вибір місця
        setSelectedSeats(prev =>
            prev.includes(seatNumber)
                ? prev.filter(s => s !== seatNumber)
                : [...prev, seatNumber]
        );
    };

    return (
        <div className="cinema-hall">
            <h3 className="cinema-hall-title">Виберіть місця</h3>
            <div className="cinema-hall-screen-display">Екран</div>
            <div className="seats-grid">
                {[...Array(totalSeats)].map((_, i) => {
                    const seatNumber = i + 1; // Місця від 1 до 40
                    const isBooked = bookedSeats.includes(seatNumber);
                    const isSelected = selectedSeats.includes(seatNumber);

                    let seatClass = 'seat';
                    if (isBooked) {
                        seatClass += ' booked';
                    } else if (isSelected) {
                        seatClass += ' selected';
                    } else {
                        seatClass += ' available';
                    }

                    return (
                        <div
                            key={seatNumber}
                            className={seatClass}
                            onClick={() => toggleSeat(seatNumber)}
                        >
                            {seatNumber}
                        </div>
                    );
                })}
            </div>
            <div className="selected-seats-info">
                Обрані місця: <strong>{selectedSeats.length > 0 ? selectedSeats.sort((a, b) => a - b).join(', ') : 'Не вибрано'}</strong>
            </div>

            <div className="seat-legend-container">
                <div className="legend-item">
                    <div className="legend-color-box available"></div>
                    Вільні
                </div>
                <div className="legend-item">
                    <div className="legend-color-box selected"></div>
                    Вибрані
                </div>
                <div className="legend-item">
                    <div className="legend-color-box booked"></div>
                    Зайняті
                </div>
            </div>
        </div>
    );
};

export default CinemaHall;
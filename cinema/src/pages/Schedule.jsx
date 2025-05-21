// pages/Schedule.jsx
import React from 'react';
import { movies, scheduleData } from '../data/movies'; // Імпортуємо статичні дані

// Допоміжна функція для отримання назви фільму за ID
const getMovieTitleById = (movieId) => {
    const movie = movies.find(m => m.id === movieId);
    return movie ? movie.title : `Фільм ID: ${movieId}`;
};

const Schedule = () => {
    return (
        <div className="schedule-container">
            <h1 className="schedule-title">🎥 Розклад сеансів</h1>
            {Object.keys(scheduleData).length > 0 ? (
                Object.entries(scheduleData).map(([day, sessions]) => (
                    <div key={day} className="schedule-day">
                        <h2 className="day-title">📅 {day}</h2>
                        <ul className="session-list">
                            {sessions.map((session, index) => (
                                <li key={index} className="session-item">
                                    <span className="movie-title-span">🎬 {getMovieTitleById(session.movieId)}</span> —
                                    🕒 {session.time}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))
            ) : (
                <p className="no-movies-message">Розклад відсутній.</p>
            )}
        </div>
    );
};

export default Schedule;
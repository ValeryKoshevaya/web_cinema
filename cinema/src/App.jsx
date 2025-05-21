// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Booking from './pages/Booking';
import Navbar from './components/Navbar'; // Додано Navbar
import Theaters from './pages/Theaters'; // Додано Theaters
import Schedule from './pages/Schedule'; // Додано Schedule
import MovieDetails from './pages/MovieDetails'; // Додано MovieDetails (хоча поки не використовується в роутах)

function App() {
    return (
        <>
            <Navbar /> {/* Navbar завжди відображається */}
            <div className="container"> {/* Додано контейнер для основного контенту */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/booking/:id" element={<Booking />} />
                    <Route path="/theaters" element={<Theaters />} /> {/* Маршрут для кінотеатрів */}
                    <Route path="/schedule" element={<Schedule />} /> {/* Маршрут для розкладу */}
                    {/* <Route path="/movie/:id" element={<MovieDetails />} /> // Якщо буде окрема сторінка деталей */}
                </Routes>
            </div>
        </>
    );
}

export default App;
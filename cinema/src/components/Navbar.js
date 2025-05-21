// components/Navbar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // Використовуємо useLocation для активного посилання

const Navbar = () => {
    const location = useLocation(); // Для визначення активного маршруту

    // Логіка входу/виходу прибрана, оскільки це було вказано в запиті
    // const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("currentUser"));
    // const handleLogout = () => { ... };

    return (
        <header className="header-centered">
            <nav className="nav-links">
                <Link to="/" className={location.pathname === "/" ? "active" : ""}>Головна</Link>
                <Link to="/theaters" className={location.pathname === "/theaters" ? "active" : ""}>Кінотеатри</Link>
                <Link to="/schedule" className={location.pathname === "/schedule" ? "active" : ""}>Розклад</Link>
                <Link to="/tickets" className={location.pathname === "/tickets" ? "active" : ""}>Мої квитки</Link>
            </nav>
            {/* Кнопки входу/виходу прибрані */}
            {/* {isLoggedIn ? (
                <button className="login-button" onClick={handleLogout}>
                    Вийти
                </button>
            ) : (
                <Link to="/login">
                    <button className="login-button">Увійти</button>
                </Link>
            )} */}
        </header>
    );
};

export default Navbar;
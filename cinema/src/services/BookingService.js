// services/BookingService.js
const BookingService = {
    // Отримує заброньовані місця для конкретного фільму
    getBookings(movieId) {
        const data = JSON.parse(localStorage.getItem('bookings')) || {};
        return data[movieId] || [];
    },

    // Зберігає нові бронювання для фільму
    saveBooking(movieId, seats, userInfo) {
        const data = JSON.parse(localStorage.getItem('bookings')) || {};
        // Додаємо нові місця до вже заброньованих для цього фільму
        data[movieId] = [...(data[movieId] || []), ...seats];
        localStorage.setItem('bookings', JSON.stringify(data));

        // Зберігаємо повні деталі бронювання (місця, інформацію про користувача)
        const details = JSON.parse(localStorage.getItem('bookingDetails')) || [];
        details.push({ movieId, seats, userInfo, timestamp: new Date().toISOString() }); // Додаємо мітку часу
        localStorage.setItem('bookingDetails', JSON.stringify(details));
    },

    // Отримує всі деталі бронювань (для сторінки "Мої квитки")
    getAllBookingDetails() {
        return JSON.parse(localStorage.getItem('bookingDetails')) || [];
    }
};

export default BookingService;
const BookingService = {
  bookSeats(movieId, seats) {
    const existing = JSON.parse(localStorage.getItem(movieId)) || [];
    const updated = [...new Set([...existing, ...seats])];
    localStorage.setItem(movieId, JSON.stringify(updated));
  },
  getBookedSeats(movieId) {
    return JSON.parse(localStorage.getItem(movieId)) || [];
  }
};

export default BookingService;
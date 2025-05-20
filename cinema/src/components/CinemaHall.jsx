import React, { useState } from "react";

const CinemaHall = () => {
  const rows = 5;
  const cols = 8;

  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeat = (seat) => {
    setSelectedSeats((prev) =>
      prev.includes(seat)
        ? prev.filter((s) => s !== seat)
        : [...prev, seat]
    );
  };

  return (
    <div>
      <div className="hall-grid">
        {Array.from({ length: rows * cols }, (_, i) => {
          const seat = `М${i + 1}`;
          const isSelected = selectedSeats.includes(seat);

          return (
            <div
              key={seat}
              className={`seat ${isSelected ? "selected" : ""}`}
              onClick={() => toggleSeat(seat)}
            >
              {seat}
            </div>
          );
        })}
      </div>
      <div className="selected-info">
        <strong>Вибрані місця:</strong> {selectedSeats.join(", ") || "немає"}
      </div>
    </div>
  );
};

export default CinemaHall;

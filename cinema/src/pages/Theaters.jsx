// pages/Theaters.jsx
import React from 'react'; // Додано імпорт React

const Theaters = () => {
    const theaters = [
        { id: 1, name: "Multiplex Ocean Plaza", location: "Київ", mapUrl: "https://www.google.com/maps/search/Multiplex+Ocean+Plaza" },
        { id: 2, name: "Multiplex Lavina Mall", location: "Київ", mapUrl: "https://www.google.com/maps/search/Multiplex+Lavina+Mall" },
        { id: 3, name: "Multiplex Gulliver", location: "Київ", mapUrl: "https://www.google.com/maps/search/Multiplex+Gulliver" },
        { id: 4, name: "Multiplex Respublika Park", location: "Київ", mapUrl: "https://www.google.com/maps/search/Multiplex+Respublika+Park" },
        { id: 5, name: "Multiplex Victoria Gardens", location: "Львів", mapUrl: "https://www.google.com/maps/search/Multiplex+Victoria+Gardens" },
        { id: 6, name: "Multiplex Forum Lviv", location: "Львів", mapUrl: "https://www.google.com/maps/search/Multiplex+Forum+Lviv" },
        { id: 7, name: "Multiplex Fabrika", location: "Херсон", mapUrl: "https://www.google.com/maps/search/Multiplex+Fabrika" },
        { id: 8, name: "Multiplex City Center", location: "Одеса", mapUrl: "https://www.google.com/maps/search/Multiplex+City+Center" },
        { id: 9, name: "Multiplex Dafi", location: "Дніпро", mapUrl: "https://www.google.com/maps/search/Multiplex+Dafi" },
        { id: 10, name: "Multiplex Karavan", location: "Харків", mapUrl: "https://www.google.com/maps/search/Multiplex+Karavan" }
    ];

    return (
        <div className="section-container">
            <h1 className="section-title">📍 Наші кінотеатри</h1>
            <ul className="pretty-list">
                {theaters.map((theater) => (
                    <li key={theater.id}>
                        🎬 <span className="theater-name">{theater.name}</span>
                        <span className="theater-location"> — {theater.location}</span>
                        <a href={theater.mapUrl} target="_blank" rel="noopener noreferrer">
                            [Google Maps]
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Theaters;
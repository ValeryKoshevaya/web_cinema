// data/movies.js
const movies = [
    {
        id: '1',
        title: 'Inception',
        description: 'A mind-bending thriller by Christopher Nolan about dreams within dreams.',
        genre: 'Sci-Fi',
        time: '2025-05-25 20:00',
        poster: 'https://via.placeholder.com/200x300/6366F1/FFFFFF?text=Inception',
        duration: '2h 28m'
    },
    {
        id: '2',
        title: 'The Matrix',
        description: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
        genre: 'Action',
        time: '2025-05-26 21:00',
        poster: 'https://via.placeholder.com/200x300/EC4899/FFFFFF?text=Matrix',
        duration: '2h 16m'
    },
    {
        id: '3',
        title: 'Interstellar',
        description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
        genre: 'Sci-Fi',
        time: '2025-05-27 18:30',
        poster: 'https://via.placeholder.com/200x300/3B82F6/FFFFFF?text=Interstellar',
        duration: '2h 49m'
    },
    {
        id: '4',
        title: 'Dune: Part Two',
        description: 'Paul Atreides unites with Chani and the Fremen while on a warpath of revenge against the conspirators who destroyed his family.',
        genre: 'Sci-Fi',
        time: '2025-05-28 19:45',
        poster: 'https://via.placeholder.com/200x300/10B981/FFFFFF?text=Dune',
        duration: '2h 46m'
    },
    {
        id: '5',
        title: 'Oppenheimer',
        description: 'The story of J. Robert Oppenheimer\'s role in the development of the atomic bomb during World War II.',
        genre: 'Biography',
        time: '2025-05-29 20:15',
        poster: 'https://via.placeholder.com/200x300/EF4444/FFFFFF?text=Oppenheimer',
        duration: '3h 0m'
    }
];

// Статичний розклад
const scheduleData = {
    "Понеділок": [
        { movieId: '1', time: '10:00' },
        { movieId: '2', time: '14:00' },
        { movieId: '3', time: '18:00' }
    ],
    "Вівторок": [
        { movieId: '4', time: '11:30' },
        { movieId: '5', time: '15:30' },
        { movieId: '1', time: '20:30' }
    ],
    "Середа": [
        { movieId: '2', time: '10:00' },
        { movieId: '3', time: '13:00' },
        { movieId: '4', time: '17:00' },
        { movieId: '5', time: '21:00' }
    ],
    "Четвер": [
        { movieId: '1', time: '12:00' },
        { movieId: '2', time: '16:00' },
        { movieId: '3', time: '20:00' }
    ],
    "П'ятниця": [
        { movieId: '4', time: '10:00' },
        { movieId: '5', time: '14:00' },
        { movieId: '1', time: '18:00' },
        { movieId: '2', time: '22:00' }
    ],
    "Субота": [
        { movieId: '3', time: '09:00' },
        { movieId: '4', time: '13:00' },
        { movieId: '5', time: '17:00' },
        { movieId: '1', time: '21:00' }
    ],
    "Неділя": [
        { movieId: '2', time: '10:30' },
        { movieId: '3', time: '14:30' },
        { movieId: '4', time: '18:30' }
    ]
};

export { movies, scheduleData };
import { useParams } from 'react-router-dom';
import CinemaHall from '../components/CinemaHall';

const Booking = () => {
  const { id } = useParams();
  return <CinemaHall movieId={id} />;
};

export default Booking;
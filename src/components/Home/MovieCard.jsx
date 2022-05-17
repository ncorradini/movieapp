import { Card, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  return (
    <Card sx={{
      width: '200px',
      mx: '10px',
      my: '40px',
    }}>
      <Box
        onClick={() => navigate(`/detalle/${movie.id}`)}
        sx={{
          width: '100%',
          height: '300px',
          backgroundImage: `url(${process.env.REACT_APP_URL_IMAGE}/${movie?.poster_path})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
      </Box>
    </Card>
  );
};

export default MovieCard;

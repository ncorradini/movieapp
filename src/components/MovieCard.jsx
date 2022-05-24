import { Card, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';

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
          background: 'rgba(0, 0, 0, 0.7)',
          backgroundImage: `url(${process.env.REACT_APP_URL_IMAGE}/${movie?.poster_path})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          transition: '0.5s',
          '&:hover': { backgroundBlendMode: 'darken', transform: 'scale(1.25)' },
        }}>
        <Box sx={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          transition: '0.5s',
          opacity: '0',
          '&:hover': { opacity: '0.6' },
        }}>
          <SlowMotionVideoIcon sx={{
            color: '#fff',
            fontSize: '80px',
          }} />
        </Box>
      </Box>
    </Card>
  );
};

export default MovieCard;

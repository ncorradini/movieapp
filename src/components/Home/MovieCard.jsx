import { Card, Box } from '@mui/material';

const MovieCard = ({ movie }) => {
  return (
    <Card sx={{ width: '200px', mx: '10px', my: '40px' }}>
      <Box sx={{
        width: '100%',
        height: '300px',
        backgroundImage: `url(${process.env.REACT_APP_URL_IMAGE}/${movie?.poster_path})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}></Box>
    </Card>
  );
};

export default MovieCard;

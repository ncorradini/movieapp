import { Box, Container, Typography } from '@mui/material';
import MovieCard from '../MovieCard';

const PopularMovies = ({ movies }) => {
  return (
    <Container maxWidth="lg" sx={{ mt: '80px' }}>
      <Typography variant="h5" sx={{
        color: '#fff',
      }}>
        Películas más populares
      </Typography>
      <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}>
        {movies.map(movie =>
          <MovieCard
            key={movie.id}
            movie={movie} />,
        )}
      </Box>
    </Container>
  );
};

export default PopularMovies;

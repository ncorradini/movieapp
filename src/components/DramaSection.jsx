import { Box, Container, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDramaMovies } from '../store/slices/dramaMovies';
import MovieCard from './MovieCard';

const DramaSection = () => {
  const { list } = useSelector(state => state.dramaMovies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDramaMovies());
  }, [dispatch]);

  return (
    <Container maxWidth="lg" sx={{
      mt: '60px',
      minHeight: '500px',
    }}>
      <Typography variant="h5" sx={{
        color: '#fff',
      }}>
        Películas de Dramas
      </Typography>
      <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}>
        {list.map(movie => <MovieCard key={movie.id} movie={movie} />) }
      </Box>
    </Container>
  );
};

export default DramaSection;

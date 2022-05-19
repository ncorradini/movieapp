import { Box, Container, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHorrorMovies } from '../store/slices/horrorMovies';
import CardListSkeleton from './CardListSkeleton';
import MovieCard from './MovieCard';

const HorrorSection = () => {
  const { list, loading } = useSelector(state => state.horrorMovies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHorrorMovies());
  }, [dispatch]);

  return (
    <Container maxWidth="lg" sx={{
      mt: '60px',
      minHeight: '500px',
    }}>
      <Typography variant="h5" sx={{
        color: '#fff',
      }}>
        Películas de Terror
      </Typography>
      <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}>
        {loading
          ? <CardListSkeleton />
          : list.map(movie =>
            <MovieCard
              key={movie.id}
              movie={movie} />,
          )
        }
      </Box>
    </Container>
  );
};

export default HorrorSection;

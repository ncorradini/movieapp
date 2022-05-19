import { Box, Container, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchActionMovies } from '../store/slices/actionMovies';
import CardListSkeleton from './CardListSkeleton';
import MovieCard from './MovieCard';

const ActionSection = () => {
  const { list, loading } = useSelector(state => state.actionMovies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchActionMovies());
  }, [dispatch]);

  return (
    <Container maxWidth="lg" sx={{
      mt: '60px',
      minHeight: '500px',
    }}>
      <Typography variant="h5" sx={{
        color: '#fff',
      }}>
        Películas de Acción
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

export default ActionSection;

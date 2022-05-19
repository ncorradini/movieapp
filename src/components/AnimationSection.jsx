import { Box, Container, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAnimationMovies } from '../store/slices/animationMovies';
import CardListSkeleton from './CardListSkeleton';
import MovieCard from './MovieCard';

const AnimationSection = () => {
  const { list, loading } = useSelector(state => state.animationMovies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAnimationMovies());
  }, [dispatch]);

  return (
    <Container maxWidth="lg" sx={{
      mt: '60px',
      minHeight: '500px',
    }}>
      <Typography variant="h5" sx={{
        color: '#fff',
      }}>
        Películas Animadas
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

export default AnimationSection;

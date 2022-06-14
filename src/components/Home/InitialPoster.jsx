import styled from '@emotion/styled';
import { Button, Container, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

const InitialPoster = ({ movie }) => {
  const { list } = useSelector(state => state.genre);

  const genres = list.map(item => {
    if (movie?.genre_ids.includes(item.id)) {
      return item;
    } else {
      return null;
    }
  });

  const PosterBox = styled('section')({
    display: 'flex',
    alignItems: 'end',
    position: 'relative',
    width: '100%',
    height: '450px',
    overflow: 'hidden',
    background: 'rgba(0,0,0,0.6)',
    backgroundImage: `url(${process.env.REACT_APP_URL_IMAGE}/${movie?.backdrop_path})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundBlendMode: 'multiply',
    color: '#fff',
  });

  return (
    <PosterBox>
      <Container maxWidth="lg" sx={{ mb: '40px' }}>
        <Typography
          sx={{
            fontSize: { sm: '40px', xs: '30px' },
            fontWeight: 'bold',
          }}
        >
          {movie?.title}
        </Typography>
        <Typography fontSize="small" sx={{ my: '10px' }}>
          {genres.map(item => {
            if (item) {
              return item.name + ' · ';
            } else {
              return null;
            }
          })}
        </Typography>
        <Typography sx={{
          maxWidth: '500px',
          height: '70px',
          overflow: 'hidden',
          mb: '20px',
        }}>
          {movie?.overview}
        </Typography>
        <Button
          variant="contained"
          sx={{ width: '100px', mr: '10px' }}>
          Ver
        </Button>
        <Button
          variant="outlined"
          sx={{ width: '120px' }}>
          Más info
        </Button>
      </Container>
    </PosterBox>
  );
};

export default InitialPoster;

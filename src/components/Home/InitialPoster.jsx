import styled from '@emotion/styled';
import { Box, Button, Typography } from '@mui/material';

const InitialPoster = ({ movie }) => {
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
      <Box sx={{
        ml: '50px',
        mb: '40px',
      }}>
        <Typography
          variant="h3"
          fontWeight="bold"
        >
          {movie?.title}
        </Typography>
        <Typography sx={{ my: '10px' }}>
          Generos
        </Typography>
        <Typography sx={{
          width: '500px',
          height: '70px',
          overflow: 'hidden',
          mb: '20px',
        }}>
          {movie?.overview}
        </Typography>
        <Button
          variant="contained"
          sx={{ width: '100px', mr: '10px' }}
        >Ver</Button>
        <Button
          variant="outlined"
          sx={{ width: '120px' }}
        >Más info</Button>
      </Box>
    </PosterBox>
  );
};

export default InitialPoster;

import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" style={{ textDecoration: 'none' }}>
      <Typography
        variant="h6"
        sx={{
          mr: 2,
          display: 'flex',
          flexGrow: { xs: 1, md: 0 },
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: '#fff',
          textDecoration: 'none',
        }}
      >
        MOVIE
        <Typography
          color="primary"
          variant="span">
          APP
        </Typography>
      </Typography>
    </Link>
  );
};

export default Logo;

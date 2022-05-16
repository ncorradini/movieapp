import { Typography } from '@mui/material';

const Logo = () => {
  return (
    <Typography
      variant="h6"
      component="a"
      href="/"
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
  );
};

export default Logo;

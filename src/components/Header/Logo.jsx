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
        color: '#333333',
        textDecoration: 'none',
      }}
    >
      MOVIE APP
    </Typography>
  );
};

export default Logo;

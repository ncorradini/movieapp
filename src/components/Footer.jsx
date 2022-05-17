import { Box, Container, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'flex-end',
        pb: '40px',
        minHeight: '150px',
        color: '#999999',
        textAlign: 'center',
        boxShadow: '0px 5px 10px 0px rgba(0,0,0,0.2)',
      }}>
      <Container maxWidth="md">
        <Typography fontSize="11px">
          Sitio web diseñado por Nicolás Corradini © 2022
          <br />
          <Typography
            fontSize="small"
            component="a"
            href="https://ncorradini.com.ar"
            target="_blank"
            sx={{ color: '#999999' }}>
            www.ncorradini.com.ar
          </Typography>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;

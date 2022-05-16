import { Box, Button } from '@mui/material';
import { pages } from './Pages';

const DesktopMenu = () => {
  return (
    <Box sx={{
      flexGrow: 1,
      display: { xs: 'none', md: 'flex' },
      justifyContent: 'center',
    }}>
      {pages.map((page) => (
        <Button
          key={page}
          sx={{ my: 2, px: 3, color: '#fff', display: 'block' }}
        >
          {page}
        </Button>
      ))}
    </Box>
  );
};

export default DesktopMenu;

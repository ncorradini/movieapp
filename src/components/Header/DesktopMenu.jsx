import { useNavigate } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import { convertLinks, pages } from './Pages';

const DesktopMenu = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{
      flexGrow: 1,
      display: { xs: 'none', md: 'flex' },
      justifyContent: 'center',
    }}>
      {pages.map((page) => (
        <Button
          key={page}
          sx={{
            my: 2,
            px: 3,
            color: '#fff',
            display: 'block',
          }}
          onClick={() => navigate(`/${convertLinks(page)}`)}
        >
          {page}
        </Button>
      ))}
    </Box>
  );
};

export default DesktopMenu;

import { AppBar, Toolbar, Container } from '@mui/material';
import MobileMenu from './MobileMenu';
import Logo from './Logo';
import DesktopMenu from './DesktopMenu';
import Searcher from './Searcher';

const Header = () => {
  return (
    <AppBar
      elevation={0}
      position="static"
      sx={{ background: '#080808' }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Logo />
          <MobileMenu />
          <DesktopMenu />
          <Searcher />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;

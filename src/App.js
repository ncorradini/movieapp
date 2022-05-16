import { ThemeProvider } from '@emotion/react';
import { theme } from './config/costumTheme';
import Header from './components/Header';
import Routing from './routes/routes';
import Footer from './components/Footer';
import { popularMoviesRequest } from './services/movieServices';
import { CssBaseline } from '@mui/material';

const App = () => {
  popularMoviesRequest();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Routing />
      <Footer />
    </ThemeProvider>
  );
};

export default App;

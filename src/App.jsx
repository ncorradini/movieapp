import { ThemeProvider } from '@emotion/react';
import { theme } from './config/costumTheme';
import { CssBaseline } from '@mui/material';
import Header from './components/Header';
import Routing from './routes/routes';
import Footer from './components/Footer';

const App = () => {
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

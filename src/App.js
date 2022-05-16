import Footer from './components/Footer';
import Header from './components/Header';
import Routing from './routes/routes';
import { popularMoviesRequest } from './services/movieServices';

const App = () => {
  popularMoviesRequest();

  return (
    <>
      <Header />
      <Routing />
      <Footer />
    </>
  );
};

export default App;

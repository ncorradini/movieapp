import { useRoutes, Navigate } from 'react-router-dom';
import ActionSection from '../components/ActionSection';
import AnimationSection from '../components/AnimationSection';
import DramaSection from '../components/DramaSection';
import Home from '../components/Home';
import HorrorSection from '../components/HorrorSection';
import MovieDetail from '../components/MovieDetail';

const Routing = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Home />,
      children: [
        { path: '/detalle/:id', element: <MovieDetail /> },
        { path: '/action', element: <ActionSection /> },
        { path: '/horror', element: <HorrorSection /> },
        { path: '/drama', element: <DramaSection /> },
        { path: '/animation', element: <AnimationSection /> },
      ],
    },
    { path: '*', element: <Navigate to="/" /> },
  ]);

  return routes;
};

export default Routing;

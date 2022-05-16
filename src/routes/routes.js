import { useRoutes, Navigate } from 'react-router-dom';
import Home from '../components/Home';

const Routing = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    { path: '*', element: <Navigate to="/" /> },
  ]);

  return routes;
};

export default Routing;

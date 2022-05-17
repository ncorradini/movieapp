import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { fetchGenre } from '../../store/slices/genre';
import { fetchPopularMovies } from '../../store/slices/popularMovies';
import MovieDetail from '../MovieDetail';
import InitialPoster from './InitialPoster';
import PopularMovies from './PopularMovies';

const Home = () => {
  const { list } = useSelector(state => state.popularMovies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPopularMovies());
    dispatch(fetchGenre());
  }, [dispatch]);

  return (
    <>
      {location.pathname === '/' &&
      <>
        <InitialPoster movie={list[0]} />
        <PopularMovies movies={list} />
      </>}

      <Routes>
        <Route path="/detalle/:id" element={<MovieDetail />} />
      </Routes>
    </>
  );
};

export default Home;

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { fetchGenre } from '../../store/slices/genre';
import { fetchPopularMovies } from '../../store/slices/popularMovies';
import ActionSection from '../ActionSection';
import AnimationSection from '../AnimationSection';
import DramaSection from '../DramaSection';
import HorrorSection from '../HorrorSection';
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
        <Route path="/action" element={<ActionSection />} />
        <Route path="/horror" element={<HorrorSection />} />
        <Route path="/drama" element={<DramaSection />} />
        <Route path="/animation" element={<AnimationSection />} />
      </Routes>
    </>
  );
};

export default Home;

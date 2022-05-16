import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopularMovies } from '../../store/slices/popularMovies';
import InitialPoster from './InitialPoster';
import PopularMovies from './PopularMovies';

const Home = () => {
  const { list } = useSelector(state => state.popularMovies);
  const dispatch = useDispatch();
  console.log(list);

  useEffect(() => {
    dispatch(fetchPopularMovies());
  }, [dispatch]);

  return (
    <>
      <InitialPoster movie={list[0]} />
      <PopularMovies movies={list} />
    </>
  );
};

export default Home;

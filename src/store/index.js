import { configureStore } from '@reduxjs/toolkit';
import popularMovies from './slices/popularMovies';
import actionMovies from './slices/actionMovies';
import horrorMovies from './slices/horrorMovies';
import dramaMovies from './slices/dramaMovies';
import animationMovies from './slices/animationMovies';
import genre from './slices/genre';

export default configureStore({
  reducer: {
    popularMovies,
    genre,
    actionMovies,
    horrorMovies,
    dramaMovies,
    animationMovies,
  },
});

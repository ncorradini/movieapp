import { configureStore } from '@reduxjs/toolkit';
import popularMovies from './slices/popularMovies';
import genre from './slices/genre';

export default configureStore({
  reducer: {
    popularMovies,
    genre,
  },
});

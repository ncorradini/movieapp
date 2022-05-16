import { configureStore } from '@reduxjs/toolkit';
import popularMovies from './slices/popularMovies';

export default configureStore({
  reducer: {
    popularMovies,
  },
});

import { createSlice } from '@reduxjs/toolkit';
import { popularMoviesRequest } from '../../services/movieServices';

export const popularMoviesSlice = createSlice({
  name: 'popularMovies',
  initialState: {
    list: [],
  },
  reducers: {
    setPopularMoviesList: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setPopularMoviesList } = popularMoviesSlice.actions;

export default popularMoviesSlice.reducer;

export const fetchPopularMovies = () => async (dispatch) => {
  try {
    const response = await popularMoviesRequest();
    dispatch(setPopularMoviesList(response));
  } catch (error) {
    console.log(error);
  }
};

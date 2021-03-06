import { createSlice } from '@reduxjs/toolkit';
import { popularMoviesRequest } from '../../services/popularMovieServices';

export const popularMoviesSlice = createSlice({
  name: 'popularMovies',
  initialState: {
    list: [],
    loading: false,
  },
  reducers: {
    setPopularMoviesList: (state, action) => {
      state.list = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setPopularMoviesList, setLoading } = popularMoviesSlice.actions;

export default popularMoviesSlice.reducer;

export const fetchPopularMovies = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await popularMoviesRequest();
    dispatch(setPopularMoviesList(response));
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(setLoading(false));
  }
};

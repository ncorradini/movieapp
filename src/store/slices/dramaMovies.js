import { createSlice } from '@reduxjs/toolkit';
import { dramaMoviesRequest } from '../../services/dramaMovieServices';

export const dramaMoviesSlice = createSlice({
  name: 'dramaMovies',
  initialState: {
    list: [],
    loading: false,
  },
  reducers: {
    setDramaMoviesList: (state, action) => {
      state.list = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setDramaMoviesList, setLoading } = dramaMoviesSlice.actions;

export default dramaMoviesSlice.reducer;

export const fetchDramaMovies = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await dramaMoviesRequest();
    dispatch(setDramaMoviesList(response));
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(setLoading(false));
  }
};

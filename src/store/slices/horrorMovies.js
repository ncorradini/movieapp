import { createSlice } from '@reduxjs/toolkit';
import { horrorMoviesRequest } from '../../services/horrorMovieServices';

export const horrorMoviesSlice = createSlice({
  name: 'horrorMovies',
  initialState: {
    list: [],
    loading: false,
  },
  reducers: {
    setHorrorMoviesList: (state, action) => {
      state.list = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setHorrorMoviesList, setLoading } = horrorMoviesSlice.actions;

export default horrorMoviesSlice.reducer;

export const fetchHorrorMovies = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await horrorMoviesRequest();
    dispatch(setHorrorMoviesList(response));
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(setLoading(false));
  }
};

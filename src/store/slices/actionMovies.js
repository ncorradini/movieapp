import { createSlice } from '@reduxjs/toolkit';
import { actionMoviesRequest } from '../../services/actionMovieServices';

export const actionMoviesSlice = createSlice({
  name: 'actionMovies',
  initialState: {
    list: [],
    loading: false,
  },
  reducers: {
    setActionMoviesList: (state, action) => {
      state.list = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setActionMoviesList, setLoading } = actionMoviesSlice.actions;

export default actionMoviesSlice.reducer;

export const fetchActionMovies = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await actionMoviesRequest();
    dispatch(setActionMoviesList(response));
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(setLoading(false));
  }
};

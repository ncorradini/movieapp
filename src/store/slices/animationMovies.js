import { createSlice } from '@reduxjs/toolkit';
import { animationMoviesRequest } from '../../services/animationMovieServices';

export const animationMovieSlice = createSlice({
  name: 'animationMovies',
  initialState: {
    list: [],
    loading: false,
  },
  reducers: {
    setAnimationMoviesList: (state, action) => {
      state.list = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setAnimationMoviesList, setLoading } = animationMovieSlice.actions;

export default animationMovieSlice.reducer;

export const fetchAnimationMovies = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await animationMoviesRequest();
    dispatch(setAnimationMoviesList(response));
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(setLoading(false));
  }
};

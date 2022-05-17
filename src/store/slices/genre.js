import { createSlice } from '@reduxjs/toolkit';
import { genreRequest } from '../../services/genreServices';

export const genreSlice = createSlice({
  name: 'genre',
  initialState: {
    list: [],
  },
  reducers: {
    setGenreList: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setGenreList } = genreSlice.actions;

export default genreSlice.reducer;

export const fetchGenre = () => async (dispatch) => {
  try {
    const response = await genreRequest();
    dispatch(setGenreList(response));
  } catch (error) {
    console.log(error);
  }
};

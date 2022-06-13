import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL_API;
const API_KEY = process.env.REACT_APP_API_KEY;

export const getMovieById = async ({ movieId }) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=es-ES`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

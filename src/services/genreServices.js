import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL_API;
const API_KEY = process.env.REACT_APP_API_KEY;

export const genreRequest = async () => {
  try {
    const { data: { genres } } = await axios.get(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=es-ES`);
    return genres;
  } catch (error) {
    console.log(error);
  }
};

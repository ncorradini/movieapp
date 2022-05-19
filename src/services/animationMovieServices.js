import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL_API;
const API_KEY = process.env.REACT_APP_API_KEY;

export const animationMoviesRequest = async () => {
  try {
    const { data: { results } } = await axios.get(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=16`);
    return results;
  } catch (error) {
    console.log(error);
  }
};

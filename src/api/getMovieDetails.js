import axios from 'axios';
import { API_KEY, BASE_URL } from './KEY';
const MOVIE_DETAILS_ENDPOINT = '/movie';

export const getMovieDetails = async movieId => {
  try {
    const response = await axios.get(
      `${BASE_URL}${MOVIE_DETAILS_ENDPOINT}/${movieId}?api_key=${API_KEY}&language=en-US`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching movie details:', error.message);
    return null;
  }
};

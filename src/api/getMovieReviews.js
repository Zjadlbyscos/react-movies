import axios from 'axios';
import { API_KEY, BASE_URL } from './KEY';
const MOVIE_REVIEWS_ENDPOINT = '/movie';

export const getMovieReviews = async movieId => {
  try {
    const response = await axios.get(
      `${BASE_URL}${MOVIE_REVIEWS_ENDPOINT}/${movieId}/reviews?api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching movie reviews:', error.message);
    return null;
  }
};

import axios from "axios";
import { API_KEY,BASE_URL } from "./KEY";

const MOVIE_CREDITS_ENDPOINT = '/movie';

export const getMovieCredits = async (movieId) => {
    try {
      const response = await axios.get(`${BASE_URL}${MOVIE_CREDITS_ENDPOINT}/${movieId}/credits?api_key=${API_KEY}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching movie credits:', error.message);
      return null;
    }
  };
  
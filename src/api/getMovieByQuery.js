import axios from "axios";
import {API_KEY,BASE_URL} from "./KEY"

const SEARCH_ENDPOINT = '/search/movie';

export const getMoviebyQuery = async (query) => {
    try {
      const searchParams = new URLSearchParams({
        api_key: API_KEY,
        language: 'en-US',
        query: query,
      });
  
      const response = await axios.get(`${BASE_URL}${SEARCH_ENDPOINT}?${searchParams}`);
      const results = response.data.results;
  
      return results;
    } catch (error) {
      console.error('Error fetching movies by query:', error.message);
      return [];
    }
  };
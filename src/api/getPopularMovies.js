import axios from 'axios';

import { API_KEY, BASE_URL } from './KEY';

const POPULAR_ENDPOINT = '/trending/all/day';

const getPopularMovies = async () => {
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
    language: 'en-US',
  });

  const response = await axios.get(
    `${BASE_URL}${POPULAR_ENDPOINT}?${searchParams}`
  );
  const data = await response.data;
  const results = await data.results;

  return results;
};

export default getPopularMovies;

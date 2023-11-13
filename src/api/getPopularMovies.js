import axios from 'axios';

const API_KEY = '854b2461bbe5507a6040236243f8820c';
const BASE_URL = 'https://api.themoviedb.org/3';
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

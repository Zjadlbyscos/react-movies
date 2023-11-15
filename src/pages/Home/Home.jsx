import React from 'react';
import { useEffect, useState } from 'react';

import getPopularMovies from 'api/getPopularMovies';
import PopularList from 'components/PopularList/PopularList';

import css from './Home.module.css';

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const trendingMovies = await getPopularMovies();
        setMovies(trendingMovies);
      } catch (error) {
        console.error('Error fetching trending movies:', error.message);
      }
    };

    fetchPopularMovies();
  }, []);
  //   useEffect(() => {
  //     async function fetchMovies() {
  //       const data = await getPopularMovies();
  //       setMovies([...data]);
  //     }

  //     fetchMovies();
  //   }, []);

  return (
    <div className={css.container}>
      <h2 className={css.title}>Movies Trending Today</h2>
      <PopularList movies={movies}></PopularList>
    </div>
  );
}

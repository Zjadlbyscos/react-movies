import React from "react";
import { useEffect,useState } from "react";

import getPopularMovies from "api/getPopularMovies";

function Home() {

const [movies, setMovies] = useState([]);

useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const trendingMovies = await getPopularMovies();
        setMovies(trendingMovies);
      } catch (error) {
        console.error("Error fetching trending movies:", error.message);
      }
    };

    fetchPopularMovies();
  }, []);

  return (
    <div>
      <h2>Movies Trending Today</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <p>{movie.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
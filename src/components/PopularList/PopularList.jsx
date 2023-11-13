import React from 'react';
import { Link } from 'react-router-dom';

function PopularList({ movies }) {
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`}>
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
              <p>{movie.title}</p>
            </Link>
        </li>
      ))}
    </ul>
  );
}

export default PopularList;

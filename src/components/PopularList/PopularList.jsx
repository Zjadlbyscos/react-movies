import React from 'react';
import { Link } from 'react-router-dom';

import css from './Popular.module.css';
function PopularList({ movies }) {
  return (
    <ul className={css.movie}>
      {movies.map(movie => (
        <li className={css.movie__item} key={movie.id}>
          <Link to={`/movies/${movie.id}`}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <p className={css.movie__title}>{movie.title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default PopularList;

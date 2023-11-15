import React from 'react';
import { Link } from 'react-router-dom';

import css from '../PopularList/Popular.module.css'
const SearchedList = ({ movies }) => (
  <div>
    {movies.length > 0 ? (
      <ul className={css.movie}>
        {movies.map((movie) => ( movie.poster_path &&
          <li className={css.movie__item} key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <p className={css.movie__title}>{movie.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    ) : (
      <p>No movies found</p>
    )}
  </div>
);

export default SearchedList;


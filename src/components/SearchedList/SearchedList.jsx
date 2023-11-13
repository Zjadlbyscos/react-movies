import React from 'react';
import { Link } from 'react-router-dom';

const SearchedList = ({ movies }) => (
  <div>
    {movies.length > 0 ? (
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <p>{movie.title}</p>
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
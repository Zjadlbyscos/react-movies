import React from 'react';

const SearchedList = ({ movies }) => (
  <div>
    {movies.length > 0 ? (
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <p>{movie.title}</p>
          </li>
        ))}
      </ul>
    ) : (
      <p>No movies found</p>
    )}
  </div>
);

export default SearchedList;
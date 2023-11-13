import React, { useState } from 'react';
import { getMoviebyQuery } from 'api/getMovieByQuery';
import SearchedList from 'components/SearchedList/SearchedList';
import css from './movies.module.css';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchParam, setSearchParam] = useState('');

  const handleSearch = async e => {
    e.preventDefault();

    try {
      const foundMovies = await getMoviebyQuery(searchParam);
      setMovies(foundMovies);
    } catch (error) {
      console.error('Error searching movies:', error.message);
      setMovies([]);
    }
  };

  return (
    <div>
      <form className={css.form} onSubmit={handleSearch}>
        <input
          name="query"
          className={css.input}
          placeholder="Search Movie"
          value={searchParam}
          onChange={e => setSearchParam(e.target.value)}
        />
        <button type="submit" className={css.button}>
          Search
        </button>
      </form>

      <SearchedList movies={movies} />
    </div>
  );
}

export default Movies;

import React, { useState } from 'react';
import { getMoviebyQuery } from 'api/getMovieByQuery';

import SearchedList from 'components/SearchedList/SearchedList';



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
      <form  onSubmit={handleSearch}>
        <input
          name="query"
       
          placeholder="Search Movie"
          value={searchParam}
          onChange={e => setSearchParam(e.target.value)}
        />
        <button type="submit" >
          Search
        </button>
      </form>

      <SearchedList movies={movies} />
    </div>
  );
}

export default Movies;

import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getMovieDetails } from 'api/getMovieDetails';

import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const details = await getMovieDetails(movieId);
        setMovieDetails(details);
        // setMovieDetails(details);
        console.log('Movie Details:', details);
      } catch (error) {
        console.error('Error fetching movie details:', error.message);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (!movieDetails) {
    return <p>Loading...</p>;
  }

  return (
    <div className={css.movie}>
      <h2 className={css.movie__title}>{movieDetails.title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
        alt={movieDetails.title}
      />
      <p className={css.movie__overview}>{movieDetails.overview}</p>
      <div className={css.movie__buttons}>
        <Link to={`/movies/${movieId}/cast`}>
          <button>Cast</button>
        </Link>
        <Link to={`/movies/${movieId}/reviews`}>
          <button>Reviews</button>
        </Link>
      </div>
    </div>
  );
};

export default MovieDetails;

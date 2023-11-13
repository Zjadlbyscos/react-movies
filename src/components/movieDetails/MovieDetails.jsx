import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from 'api/getMovieDetails';

import { Link } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const details = await getMovieDetails(movieId);
        setMovieDetails(details);
        setMovieDetails(details);
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
    <div>
      <h2>{movieDetails.title}</h2>
      <img src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`} alt={movieDetails.title} />
      <p>{movieDetails.overview}</p>
      {/* Dodaj więcej inf */}
      <Link to={`/movies/${movieId}/cast`}>
        <button>Cast</button>
      </Link>
    </div>
  );
};

export default MovieDetails;

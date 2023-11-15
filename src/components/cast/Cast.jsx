import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getMovieCredits } from 'api/getMovieCast';

import css from './Cast.module.css';
const Cast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState(null);

  useEffect(() => {
    const fetchMovieCredits = async () => {
      try {
        const credits = await getMovieCredits(movieId);
        setCast(credits.cast);
        console.log('Movie Credits:', credits);
      } catch (error) {
        console.error('Error fetching movie credits:', error.message);
      }
    };

    fetchMovieCredits();
  }, [movieId]);

  if (!cast) {
    return <p>Loading...</p>;
  }

  return (
    <div className={css.container}>
      <Link to={`/movies/${movieId}`}>
        <button>Back</button>
      </Link>
      <h2>Cast</h2>
      <ul className={css.actors}>
        {cast.map(
          actor =>
            actor.profile_path && (
              <li className={css.actor} key={actor.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                  alt={actor.name}
                />

                <p className={css.name}>{actor.name}</p>
                <p>Character: {actor.character}</p>
              </li>
            )
        )}
      </ul>
      <Link to={`/movies/${movieId}`}>
        <button>Back</button>
      </Link>
    </div>
  );
};

export default Cast;

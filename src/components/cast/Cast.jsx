import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieCredits } from 'api/getMovieCast';

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
      <div>
        <h2>Cast</h2>
        <ul>
          {cast.map((actor) => (
             actor.profile_path &&(
            <li key={actor.id}>
              <img src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} alt={actor.name} />

              <p>{actor.name}</p>
              <p>Character: {actor.character}</p>
            </li>)

          ))}
        </ul>
      </div>
    );
  };
  
  export default Cast;
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getMovieReviews } from 'api/getMovieReviews';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        const movieReviews = await getMovieReviews(movieId);
        setReviews(movieReviews.results);
        console.log('Movie Reviews:', movieReviews);
      } catch (error) {
        console.error('Error fetching movie reviews:', error.message);
      }
    };

    fetchMovieReviews();
  }, [movieId]);

  if (!reviews) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Link to={`/movies/${movieId}`}>
        <button>Back</button>
      </Link>
      <h2>Reviews</h2>
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <p>{review.content}</p>
            <p>Author: {review.author}</p>
          </li>
        ))}
      </ul>
      <Link to={`/movies/${movieId}`}>
        <button>Back</button>
      </Link>
    </div>
  );
};

export default Reviews;

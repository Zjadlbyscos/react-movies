import {  Route, Routes } from 'react-router-dom';
import SharedLayout from './sharedLayout/SharedLayout';

import Home from '../pages/Home/Home'
import Movies from '../pages/Movie/Movies';
import MovieDetails from './movieDetails/MovieDetails';
import Cast from './cast/Cast';
import Reviews from './reviews/Reviews';

export const App = () => {
  return (
    <div>
     <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>  </Route>
            <Route path="/movies/:movieId/cast" element={<Cast />} />
            <Route path="/movies/:movieId/reviews" element={<Reviews />} />
        
          <Route path="*" element={<Home />} />
        </Route>
      </Routes> 
    </div>
  );
};

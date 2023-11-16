import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import SharedLayout from './sharedLayout/SharedLayout';

const Cast = lazy(() => import('./cast/Cast'));
const Home = lazy(() => import('../pages/Home/Home'));
const Reviews = lazy(() => import('./reviews/Reviews'));
const Movies = lazy(() => import('../pages/Movie/Movies'));
const MovieDetails = lazy(() => import('./movieDetails/MovieDetails'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}></Route>
          <Route path="/movies/:movieId/cast" element={<Cast />} />
          <Route path="/movies/:movieId/reviews" element={<Reviews />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};

import { NavLink, Route, Routes } from 'react-router-dom';

import Home from 'pages/home/Home';
import Movies from 'pages/movie/Movies';
import MovieDetails from './movieDetails/MovieDetails';
import Cast from './cast/Cast';
//cast Reviews

export const App = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/movies">MOVIES</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="/movies/:movieId/cast" element={<Cast />} />
        <Route path="*" element={<Home />}></Route>
      </Routes>
    </div>
  );
};

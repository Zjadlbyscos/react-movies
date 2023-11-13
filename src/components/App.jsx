import { NavLink, Route, Routes } from 'react-router-dom';

import Home from 'pages/home/Home';
import Movies from 'pages/movie/Movies';

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
        {/* <Route path="" element={<Home />}></Route>
        <Route path="" element={<Home />}></Route>
        <Route path="" element={<Home />}></Route> */}
      </Routes>
    </div>
  );
};

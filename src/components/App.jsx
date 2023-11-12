import { NavLink } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/movies">MOVIES</NavLink>
      </nav>
    </div>
  );
};

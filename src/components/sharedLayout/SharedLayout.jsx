import React, { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import css from './SharedLayout.module.css';

const SharedLayout = () => {
  return (
    <div>
      <nav className={css.navigation}>
        <NavLink to="/" className={css.navigation__item}>
          HOME
        </NavLink>
        <NavLink to="/movies" className={css.navigation__item}>
          MOVIES
        </NavLink>
      </nav>
      <Suspense fallback={'Loading...le '}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;

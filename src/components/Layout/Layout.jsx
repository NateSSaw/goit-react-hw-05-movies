import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './Layout.module.css';

export default function Layout() {
  return (
    <div>
      <header>
        <nav>
          <ul className={css.list}>
            <li className={css.list__item}>
              <NavLink
                to="/"
                className={({ isActive }) => `${isActive ? css.active : ''}`}
              >
                Home
              </NavLink>
            </li>
            <li className={css.list__item}>
              <NavLink
                to="/movies"
                className={({ isActive }) => `${isActive ? css.active : ''}`}
              >
                Movies
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
}

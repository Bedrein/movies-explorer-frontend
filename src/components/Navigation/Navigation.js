import { NavLink } from 'react-router-dom';

import './Navigation.css';

function Navigation({ isMainPage }) {
  return (
    <nav className='navigation'>
      <NavLink
        to='/movies'
        className={({ isActive }) =>
          `navigation__movies-link ${
            isMainPage
              ? 'navigation__text-color_white'
              : 'navigation__text-color_black'
          } ${isActive ? 'navigation__movies-link_active' : ''}`
        }>
        Фильмы
      </NavLink>
      <NavLink
        to='/saved-movies'
        className={({ isActive }) =>
          `navigation__movies-link ${
            isMainPage
              ? 'navigation__text-color_white'
              : 'navigation__text-color_black'
          } ${isActive ? 'navigation__movies-link_active' : ''}`
        }>
        Сохраненные фильмы
      </NavLink>
    </nav>
  );
}

export default Navigation;

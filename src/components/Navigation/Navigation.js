import { NavLink } from 'react-router-dom';

import './Navigation.css';
import '../Header/Header.css';

function Navigation({ isMainPage }) {
  return (
    <nav className='header__auth-nav'>
      <NavLink
        to='/movies'
        className={({ isActive }) =>
          `header__movies-link ${
            isMainPage ? 'header__text-color_white' : 'header__text-color_black'
          } ${isActive ? 'header__movies-link_active' : ''}`
        }>
        Фильмы
      </NavLink>
      <NavLink
        to='/saved-movies'
        className={({ isActive }) =>
          `header__movies-link ${
            isMainPage ? 'header__text-color_white' : 'header__text-color_black'
          } ${isActive ? 'header__movies-link_active' : ''}`
        }>
        Сохраненные фильмы
      </NavLink>
    </nav>
  );
}

export default Navigation;

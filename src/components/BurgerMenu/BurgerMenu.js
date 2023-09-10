import { NavLink } from 'react-router-dom';
import accountImage from '../../images/accountBtnWhite.svg';

import './BurgerMenu.css';

function BurgerMenu({ isOpen, onCloseBurgerMenu }) {
  return (
    <div
      className={`burger-menu ${
        isOpen ? 'burger-menu_opened' : 'burger-menu_hidden'
      }`}>
      <button
        type='button'
        className='burger-menu__button-close'
        onClick={onCloseBurgerMenu}></button>
      <div className='burger-menu__content'>
        <div className='burger-menu__links'>
          <NavLink
            to='/'
            className={({ isActive }) =>
              `burger-menu__link ${isActive ? 'burger-menu__link_active' : ''}`
            }
            onClick={onCloseBurgerMenu}>
            Главная
          </NavLink>

          <NavLink
            to='/movies'
            className={({ isActive }) =>
              `burger-menu__link ${isActive ? 'burger-menu__link_active' : ''}`
            }
            onClick={onCloseBurgerMenu}>
            Фильмы
          </NavLink>

          <NavLink
            to='/saved-movies'
            className={({ isActive }) =>
              `burger-menu__link ${isActive ? 'burger-menu__link_active' : ''}`
            }
            onClick={onCloseBurgerMenu}>
            Сохранённые фильмы
          </NavLink>
        </div>

        <div className='burger-menu__account'>
          <NavLink
            to='/profile'
            className='burger-menu__account-link burger-menu__link'
            onClick={onCloseBurgerMenu}>
            <img
              src={accountImage}
              alt='Иконка аккаунта'
              className='burger-menu__account-icon'
            />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default BurgerMenu;

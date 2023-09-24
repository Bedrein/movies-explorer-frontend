import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Navigation from '../Navigation/Navigation';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import logo from '../../images/logo.svg';
import accountBtn from '../../images/accountBtn.svg';
import accountBtnWhite from '../../images/accountBtnWhite.svg';

import './Header.css';

function Header({ loggedIn }) {
  const location = useLocation();
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const isMainPage = location.pathname === '/';

  function handleOpenBurgerMenu() {
    setIsBurgerMenuOpen(true);
  }

  function handleCloseBurgerMenu() {
    setIsBurgerMenuOpen(false);
  }

  const renderHeader = () => {
    if (isMainPage && !loggedIn) {
      return (
        <div className='header__actions header__actions-auth'>
          <img src={logo} alt='Логотип' className='header__logo' />
          <div className='header__navigation header__navigation-auth'>
            <Link
              to='/signup'
              className={`header__signup-link header__link ${
                isMainPage
                  ? 'header__text-color_white'
                  : 'header__text-color_black'
              }`}>
              Регистрация
            </Link>
            <Link
              to='/signin'
              className={`header__link header__signin-link ${
                isMainPage
                  ? 'header__text-color_white'
                  : 'header__text-color_black'
              }`}>
              Войти
            </Link>
          </div>
        </div>
      );
    } else {
      return (
        <>
          <div className='header__actions'>
            <Link to='/'>
              <img src={logo} alt='Логотип' className='header__logo' />
            </Link>
            <div className='header__navigation'>
              <Navigation isMainPage={isMainPage} />
            </div>
            <div>
              {' '}
              <Link to='/profile' className='header__profile-link header__link'>
                <img
                  src={isMainPage ? accountBtn : accountBtnWhite}
                  alt='Иконка аккаунта'
                  className='header__account-icon'
                />
              </Link>
            </div>
            <button
              className={`header__burger-menu-button ${
                isMainPage
                  ? 'header__burger-menu-button_white'
                  : 'header__burger-menu-button_black'
              }`}
              onClick={handleOpenBurgerMenu}
            />
          </div>
          <BurgerMenu
            isOpen={isBurgerMenuOpen}
            onCloseBurgerMenu={handleCloseBurgerMenu}
          />
        </>
      );
    }
  };

  return (
    <header
      className={`header ${isMainPage ? 'header__blue' : 'header__white'}`}>
      {renderHeader()}
    </header>
  );
}

export default Header;

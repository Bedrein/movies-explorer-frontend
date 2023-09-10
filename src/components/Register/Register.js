import React from 'react';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import './Register.css';

function Register() {
  return (
    <div className='registr'>
      <div className='registr__container'>
        <Link to='/'>
          <img src={logo} alt='Логотип приложения' className='registr__logo' />
        </Link>
        <h2 className='registr__title'>Добро пожаловать!</h2>
        <form className='registr__form'>
          <label className='registr__label'>Имя</label>
          <input className='registr__input' type='text' required />
          <label className='registr__label'>E-mail</label>
          <input
            className='registr__input'
            type='email'
            maxLength={30}
            minLength={5}
            required
          />
          <label className='registr__label'>Пароль</label>
          <input
            className='registr__input'
            type='password'
            maxLength={12}
            minLength={8}
            required
          />
          <span className='registr__form-span-error'></span>
          <button className='registr__button' type='submit'>
            Зарегистрироваться
          </button>
        </form>
        <p className='registr__footer-text'>
          Уже зарегистрированы?
          <Link to='/signin' className='registr__link'>
            Войти
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;

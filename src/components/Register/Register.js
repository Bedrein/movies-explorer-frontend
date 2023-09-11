import React from 'react';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import './Register.css';

function Register() {
  return (
    <section className='registr'>
      <div className='registr__container'>
        <Link to='/'>
          <img src={logo} alt='Логотип приложения' className='registr__logo' />
        </Link>
        <h1 className='registr__title'>Добро пожаловать!</h1>
        <form className='registr__form'>
          <label className='registr__label'>Имя</label>
          <input
            className='registr__input'
            type='text'
            name='name'
            placeholder='Имя пользователя'
            minLength={2}
            maxLength={30}
            required
          />
          <label className='registr__label'>E-mail</label>
          <input
            className='registr__input'
            type='email'
            name='email'
            minLength={5}
            maxLength={30}
            placeholder='Email'
            required
          />
          <label className='registr__label'>Пароль</label>
          <input
            className='registr__input'
            type='password'
            name='password'
            minLength={6}
            maxLength={12}
            placeholder='Пароль'
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
    </section>
  );
}

export default Register;

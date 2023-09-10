import React from 'react';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
  return (
    <section className='login'>
      <div className='login__container'>
        <Link to='/'>
          <img src={logo} alt='Логотип' className='login__logo' />
        </Link>
        <h2 className='login__title'>Рады видеть!</h2>
        <form className='login__form'>
          <label className='login__label'>E-mail</label>
          <input className='login__input' type='email' required />
          <label className='login__label'>Пароль</label>
          <input className='login__input' type='password' required />
          <span className='login__form-span-error'></span>
          <button className='login__button' type='submit'>
            Войти
          </button>
        </form>
        <p className='login__footer-text'>
          Ещё не зарегистрированы?
          <Link to='/signup' className='login__link'>
            Регистрация
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Login;

import React from 'react';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { EMAIL_VALID } from '../../utils/constans.js';
import './Login.css';

function Login({ handleLogin, errorMessage, setErrorMessage, isLoading }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isFormValid, setIsFormValid] = useState(false);
  const [isFormNull, setIsFormNull] = useState(true);

  useEffect(() => {
    const isInputValid = () => {
      const emailValid = EMAIL_VALID.test(email.trim());
      const passwordValid = password.trim().length >= 8;
      return emailValid && passwordValid;
    };

    setIsFormValid(isInputValid());
    setIsFormNull(email.trim() === '' || password.trim() === '');
  }, [email, password]);

  function handleChangeEmail(evt) {
    setEmail(evt.target.value);
    setErrorMessage('');
  }

  function handleChangePassword(evt) {
    setPassword(evt.target.value);
    setErrorMessage('');
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    handleLogin({ email, password });
  }

  return (
    <section className='login'>
      <div className='login__container'>
        <Link to='/'>
          <img src={logo} alt='Логотип' className='login__logo' />
        </Link>
        <h1 className='login__title'>Рады видеть!</h1>
        <form className='login__form' onSubmit={handleSubmit} noValidate>
          <label className='login__label'>E-mail</label>
          <input
            className='login__input'
            type='email'
            name='email'
            minLength={5}
            maxLength={30}
            placeholder='Email'
            required
            onChange={handleChangeEmail}
            value={email}
            disabled={isLoading}
          />
          <label className='login__label'>Пароль</label>
          <input
            className='login__input'
            type='password'
            name='password'
            minLength={6}
            maxLength={12}
            placeholder='Пароль'
            required
            value={password}
            onChange={handleChangePassword}
            disabled={isLoading}
          />
          <span className='login__form-span-error'>{errorMessage}</span>
          <button
            className={`login__button ${
              isLoading || isFormNull || !isFormValid
                ? 'login__button-disable'
                : ''
            }`}
            type='submit'
            disabled={isLoading || isFormNull || !isFormValid}>
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

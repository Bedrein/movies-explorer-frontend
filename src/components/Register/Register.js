import React from 'react';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { EMAIL_VALID } from '../../utils/constans.js';
import './Register.css';

function Register({
  handleRegister,
  errorMessage,
  setErrorMessage,
  isLoading,
}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const [isFormNull, setIsFormNull] = useState(true);

  useEffect(() => {
    const isInputValid = () => {
      const nameValid = name.trim().length >= 2 && name.trim().length <= 20;
      const emailValid = EMAIL_VALID.test(email.trim());
      const passwordValid = password.trim().length >= 8;
      return nameValid && emailValid && passwordValid;
    };

    setIsFormValid(isInputValid());
    setIsFormNull(
      name.trim() === '' || email.trim() === '' || password.trim() === ''
    );
  }, [name, email, password]);

  function handleSubmit(evt) {
    evt.preventDefault();
    handleRegister({ name, email, password });
  }
  function handleChangeName(evt) {
    setName(evt.target.value);
    setErrorMessage('');
  }

  function handleChangeEmail(evt) {
    setEmail(evt.target.value);
    setErrorMessage('');
  }

  function handleChangePassword(evt) {
    setPassword(evt.target.value);
    setErrorMessage('');
  }
  return (
    <section className='registr'>
      <div className='registr__container'>
        <Link to='/'>
          <img src={logo} alt='Логотип приложения' className='registr__logo' />
        </Link>
        <h1 className='registr__title'>Добро пожаловать!</h1>
        <form className='registr__form' onSubmit={handleSubmit} noValidate>
          <label className='registr__label'>Имя</label>
          <input
            className='registr__input'
            type='text'
            name='name'
            placeholder='Имя пользователя'
            minLength={2}
            maxLength={30}
            required
            value={name || ''}
            onChange={handleChangeName}
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
            value={email || ''}
            onChange={handleChangeEmail}
            disabled={isLoading}
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
            value={password || ''}
            onChange={handleChangePassword}
            disabled={isLoading}
          />
          <span className='registr__form-span-error'>{errorMessage}</span>
          <button
            className={`registr__button ${
              isLoading || isFormNull || !isFormValid
                ? 'registr__button-disable'
                : ''
            }`}
            type='submit'
            disabled={isLoading || isFormNull || !isFormValid}>
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

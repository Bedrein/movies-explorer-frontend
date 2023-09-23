import React from 'react';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { EMAIL_VALID, NAME_VALID } from '../../utils/constans.js';
import './Register.css';

function Register({
  handleRegister,
  errorMessage,
  setErrorMessage,
  isLoading,
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isServerError, setIsServerError] = useState(false);
  const [userData, setUserData] = useState({
    name: { value: '', isValid: false, errorMessage: '' },
    email: { value: '', isValid: false, errorMessage: '' },
    password: { value: '', isValid: false, errorMessage: '' },
  });

  useEffect(() => {
    if (errorMessage) {
      setIsServerError(true);
    }
  }, [errorMessage]);

  // Проверка валидности формы
  const isFormValid =
    userData.name.isValid &&
    userData.email.isValid &&
    userData.password.isValid;

  const handleChange = (evt) => {
    const { name, value, validity, validationMessage } = evt.target;
    let isValidInput = validity.valid;
    let errorMessage = validationMessage;

    if (name === 'email' && !EMAIL_VALID.test(value)) {
      isValidInput = false;
      errorMessage = 'Ошибка ввода адреса электронной почты.';
    } else if (name === 'name' && !NAME_VALID.test(value)) {
      isValidInput = false;
      errorMessage =
        'Имя может содержать только латиницу, кириллицу, пробел или дефис.';
    }

    setUserData((state) => ({
      ...state,
      [name]: {
        ...state[name],
        value,
        isValid: isValidInput,
        errorMessage,
      },
    }));
    setIsServerError(false);
    setErrorMessage('');
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setIsSubmitting(true);
    handleRegister({
      name: userData.name.value,
      email: userData.email.value,
      password: userData.password.value,
    }).finally(() => {
      setIsSubmitting(false);
    });
  };

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
            value={userData.name.value}
            onChange={handleChange}
          />
          <span className='registr__form-span-error'>
            {userData.name.errorMessage}
          </span>
          <label className='registr__label'>E-mail</label>
          <input
            className='registr__input'
            type='email'
            name='email'
            minLength={5}
            maxLength={30}
            placeholder='Email'
            required
            value={userData.email.value}
            onChange={handleChange}
            disabled={isLoading}
          />
          <span className='registr__form-span-error'>
            {userData.email.errorMessage}
          </span>

          <label className='registr__label'>Пароль</label>
          <input
            className='registr__input'
            type='password'
            name='password'
            minLength={8}
            placeholder='Пароль'
            required
            value={userData.password.value}
            onChange={handleChange}
            disabled={isLoading}
          />
          <span className='registr__form-span-error'>
            {userData.password.errorMessage}
            {errorMessage}
          </span>
          <button
            className={`registr__button ${
              isSubmitting || !isFormValid || isServerError
                ? 'registr__button-disable'
                : ''
            }`}
            type='submit'
            disabled={isSubmitting || !isFormValid || isServerError}>
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

import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { EMAIL_VALID, NAME_VALID } from '../../utils/constans.js';

import './Profile.css';

function Profile({ onLogout, onUpdateProfile, serverError, setServerError }) {
  const currentUser = useContext(CurrentUserContext);
  const [isEdit, setIsEdit] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isButtonActive, setIsButtonActive] = useState(false);
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');

  // Заполнение данных профиля
  useEffect(() => {
    if (currentUser) {
      setName(currentUser.name);
      setEmail(currentUser.email);
    }
  }, [currentUser]);

  // Сброс данных профиля к последним значениям
  useEffect(() => {
    if (serverError) {
      setName(currentUser.name);
      setEmail(currentUser.email);
    }
  }, [serverError, name, email, currentUser.name, currentUser.email]);

  // Валидация
  useEffect(() => {
    const nameValid = NAME_VALID.test(name);
    const emailValid = EMAIL_VALID.test(email);

    // Ошибки валидации
    setNameError(
      nameValid
        ? ''
        : 'Имя может содержать только латиницу, кириллицу, пробел или дефис'
    );
    setEmailError(emailValid ? '' : 'Некорректный формат электронной почты');

    // Проверка активации кнопки "Сохранить"
    setIsButtonActive(
      nameValid &&
        emailValid &&
        (name !== currentUser.name || email !== currentUser.email) &&
        !serverError
    );
  }, [name, email, currentUser.name, currentUser.email, serverError]);

  const handleChangeName = (event) => {
    setName(event.target.value);
    setServerError('');
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
    setServerError('');
  };

  // Режим редактирования
  const handleEdit = () => {
    setIsEdit(true);
  };

  // Режим сохранения
  const handleSave = () => {
    onUpdateProfile({
      name,
      email,
    }).then(() => {
      setIsEdit(false);
    });
  };

  return (
    <section className='profile'>
      <h1 className='profile__title'> {`Привет,  ${currentUser.name}!`}</h1>
      <form className='profile__form' onSubmit={handleSave} noValidate>
        <div className='profile__form-item'>
          <label className='profile__label'>Имя</label>
          <input
            className='profile__input'
            minLength={2}
            maxLength={20}
            type='text'
            value={name ?? ''}
            id='Username'
            onChange={handleChangeName}
            disabled={!isEdit}
          />
        </div>

        <div className='profile__form-item'>
          <label className='profile__label'>E-mail</label>
          <input
            className='profile__input'
            type='email'
            value={email ?? ''}
            onChange={handleChangeEmail}
            disabled={!isEdit}
          />
        </div>
        {nameError && <span className='profile__error'>{nameError}</span>}
        {emailError && <span className='profile__error'>{emailError}</span>}
      </form>
      <span className='profile__server-error'>{serverError}</span>
      {isEdit ? (
        <button
          className='profile__button profile__button-save'
          type='button'
          onClick={handleSave}
          disabled={!isButtonActive}>
          Сохранить
        </button>
      ) : (
        <button className='profile__button' type='button' onClick={handleEdit}>
          Редактировать
        </button>
      )}

      <Link to='/' onClick={onLogout} className='profile__button-exit'>
        Выйти из аккаунта
      </Link>
    </section>
  );
}

export default Profile;

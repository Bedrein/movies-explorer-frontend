import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

import './Profile.css';

function Profile() {
  const [name, setName] = useState('Виталий');
  const [email, setEmail] = useState('pochta@yandex.ru');

  return (
    <section className='profile'>
      <h1 className='profile__title'> Привет, {name}!</h1>
      <form className='profile__form'>
        <div className='profile__form-item'>
          <label className='profile__label'>Имя</label>
          <input
            className='profile__input'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='profile__form-item'>
          <label className='profile__label'>E-mail</label>
          <input
            className='profile__input'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </form>
      <button className='profile__button' type='button'>
        Редактировать
      </button>
      <Link to='/' className='profile__button-exit'>
        Выйти из аккаунта
      </Link>
    </section>
  );
}

export default Profile;

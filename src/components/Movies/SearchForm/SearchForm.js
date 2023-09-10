import React from 'react';
// import formIcon from '../../images/icon__COLOR_invisible.svg';

import './SearchForm.css';

function SearchForm() {
  return (
    <section className='search'>
      <form className='search__form'>
        <input
          name='query'
          className='search__input'
          id='search-input'
          required
          type='text'
          placeholder='Фильм'></input>
        <button className='search__button' type='submit'>
          Найти
        </button>
      </form>
    </section>
  );
}

export default SearchForm;

import React from 'react';

import './SearchForm.css';

function SearchForm({ query, setQuery, isShortFilm, onSearch }) {
  const handleInputChange = (evt) => {
    setQuery(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSearch(query, isShortFilm);
  };

  return (
    <section className='search'>
      <form className='search__form' onSubmit={handleSubmit}>
        <input
          name='query'
          className='search__input'
          id='search-input'
          required
          type='text'
          placeholder='Фильм'
          value={query}
          onChange={handleInputChange}></input>
        <button className='search__button' type='submit'>
          Найти
        </button>
      </form>
    </section>
  );
}

export default SearchForm;

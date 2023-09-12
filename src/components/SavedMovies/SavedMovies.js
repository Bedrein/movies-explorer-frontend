import React from 'react';
import FilterSlider from '../Movies/FilterSlider/FilterSlider.js';
import SearchForm from '../Movies/SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import './SavedMovies.css';

function SavedMovies() {
  return (
    <section className='saved-movies'>
      <SearchForm />
      <FilterSlider />
      <MoviesCardList />
      <div className='movies__box'></div>
    </section>
  );
}

export default SavedMovies;

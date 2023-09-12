import React from 'react';
import SearchForm from './SearchForm/SearchForm.js';
import FilterSlider from './FilterSlider/FilterSlider.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';

import './Movies.css';

function Movies() {
  return (
    <section className='movies'>
      <SearchForm />
      <FilterSlider />
      <MoviesCardList />
      <div className='movies__container-more'>
        <button className='movies__button-more'>Ещё</button>
      </div>
    </section>
  );
}

export default Movies;

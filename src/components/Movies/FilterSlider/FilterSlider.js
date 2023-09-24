import React from 'react';

import './FilterSlider.css';

function FilterSlider({ query, isShortFilm, setIsShortFilm, onFilter }) {
  const handleShortMovies = () => {
    setIsShortFilm(!isShortFilm);
    onFilter(query, !isShortFilm);
  };

  return (
    <section className='slider'>
      <label className='slider__btn'>
        <input
          className='slider__input'
          type='checkbox'
          onClick={handleShortMovies}
        />
        <span
          className={`slider__switch ${
            isShortFilm ? 'slider__switch_active' : ''
          }`}
        />
        <span className='slider__text'>Короткометражки</span>
      </label>
    </section>
  );
}

export default FilterSlider;

import React from 'react';

import './FilterSlider.css';

function FilterSlider() {
  return (
    <section className='slider'>
      {/* <label className='slider__btn' for='checkbox'>
        <input className='slider__input' type='checkbox' id='checkbox' />
        <span className='slider__switch'>Короткометражки</span>
      </label> */}

      <label className='slider__btn'>
        <input className='slider__input' type='checkbox' />
        <span className='slider__switch' />
        <span className='slider__text'>Короткометражки</span>
      </label>
    </section>
  );
}

export default FilterSlider;

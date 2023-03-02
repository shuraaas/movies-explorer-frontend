import React from 'react';
import './index.css';

const FilterCheckbox = () => {
  return (
    <div className='filter-checkbox'>
      <input className='filter-checkbox__icon' type='checkbox' id='short-movies' name='short-movies' />
      <label className='filter-checkbox__label' htmlFor='short-movies'>Короткометражки</label>
    </div>
  );
};

export default FilterCheckbox;

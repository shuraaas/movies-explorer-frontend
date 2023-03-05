import React, { useEffect, useRef } from 'react';
import './index.css';

const FilterCheckbox = () => {
  const checkboxRef = useRef(null);
  const checked = JSON.parse(localStorage.getItem('filterCheckbox')) || false;

  useEffect(() => {
    checkboxRef.current.checked = checked;
  }, [checked]);

  const handleClickCheckbox = () => {
    localStorage.setItem('filterCheckbox', checkboxRef.current.checked);
  };

  return (
    <div className='filter-checkbox'>
      <input
        className='filter-checkbox__icon'
        onChange={handleClickCheckbox}
        type='checkbox'
        id='short-movies'
        name='short-movies'
        ref={checkboxRef}
      />
      <label className='filter-checkbox__label' htmlFor='short-movies'>Короткометражки</label>
    </div>
  );
};

export default FilterCheckbox;

import React, { useEffect, useRef, useState } from 'react';
import './index.css';

const FilterCheckbox = ({ onFilter }) => {
  const checkboxRef = useRef(null);
  const checked = JSON.parse(localStorage.getItem('checkboxState')) || false;
  const [filterCheckbox, setFilterCheckbox] = useState(false);

  useEffect(() => {
    checkboxRef.current.checked = checked;
  }, []);

  const handleClickCheckbox = () => {
    localStorage.setItem('checkboxState', checkboxRef.current.checked);
    setFilterCheckbox(checkboxRef.current.checked);
    onFilter(checkboxRef.current.checked);
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

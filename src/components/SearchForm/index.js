import React from 'react';
import FilterCheckbox from '../FilterCheckbox';
import './index.css';

const SearchForm = () => {
  return (
    <div className='search-form'>
      <div className='search-form__inner'>
        <input className='search-form__input' type='input' placeholder='Фильм' />
        <button className='btn btn_type_search-form' type='button'>Найти</button>
      </div>
      <FilterCheckbox />
    </div>
  );
};

export default SearchForm;

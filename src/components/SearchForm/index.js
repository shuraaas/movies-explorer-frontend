import React from 'react';
import FilterCheckbox from '../FilterCheckbox';
import './index.css';

const SearchForm = () => {
  return (
    <div className='search-form'>
      <form className='search-form__inner'>
        <input className='search-form__input' type='text' placeholder='Фильм' required />
        <button className='btn btn_type_search-form' type='submit'>Найти</button>
      </form>
      <FilterCheckbox />
    </div>
  );
};

export default SearchForm;

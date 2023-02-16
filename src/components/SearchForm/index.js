import React from 'react';
import './index.css';

const SearchForm = () => {
  return (
    <div className='search-form'>
      <input className='search-form__input' type='input' placeholder='Фильм' />
      <button className='btn search-form__btn' type='button'>Найти</button>
      {/* TODO: Доделать переключатель короткометражек */}
    </div>
  );
};

export default SearchForm;

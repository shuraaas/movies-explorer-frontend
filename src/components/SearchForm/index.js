import React, { useEffect, useState } from 'react';

import moviesApi from '../../utils/MoviesApi.js';

import FilterCheckbox from '../FilterCheckbox';
import './index.css';

const SearchForm = () => {
  const [request, setRequest] = useState('');
  const [movies, setMovies] = useState([]);

  // useEffect(() => {
  //   const moviesData = async () => {
  //     const movies = await moviesApi.getMovies();
  //     setMovies(movies);
  //   };
  //   moviesData();
  // }, []);

  const handleChange = (e) => {
    setRequest(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const filterCheckbox = JSON.parse(localStorage.getItem('filterCheckbox')) || false;

    localStorage.setItem('movies', JSON.stringify(movies));
    localStorage.setItem('request', request);
    localStorage.setItem('filterCheckbox', filterCheckbox);
  };

  return (
    <div className='search-form'>
      <form className='search-form__inner' onSubmit={handleSubmit}>
        <input className='search-form__input' type='text' placeholder='Фильм' value={request} onChange={handleChange} required />
        <button className='btn btn_type_search-form' type='submit'>Найти</button>
      </form>
      <FilterCheckbox />
    </div>
  );
};

export default SearchForm;

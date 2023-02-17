import React from 'react';
import './index.css';

const MoviesNav = () => {
  return (
    <ul className='movies-nav'>
      <li className='movies-nav__item'>
        <a className='movies-nav__link' href='#'>Фильмы</a>
      </li>
      <li className='movies-nav__item'>
        <a className='movies-nav__link' href='#'>Сохранённые фильмы</a>
      </li>
      <li className='movies-nav__item'>
        <a className='movies-nav__link movies-nav__link_active' href='#'>Аккаунт</a>
      </li>
    </ul>
  );
};

export default MoviesNav;

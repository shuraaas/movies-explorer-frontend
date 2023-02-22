import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const MoviesNav = () => {
  const burger = useRef(null);
  const moviesNav = useRef(null);

  let menuOpen = false;

  const handleBurgerClick = () => {
    const menuBtn = document.querySelector('.movies-nav__burger-btn');

    if(!menuOpen) {
      menuBtn.classList.add('open');
      moviesNav.current.classList.add('movies-nav_burger');
      menuOpen = true;
    } else {
      menuBtn.classList.remove('open');
      moviesNav.current.classList.remove('movies-nav_burger');
      menuOpen = false;
    }
  };


  return (
    <>
      <div className='movies-nav' ref={moviesNav}>
        <ul className='movies-nav__list'>
          <li className='movies-nav__item'>
            <Link className='movies-nav__link' to='/'>Главная</Link>
          </li>
          <li className='movies-nav__item'>
            <Link className='movies-nav__link' to='/movies'>Фильмы</Link>
          </li>
          <li className='movies-nav__item'>
            <Link className='movies-nav__link' to='/saved-movies'>Сохранённые фильмы</Link>
          </li>
        </ul>
        <Link className='movies-nav__btn' to='/profile'>Аккаунт</Link>
      </div>
      <div className='movies-nav__burger-btn' onClick={handleBurgerClick}>
        <span className='movies-nav__burger' ref={burger}></span>
      </div>
    </>
  );
};

export default MoviesNav;

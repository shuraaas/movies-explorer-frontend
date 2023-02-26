import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const MoviesNav = () => {
  const burger = useRef(null);
  const burgerBtn = useRef(null);
  const moviesNav = useRef(null);

  let menuOpen = false;

  const handleBurgerClick = () => {
    if(!menuOpen) {
      burgerBtn.current.classList.add('open');
      burgerBtn.current.style.position = 'fixed';
      burgerBtn.current.style.top = '23px';
      burgerBtn.current.style.right = '29px';
      moviesNav.current.classList.add('movies-nav_burger');
      menuOpen = true;
    } else {
      burgerBtn.current.classList.remove('open');
      burgerBtn.current.style.position = 'relative';
      burgerBtn.current.style.top = 0;
      burgerBtn.current.style.right = 0;
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
      <div className='movies-nav__burger-btn' onClick={handleBurgerClick} ref={burgerBtn}>
        <span className='movies-nav__burger' ref={burger}></span>
      </div>
    </>
  );
};

export default MoviesNav;

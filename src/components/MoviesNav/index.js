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
      moviesNav.current.classList.add('header__movies-nav_burger');
      menuOpen = true;
    } else {
      burgerBtn.current.classList.remove('open');
      burgerBtn.current.style.position = 'relative';
      burgerBtn.current.style.top = 0;
      burgerBtn.current.style.right = 0;
      moviesNav.current.classList.remove('header__movies-nav_burger');
      menuOpen = false;
    }
  };

  return (
    <>
      <div className='header__movies-nav' ref={moviesNav}>
        <ul className='header__movies-nav-list'>
          <li className='header__movies-nav-item'>
            <Link className='header__movies-nav-link' to='/'>Главная</Link>
          </li>
          <li className='header__movies-nav-item'>
            <Link className='header__movies-nav-link' to='/movies'>Фильмы</Link>
          </li>
          <li className='header__movies-nav-item'>
            <Link className='header__movies-nav-link' to='/saved-movies'>Сохранённые фильмы</Link>
          </li>
        </ul>
        <Link className='header__movies-nav-btn' to='/profile'>Аккаунт</Link>
      </div>
      <div className='header__movies-nav-burger-btn' onClick={handleBurgerClick} ref={burgerBtn}>
        <span className='header__movies-nav-burger' ref={burger}></span>
      </div>
    </>
  );
};

export default MoviesNav;

import React from 'react';
import './index.css';

const Navigation = () => {
  return (
    <ul className='nav'>
      <li className='nav__item'>
        <a className='nav__link' href='#'>Регистрация</a>
      </li>
      <li className='nav__item'>
        <a className='nav__link nav__link_type_promo-active' href='#'>Войти</a>
      </li>
    </ul>
  );
};

export default Navigation;
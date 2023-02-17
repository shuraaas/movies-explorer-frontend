import React from 'react';
import './index.css';

const Header = ({ place, children }) => {

  let headerStyle = (
    `${place === 'main' ? 'header header_place_main' : 'header'}`
  );

  return (
    <header className={headerStyle}>
      <div className='header__inner'>
        <div className='header__logo'></div>
        { children }
      </div>
    </header>
  );
};

export default Header;
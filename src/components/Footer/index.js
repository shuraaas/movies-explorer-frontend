import React from 'react';
import './index.css';

const Footer = () => {
  let date = new Date();

  return (
    <footer className='footer'>
      <div className='footer__info'>
        <p className='footer__text'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      </div>
      <div className="footer__navbar">
        <p>&copy; {date.getFullYear()}</p>
        <ul className='footer__nav'>
          <li>
            <a className='footer__nav-link' href='#'>Яндекс.Практикум</a>
          </li>
          <li>
            <a className='footer__nav-link' href='#'>Github</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
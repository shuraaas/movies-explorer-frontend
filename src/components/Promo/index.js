import React from 'react';
import './index.css';
import promoLogoPath from '../../images/Promo/promo-logo.png';

const Promo = () => {
  return (
    <section className='promo'>
      <div className="promo__inner">
        <div className="promo__info">
          <h1 className='promo__title'>Учебный проект студента факультета Веб&ndash;разработки.</h1>
          <p className='promo__description'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
          <button className='btn' type='button'>Узнать больше</button>
        </div>
        <img className='promo__main-illustration' src={promoLogoPath} alt='promo-logo' />
      </div>
    </section>
  );
};

export default Promo;
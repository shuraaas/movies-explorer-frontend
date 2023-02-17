import React from 'react';
import './index.css';

const PageNotFound = () => {
  return (
    <section className='page-not-found'>
      <div className='page-not-found__content'>
        <h2 className='page-not-found__title'>404</h2>
        <p className='page-not-found__subtitle'>Страница не найдена</p>
        <a className='page-not-found__link' href='#'>Назад</a>
      </div>
    </section>
  );
};

export default PageNotFound;

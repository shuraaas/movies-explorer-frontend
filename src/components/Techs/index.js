import React from 'react';
import './index.css';

const Techs = () => {
  return (
    <section className='techs'>
      <div className="techs__inner">
        <h2 className='section-title'>Технологии</h2>
        <div className='techs__info'>
          <h3 className='techs__info-title'>7 технологий</h3>
          <p className='techs__info-subtitle'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        </div>
        <div className="techs__list">
          <p className='techs__list-text'>HTML</p>
          <p className='techs__list-text'>CSS</p>
          <p className='techs__list-text'>JS</p>
          <p className='techs__list-text'>React</p>
          <p className='techs__list-text'>Git</p>
          <p className='techs__list-text'>Express.js</p>
          <p className='techs__list-text'>mongoDB</p>
        </div>
      </div>
    </section>
  );
};

export default Techs;
import React from 'react';
import './index.css';

const MoviesCard = ({ path, save }) => {

  const typeBtnSave = (
    `${save ? 'btn movies-card__save movies-card__save_active' : 'btn movies-card__save'}`
  );

  return (
    <li className='movies-card'>
      <div className="movies-card__header">
        <div className="movies-card__info">
          <h2 className='movies-card__name'>33 слова о дизайне</h2>
          <p className='movies-card__duration'>1ч 47м</p>
        </div>
        <button className={typeBtnSave} type='button'></button>
      </div>
      <img className='movies-card__image' src={path} alt='карточка первая' />
    </li>
  );
};

export default MoviesCard;

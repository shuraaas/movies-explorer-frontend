import React from 'react';
import './index.css';

const MoviesCard = ({ path, save, saved }) => {
  let typeBtnSave = (
    `${save ? 'btn btn_movie_saved' : 'btn btn_movie_save'}`
  );

  if (saved) {
    typeBtnSave = 'btn btn_movie_unsaved';
  }

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

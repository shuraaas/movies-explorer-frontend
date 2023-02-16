import React from 'react';
import MoviesCard from '../MoviesCard';
import './index.css';
import cardsList from './cards';

const MoviesCardList = () => {
  return (
    <ul className='movies-card-list'>
      {cardsList.map(card => (
        <MoviesCard
          key={card.id}
          {...card}
        />
      ))}
    </ul>
  );
};

export default MoviesCardList;

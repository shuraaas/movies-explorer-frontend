import React from 'react';
import MoviesCard from '../MoviesCard';
import './index.css';

const MoviesCardList = ({ cards }) => {
  return (
    <ul className='movies-card-list'>
      {cards.map(card => (
        <MoviesCard
          key={card.id}
          {...card}
        />
      ))}
    </ul>
  );
};

export default MoviesCardList;

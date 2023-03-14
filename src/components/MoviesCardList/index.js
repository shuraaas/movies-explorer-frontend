import React, { useEffect } from 'react';
import MoviesCard from '../MoviesCard';
import './index.css';

const MoviesCardList = ({ movies, savedMovies, onDelete }) => {

  // console.log('MoviesCardList', movies);

  // useEffect(() => {
  //   localStorage.clear()
  // }, []);
  // const movies1 = [];
  // for(let i = 0; i < 3 ; i++) {
  //   movies1.push(movies[i]);
  // }
  // if (movies) console.log(movies);

  return (
    <ul className='movies-card-list'>
      {movies.map(movie => (
        <MoviesCard
          key={movie._id || movie.id}
          savedMovies={savedMovies}
          onDelete={onDelete}
          {...movie}
        />
      ))}
      {/* {movies && movies.map(movie => (
        <MoviesCard
          key={movie._id || movie.id}
          {...movie}
        />
      ))} */}
    </ul>
  );
};

export default MoviesCardList;

import React from 'react';
import mainApi from '../../utils/MainApi.js';
import './index.css';

const MoviesCard = ({
  // path,
  save,
  saved,
  country,
  director,
  duration,
  year,
  description,
  image,
  trailerLink,
  id,
  nameRU,
  nameEN,
}) => {
  // let typeBtnSave = false;
  //   `${save ? 'btn btn_movie_saved' : 'btn btn_movie_save'}`
  // );

  // if (saved) {
  //   typeBtnSave = 'btn btn_movie_unsaved';
  // }

  // console.log(image);

  let btnSaveActive = false;

  const checkDuration = () => {
    let hour = 0;
    let minute = 0;

    if ( duration >= 60 ) {
      hour = Math.floor(duration / 60);
      minute = duration % 60;

      if (minute !== 0) {
        return `${hour}ч ${minute}м`;
      }

      return `${hour}ч`;
    } else {
      return `${duration}м`;
    }


    // return duration;
  };

  const handleSaveBtnClick = (e) => {
    if (!btnSaveActive) {
      e.target.classList.remove('btn_movie_save');
      e.target.classList.add('btn_movie_saved');
      btnSaveActive = true;

      mainApi.createMovie({
        country,
        director,
        duration,
        year,
        description,
        image: `https://api.nomoreparties.co${image.url}`,
        trailerLink,
        thumbnail: `https://api.nomoreparties.co${image.formats.thumbnail.url}`,
        movieId: id,
        nameRU,
        nameEN,
      });

    } else {
      e.target.classList.add('btn_movie_save');
      e.target.classList.remove('btn_movie_saved');
      btnSaveActive = false;

      mainApi.deleteMovie(id);
    }
  };

  return (
    <li className='movies-card'>
      <div className='movies-card__header'>
        <div className='movies-card__info'>
          <h2 className='movies-card__name'>{nameRU}</h2>
          <p className='movies-card__duration'>{checkDuration()}</p>
        </div>
        <button className='btn btn_movie_save' type='button' onClick={handleSaveBtnClick}></button>
      </div>
      <img className='movies-card__image' src={image} alt={nameRU} />
    </li>
  );
};

export default MoviesCard;

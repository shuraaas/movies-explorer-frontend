import React from 'react';
import Footer from '../Footer';
import SearchForm from '../SearchForm';
import MoviesCardList from '../MoviesCardList';
import './index.css';
import cardsList from './cards.js';

const SavedMovies = () => {
  return (
    <>
      {/* <Header /> */}
      <section className='saved-movies'>
        <SearchForm />
        <MoviesCardList cards={cardsList} />
      </section>
      <Footer />
    </>
  );
};

export default SavedMovies;

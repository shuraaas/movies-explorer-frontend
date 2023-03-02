import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import SearchForm from '../SearchForm';
import MoviesCardList from '../MoviesCardList';
import MoviesNav from '../MoviesNav';
import './index.css';
import cardsList from './cards.js';

const SavedMovies = () => {
  return (
    <>
      <Header>
        <MoviesNav />
      </Header>
      <section className='saved-movies'>
        <SearchForm />
        <MoviesCardList cards={cardsList} />
      </section>
      <Footer />
    </>
  );
};

export default SavedMovies;

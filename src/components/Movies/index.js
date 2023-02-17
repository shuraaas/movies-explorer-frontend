import React from 'react';
import Footer from '../Footer';
import SearchForm from '../SearchForm';
import MoviesCardList from '../MoviesCardList';
import Preloader from '../Preloader';
import Header from '../Header';
import MoviesNav from '../MoviesNav';
import './index.css';
import cardsList from './cards.js';

const Movies = () => {
  return (
    <>
      <Header>
        <MoviesNav />
      </Header>
      <section className='movies'>
        <SearchForm />
        <MoviesCardList cards={cardsList} />
        <Preloader />
      </section>
      <Footer />
    </>
  );
};

export default Movies;

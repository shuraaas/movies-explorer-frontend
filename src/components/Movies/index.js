import React from 'react';
import Footer from '../Footer';
import SearchForm from '../SearchForm';
import MoviesCardList from '../MoviesCardList';
import Preloader from '../Preloader';
import './index.css';

const Movies = () => {
  return (
    <>
      {/* <Header /> */}
      <section className='movies'>
        <SearchForm />
        <MoviesCardList />
        <Preloader />
      </section>
      <Footer />
    </>
  );
};

export default Movies;

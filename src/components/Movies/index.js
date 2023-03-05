import React, { useState, useEffect } from 'react';
import Footer from '../Footer';
import SearchForm from '../SearchForm';
import MoviesCardList from '../MoviesCardList';
import Preloader from '../Preloader';
import Header from '../Header';
import MoviesNav from '../MoviesNav';
import './index.css';
import cardsList from './cards.js';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  // const movies1 = [];
  // for(let i = 0; i < 3 ; i++) {
  //   movies1.push(movies[i]);
  // }
  // useEffect(() => {
    // setMovies(JSON.parse(localStorage.getItem('movies')));
    // console.log(JSON.parse(localStorage.getItem('movies')));


  // }, []);

  // console.log(movies);

  return (
    <>
      <Header>
        <MoviesNav />
      </Header>
      <section className='movies'>
        <SearchForm />
        <MoviesCardList movies={movies} />
        <Preloader />
      </section>
      <Footer />
    </>
  );
};

export default Movies;

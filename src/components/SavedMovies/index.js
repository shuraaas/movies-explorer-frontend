import React, { useEffect, useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import SearchForm from '../SearchForm';
import MoviesCardList from '../MoviesCardList';
import MoviesNav from '../MoviesNav';
import mainApi from '../../utils/MainApi';
import './index.css';
// import cardsList from './cards.js';

const SavedMovies = () => {
  const [movies, setMovies] = useState([]);

  // useEffect(() => {
  //   const moviesData = async () => {
  //     const savedMovies = await mainApi.getSavedMovies();
  //     setMovies(savedMovies);
  //   };
  //   moviesData();

  //   // if (movies.length !== 0) console.log('первое монтирование комонента ', movies);
  // }, []);

  // const getSavedMovies = () => {

  // };

  return (
    <>
      <Header>
        <MoviesNav />
      </Header>
      <section className='saved-movies'>
        <SearchForm />
        <MoviesCardList movies={(movies.length !== 0) && movies} />
      </section>
      <Footer />
    </>
  );
};

export default SavedMovies;

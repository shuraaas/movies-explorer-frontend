import React, { useEffect, useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import SearchForm from '../SearchForm';
import MoviesCardList from '../MoviesCardList';
import MoviesNav from '../MoviesNav';
import './index.css';

const SavedMovies = ({ onDelete, savedMovies }) => {
  const [savedMoviesList, setSavedMoviesList] = useState([]);

  useEffect(() => {
    setSavedMoviesList(savedMovies);
  }, [savedMovies])

  const handleSearch = res => setSavedMoviesList(res);

  return (
    <>
      <Header>
        <MoviesNav />
      </Header>
      <section className='saved-movies'>
        <SearchForm onSearch={handleSearch} movies={savedMovies} />
        <MoviesCardList movies={savedMoviesList} savedMovies={savedMovies} onDelete={onDelete} />
        {savedMoviesList.length === 0 && <p>Ничего не найдено</p>}
      </section>
      <Footer />
    </>
  );
};

export default SavedMovies;

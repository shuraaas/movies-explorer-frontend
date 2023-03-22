import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import SearchForm from '../SearchForm';
import MoviesCardList from '../MoviesCardList';
import MoviesNav from '../MoviesNav';
import './index.css';

const SavedMovies = ({ onDelete, savedMovies }) => {

  // TODO: тут поиск сделать по сохраненным фильмам
  const handleSearch = () => {
    console.log('search');
  };

  const getCheckboxState = () => JSON.parse(localStorage.getItem('checkboxState')) || false;

  return (
    <>
      <Header>
        <MoviesNav />
      </Header>
      <section className='saved-movies'>
        <SearchForm onSearch={handleSearch} />
        <MoviesCardList movies={savedMovies} savedMovies={savedMovies} onDelete={onDelete} />
      </section>
      <Footer />
    </>
  );
};

export default SavedMovies;

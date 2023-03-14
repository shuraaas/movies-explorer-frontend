import React, { useEffect, useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import SearchForm from '../SearchForm';
import MoviesCardList from '../MoviesCardList';
import MoviesNav from '../MoviesNav';
import mainApi from '../../utils/MainApi';
import './index.css';

const SavedMovies = ({ onDelete }) => {
  const [movies, setMovies] = useState([]);
  // console.log(movies);
  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    try {
      const savedMovies = await mainApi.getSavedMovies();
      setMovies(savedMovies);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteMovie = async (id) => {
    try {
      await mainApi.deleteMovie(id);
      setMovies(movies => movies.filter(movie => movie._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Header>
        <MoviesNav />
      </Header>
      <section className='saved-movies'>
        <SearchForm />
        {/* <MoviesCardList movies={(movies.length !== 0) && movies} savedMovies={true} /> */}
        <MoviesCardList movies={movies} savedMovies={true} onDelete={handleDeleteMovie} />
      </section>
      <Footer />
    </>
  );
};

export default SavedMovies;

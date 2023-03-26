import React, { useState } from 'react';
import Footer from '../Footer';
import SearchForm from '../SearchForm';
import MoviesCardList from '../MoviesCardList';
import Preloader from '../Preloader';
import Header from '../Header';
import MoviesNav from '../MoviesNav';
import { useResize } from '../../utils/hooks/useResize';
import './index.css';

const Movies = ({ movies, savedMovies, onDelete, onCreate }) => {
  const {
    isScreenS,
    isScreenM,
    isScreenL,
  } = useResize();
  const [moviesList, setMoviesList] = useState(getMovies);
  const [checkboxState, setCheckboxState] = useState(getCheckboxState);
  const [firstSearch, setFirstSearch] = useState(false);
  const [btnShowMore, setBtnShowMore] = useState(false);
  const [resultArr, setResultArr] = useState([]);
  const [next, setNext] = useState(0);
  const [cardsOnPage, setCardsOnPage] = useState(getCountInitialCards);
  const [countCardsToShow, setCountCardsToShow] = useState(getCountCardsToShow);
  const [spin, setSpin] = useState(false);

  function getCountInitialCards() {
    if (isScreenS) return 5;
    if (isScreenM) return 8;
    if (isScreenL) return 12;
  };

  function getCountCardsToShow() {
    if (isScreenS || isScreenM) return 2;
    if (isScreenL) return 3;
  };

  function getMovies () {
    return JSON.parse(localStorage.getItem('movies')) || [];
  };

  function getCheckboxState () {
    return JSON.parse(localStorage.getItem('checkboxState')) || false;
  };

  const handleShowMorePosts = () => {
    const res = moviesList.slice(next, next + countCardsToShow);
    if ((res.length + resultArr.length) === moviesList.length) setBtnShowMore(false);

    setResultArr([...resultArr, ...res]);
    setNext(next + countCardsToShow);
  };

  const getRequest = () => localStorage.getItem('request') || '';

  const renderFirstSlicedCards = (data) => {
    const resultOfSliced = data.slice(0, cardsOnPage);

    if (data.length > cardsOnPage) setBtnShowMore(true);

    setResultArr(resultOfSliced);
    renderCards(resultOfSliced)
    setNext(cardsOnPage);
  };

  const handleSearch = (res, data) => {
    setMoviesList([]);
    setSpin(true);
    localStorage.setItem('movies', JSON.stringify(res));
    localStorage.setItem('request', data.search);
    setTimeout(() => {
      renderFirstSlicedCards(res);
      setMoviesList(res);
      setFirstSearch(true);
      setSpin(false);
    }, 1500);
  };

  const handleCheckbox = (state) => {
    localStorage.setItem('checkboxState', state);
    setCheckboxState(state);
  };

  const renderCards = () => {
    if (resultArr.length === 0) {
      return moviesList;
    } else {
      return resultArr;
    }
  };

  return (
    <>
      <Header>
        <MoviesNav />
      </Header>
      <section className='movies'>
        <SearchForm onSearch={handleSearch} movies={movies} movieRequest={getRequest()} checkboxState={checkboxState} setCheckbox={handleCheckbox} />
        <MoviesCardList
          movies={renderCards()}
          savedMovies={savedMovies}
          onDelete={onDelete}
          onCreate={onCreate}
          />
        <Preloader onClick={handleShowMorePosts} btnShowMore={btnShowMore} spin={spin} />
        {moviesList.length === 0 && firstSearch ? <p>Ничего не найдено</p> : null}
      </section>
      <Footer />
    </>
  );
};

export default Movies;

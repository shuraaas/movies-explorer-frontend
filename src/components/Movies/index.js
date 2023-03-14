import React, { useState, useEffect } from 'react';
import Footer from '../Footer';
import SearchForm from '../SearchForm';
import MoviesCardList from '../MoviesCardList';
import Preloader from '../Preloader';
import Header from '../Header';
import MoviesNav from '../MoviesNav';
import mainApi from '../../utils/MainApi';
// import { useResize } from '../../utils/hooks/useResize';
import './index.css';

// let hiddenCards = [];

const Movies = ({ movies }) => {
  // console.log('render');
  // const {
  //   isScreenS,
  //   isScreenM,
  //   isScreenL,
  // } = useResize();

  const [savedMovies, setSavedMovies] = useState([]);
  // const [cardsToShow, setCardsToShow] = useState(getMovies);

  const [moviesList, setMoviesList] = useState(getMovies);
  const [firstSearch, setFirstSearch] = useState(false);
  const [btnShowMore, setBtnShowMore] = useState(false);
  const [resultArr, setResultArr] = useState([]);
  const [next, setNext] = useState(12);

  const cardsOnPage = 12;

  useEffect(() => {
    getSavedMovies();
    // checkSavedMovies();
    // checkWindowSize();
  }, []);

  // по сколько рендерить карточек на странице в зависимости от разрешения
  // const countCardsToRender = () => {};

  const getSavedMovies = async () => {
    try {
      const savedMovies = await mainApi.getSavedMovies();
      setSavedMovies(savedMovies);
    } catch (err) {
      console.log(err);
    }
  };


  // function checkWindowSize () {
  //   if (isScreenS) {
  //     console.log('по 2');
  //     // console.log('cardsOnPage', cardsOnPage);
  //     setNext(2);
  //     return 5;
  //   }
  //   if (isScreenM) {
  //     console.log('по 2');
  //     // console.log('cardsOnPage', cardsOnPage);
  //     setNext(2);
  //     return 8;
  //   }
  //   if (isScreenL) {
  //     console.log('по 3');
  //     // console.log('cardsOnPage', cardsOnPage);
  //     setNext(3);
  //     return 12;
  //   }
  //   // switch (true) {
  //   //   case isScreenS:
  //   //     setNext(2);
  //   //     break;
  //   //   case isScreenM:
  //   //     setNext(2);
  //   //     break;
  //   //   case isScreenL:
  //   //     setNext(3);
  //   //     break;
  //   //   default:
  //   //     break;
  //   // }
  // };

  // const checkSavedMovies = () => {
    // console.log('savedMovies', savedMovies);
    // console.log('moviesList', moviesList);

    // for (let i = 0; i < moviesList.length; i++) {
    //   for (let i = 0; i < savedMovies.length; i++) {
    //     if (moviesList[i].id === savedMovies[i].movieId) {
    //       moviesList[i].saved = true;
    //     }
    //   }
    // }


    // setMoviesList(() => {
      // return moviesList.map((movie) => {
      //   movie.saved = savedMovies.find(item => item.movieId === movie.id)
        // return savedMovies.forEach(item => {
        //   if (movie.id === item.movieId) {
        //     return movie.saved = true;
        //   } else {
        //     return movie.saved = false;
        //   }
        // })

        // movie.saved = savedMovies.map((savedMovie) => {
        //     console.log(savedMovie);
        //     if (movie.id === savedMovie.movieId) {
        //       return true;
        //     } else {
        //       return false;
        //     }
        //   });
      // })
    // })
  // };

  // const cutCards = (start, end, movies) => {
  //   // console.log('start', start);
  //   // console.log('end', end);
  //   // console.log('moviesList', moviesList);
  //   const slicedCards = movies.slice(start, end);
  //   // console.log('slicedCards',slicedCards);
  //   hiddenCards = [...hiddenCards, ...slicedCards];
  //   // console.log('hiddenCards', hiddenCards);
  //   setCardsToShow(hiddenCards);
  //   // if (moviesList.length === cardsOnPage.length) setBtnShowMore(false);
  //   if (slicedCards.length < 3) setBtnShowMore(false);
  //   // console.log('slicedCards.length', slicedCards.length);
  // };






  // кнопка ЕЩЕ
  const handleShowMorePosts = () => {
    const res = moviesList.slice(next, next + 3);
    console.log("🚀 ~ file: index.js:144 ~ handleShowMorePosts ~ next:", next)
    console.log("🚀 ~ file: index.js:144 ~ handleShowMorePosts ~ res:", res)
    // debugger
    setResultArr([...resultArr, ...res]);
    setNext(next + 3);
    console.log("🚀 ~ file: index.js:150 ~ handleShowMorePosts ~ resultArr:", resultArr)
    // if (res.length < 3) setBtnShowMore(false);
  };

  const getCheckboxState = () => JSON.parse(localStorage.getItem('checkboxState')) || false;
  const getRequest = () => localStorage.getItem('request') || '';

  function getMovies () {
    return JSON.parse(localStorage.getItem('movies')) || [];
  };



  // const renderMovies = (movies) => {

    // // console.log('movies', movies);
    // if (movies.length === 0) {
    //   // console.log(movies.length);
    //   // return console.log('ничего не найдено');
    //   setBtnShowMore(false);
    //   setMoviesList(movies);
    //   return movies;
    // }

    // if (movies.length <= 3) {
    //   // console.log(movies.length);
    //   setBtnShowMore(false);
    //   setMoviesList(movies);
    //   return movies;
    // }

    // console.log(movies.length);
    // console.log('больше трех');
    // setMoviesList(movies);
    // cutCards(0, cardsOnPage, movies);
    // setBtnShowMore(true);
    // return cardsToShow;
  // };

  const test = (data) => {
    if (data.length > cardsOnPage) setBtnShowMore(true);
    // console.log("🚀 ~ file: index.js:235 ~ test ~ cardsOnPage:", cardsOnPage)
    const resultSlice = data.slice(0, cardsOnPage);
    // console.log("🚀 ~ file: index.js:236 ~ test ~ resultSlice:", resultSlice)
    setResultArr(resultSlice);
  };

  const handleSearch = (res) => {

    // TODO: вроде работаает поиск и отрисовка для 1280, надо доделать для меньших разрешений
    setNext(12);

    console.log('res',res);
    // debugger
    test(res)

    // setCardsToShow([]);
    // debugger;
    setMoviesList(res);
    // renderMovies(res);
    setFirstSearch(true);
  };

  const handleDeleteMovie = async (id) => {
    // console.log('movies', id);
    // console.log(moviesList);
    // try {
    //   await mainApi.deleteMovie(id);
    //   setMovies(movies => movies.filter(movie => movie._id !== id));
    // } catch (err) {
    //   console.log(err);
    // }
  };

  return (
    <>
      <Header>
        <MoviesNav />
      </Header>
      <section className='movies'>
        <SearchForm onSearch={handleSearch} movies={movies} checkbox={getCheckboxState()} movieRequest={getRequest()} />
        {/* <MoviesCardList movies={moviesList} /> */}
        {/* <MoviesCardList movies={moviesList} onDelete={handleDeleteMovie} /> */}
        <MoviesCardList movies={resultArr} onDelete={handleDeleteMovie} />
        {btnShowMore && <Preloader onClick={handleShowMorePosts} />}
        {/* <Preloader onClick={handleShowMorePosts} /> */}
        {/* {cardsToShow.length !==0 && <Preloader onClick={handleShowMorePosts} />} */}
        {moviesList.length === 0 && firstSearch ? <p>Ничего не найдено</p> : null}
      </section>
      <Footer />
    </>
  );
};

export default Movies;

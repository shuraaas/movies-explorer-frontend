import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate, Navigate, useLocation } from 'react-router-dom';
import * as auth from '../../utils/auth.js';
import Main from '../Main';
import Movies from '../Movies';
import SavedMovies from '../SavedMovies';
import Profile from '../Profile';
import Register from '../Register';
import Login from '../Login';
import PageNotFound from '../PageNotFound';
import ProtectedRoute from '../ProtectedRoute';
import moviesApi from '../../utils/MoviesApi.js';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [initialMoviesList, setinitialMoviesList] = useState(false);

  let navigate = useNavigate();
  // const history = useHistory();
  const location = useLocation();

  // useEffect(() => {
  //   const jwt = localStorage.getItem('jwt');
  //   if (jwt) tokenCheck(jwt);

  //   if (jwt) {
  //     const moviesData = async () => {
  //       const movies = await moviesApi.getMovies();
  //       setinitialMoviesList(movies);
  //     };
  //     moviesData();
  //     // const promiseUserInfo = api.getUserInfo();
  //     // const promiseInitialCards = api.getInitialCards();

  //     // Promise.all([promiseUserInfo, promiseInitialCards])
  //     //   .then(([userData, cards]) => {
  //     //     setCurrentUser(userData);
  //     //     setCards(cards.reverse());
  //     //   })
  //     //   .catch(err => console.error(err));
  //   }
  //   // Promise.all([promiseUserInfo, promiseInitialCards])
  //   //   .then(([userData, cards]) => {
  //   //     setCurrentUser(userData);
  //   //     setCards(cards);
  //   //   })
  //   //   .catch(err => console.error(err));

  //   // tokenCheck();
  // }, []);

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');

    // console.log(loggedIn);
    // if (jwt) {
    //   const moviesData = async () => {
    //     const movies = await moviesApi.getMovies();
    //     setinitialMoviesList(movies);
    //   };
    //   moviesData();
    // }
    if (jwt) tokenCheck(jwt);
  }, []);

  const handleRegister = async (name, email, password) => {
    try {
      await auth.register(name, email, password);
      navigate('/signin', {replace: true});
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogin = async (email, password) => {
    try {
      const data = await auth.login(email, password);
      if (!data.token) throw new Error('Missing token');
      localStorage.setItem('jwt', data.token);
      setLoggedIn(true);
      navigate('/movies', {replace: true});
    } catch (err) {
      console.log(err);
    }
  };

  const tokenCheck = async (token) => {
    try {
      const user = await auth.getContent(token);
      setUser(user);
      setLoggedIn(true);
      // TODO: вот из-за этого ниче не работало
      navigate(location.pathname, {replace: true});
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='page'>
      <Routes>
        <Route
          path='/movies'
          element={<ProtectedRoute element={Movies} loggedIn={loggedIn}/>}
        />
        <Route
          path='/saved-movies'
          element={<ProtectedRoute element={SavedMovies} loggedIn={loggedIn}/>}
        />
        <Route
          path='/profile'
          element={<ProtectedRoute element={Profile} loggedIn={loggedIn}/>}
        />
        <Route
          path='*'
          element={<ProtectedRoute element={PageNotFound} loggedIn={loggedIn}/>}
        />
        <Route path='/' element={<Main loggedIn={loggedIn} />}/>
        <Route path='/signin' element={<Login onLogin={handleLogin}/>}/>
        <Route path='/signup' element={<Register onRegister={handleRegister}/>}/>
      </Routes>
    </div>
  );
};

export default App;

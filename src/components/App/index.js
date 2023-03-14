import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
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
import mainApi from '../../utils/MainApi.js';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [movies, setMovies] = useState(false);
  const [currentCard, setCurrentCard] = useState('');
  const [result, setResult] = useState({});

  let navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');

    if (jwt) {
      tokenCheck(jwt);
      getMoviesData();
    };
  }, [loggedIn, result]);

  const getMoviesData = async () => {
    try {
      const movies = await moviesApi.getMovies();
      setMovies(movies);
    } catch (err) {
      console.log(err);
    }
  };

  const handleRegister = async ({ name, email, password }) => {
    try {
      await auth.register(name, email, password);
      navigate('/signin', {replace: true});
    } catch (err) {
      console.log(err);
      setResult({
        message: 'Что-то пошло не так...',
      });
    }
  };

  const handleLogin = async ({ email, password }) => {
    try {
      const data = await auth.login(email, password);
      if (!data.token) throw new Error('Missing token');
      localStorage.setItem('jwt', data.token);
      setLoggedIn(true);
      // setUser({ email, password });
      navigate('/movies', {replace: true});
    } catch (err) {
      console.log(err);
      setResult({
        message: 'Неправильные почта или пароль',
      });
    }
  };

  const handleUpdateUser = async (userInfo) => {
    try {
      await mainApi.setUserInfo(userInfo);
      setResult({
        message: 'Данные обновлены',
      });
    } catch (err) {
      console.log(err);
      setResult({
        message: 'Что-то пошло не так...',
      });
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    setLoggedIn(false);
    setUser({});
    navigate('/', {replace: true});
  };

  const handleDeleteMovieClick = (id) => {
    setCurrentCard(id);
  };

  const handleDeleteMovie = async () => {
    // console.log(id);
    // log
    // try {
    //   mainApi.deleteMovie(id);
    // } catch (err) {
    //   console.log(err);
    // }
  };

  const tokenCheck = async (token) => {
    try {
      const user = await auth.getContent(token);
      setUser(user);
      setLoggedIn(true);
      // TODO: вот из-за этого ниче не работало
      navigate(location.pathname, { replace: true });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <CurrentUserContext.Provider value={user}>
      <div className='page'>
        <Routes>
          <Route
            path='/movies'
            element={<ProtectedRoute element={Movies} movies={movies || []} loggedIn={loggedIn}/>}
          />
          <Route
            path='/saved-movies'
            element={<ProtectedRoute element={SavedMovies} loggedIn={loggedIn} onDelete={handleDeleteMovieClick} />}
          />
          <Route
            path='/profile'
            element={<ProtectedRoute element={Profile} onLogout={handleLogout} onUpdate={handleUpdateUser} resultUpdate={result} loggedIn={loggedIn}/>}
          />
          <Route
            path='*'
            element={<ProtectedRoute element={PageNotFound} loggedIn={loggedIn}/>}
          />
          <Route path='/' element={<Main loggedIn={loggedIn} />}/>
          <Route path='/signin' element={<Login onLogin={handleLogin} resultLogin={result} />}/>
          <Route path='/signup' element={<Register onRegister={handleRegister} resultRegister={result} />}/>
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
};

export default App;

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from '../Main';
import Movies from '../Movies';
import SavedMovies from '../SavedMovies';
import Profile from '../Profile';
import Register from '../Register';
import Login from '../Login';
import PageNotFound from '../PageNotFound';

const App = () => {
  return (
    <div className='page'>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/saved-movies' element={<SavedMovies />} />
        <Route path='/profile' element={<Profile />} />

        <Route path='/signin' element={<Login />} />
        <Route path='/signup' element={<Register />} />

        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;

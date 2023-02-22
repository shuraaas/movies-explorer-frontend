import React from 'react';
import { Route, Routes, Redirect, useHistory } from 'react-router-dom';
import Main from '../Main';
import Movies from '../Movies';
import SavedMovies from '../SavedMovies';
import Profile from '../Profile';
import Register from '../Register';
import Login from '../Login';
import PageNotFound from '../PageNotFound';

const App = () => {
  return (

    // TODO: добавить эффекты кнопок
    // TODO: создать компонент для вывода ошибок с api

    // FIXME: Адаптивность под указанные в макете разрешения и отсутствие поломок в промежуточных значениях.
    // FIXME: Сделана микроанимация кнопок, ссылок и инпутов.
    // FIXME: Все изображения оптимизированы — в том числе и .svg.

    <div className='page'>
      {/* <div className='page__container'> */}

        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/saved-movies' element={<SavedMovies />} />
          <Route path='/profile' element={<Profile />} />

          <Route path='/signin' element={<Login />} />
          <Route path='/signup' element={<Register />} />

          <Route path='*' element={<PageNotFound />} />
        </Routes>

        {/* <Main /> */}
        {/* <Movies /> */}
        {/* <SavedMovies /> */}
        {/* <Profile /> */}
        {/* <Register /> */}
        {/* <Login /> */}
        {/* <PageNotFound /> */}
      {/* </div> */}
    </div>
  );
};

export default App;

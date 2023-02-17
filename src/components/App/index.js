import React from 'react';
import Main from '../Main';
import Movies from '../Movies';
import SavedMovies from '../SavedMovies';
import Profile from '../Profile';
import Register from '../Register';
import Login from '../Login';
import PageNotFound from '../PageNotFound';

const App = () => {
  return (
    <div className="page">
      <div className="page__container">
        {/* <Main /> */}
        {/* <Movies /> */}
        {/* <SavedMovies /> */}
        {/* <Profile /> */}
        {/* <Register /> */}
        {/* <Login /> */}
        <PageNotFound />
      </div>
    </div>
  );
};

export default App;

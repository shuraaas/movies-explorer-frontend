import React from 'react';
import Main from '../Main';
import Movies from '../Movies';
import SavedMovies from '../SavedMovies';
import Profile from '../Profile';
import Register from '../Register';

const App = () => {
  return (
    <div className="page">
      <div className="page__container">
        {/* <Main /> */}
        {/* <Movies /> */}
        {/* <SavedMovies /> */}
        {/* <Profile /> */}
        <Register />
      </div>
    </div>
  );
};

export default App;

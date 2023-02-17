import React from 'react';
import Main from '../Main';
import Movies from '../Movies';
import SavedMovies from '../SavedMovies';
import Profile from '../Profile';

const App = () => {
  return (
    <div className="page">
      <div className="page__container">
        {/* <Main /> */}
        {/* <Movies /> */}
        {/* <SavedMovies /> */}
        <Profile />
      </div>
    </div>
  );
};

export default App;

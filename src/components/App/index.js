import React from 'react';
import Main from '../Main';
import Movies from '../Movies';
import SavedMovies from '../SavedMovies';

const App = () => {
  return (
    <div className="page">
      <div className="page__container">
        {/* <Main /> */}
        {/* <Movies /> */}
        <SavedMovies />
      </div>
    </div>
  );
};

export default App;

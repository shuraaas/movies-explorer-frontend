import React from 'react';
import Promo from '../Promo';
import AboutProject from '../AboutProject';
import Techs from '../Techs';
import AboutMe from '../AboutMe';
import Portfolio from '../Portfolio';
import Footer from '../Footer';
import Header from '../Header';
import Navigation from '../Navigation';
import MoviesNav from '../MoviesNav';

const Main = () => {
  return (
    <>
      <Header place='main'>
        <Navigation />
        {/* <MoviesNav /> */}
      </Header>
      <main className='content'>
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>
      <Footer />
    </>
  );
};

export default Main;
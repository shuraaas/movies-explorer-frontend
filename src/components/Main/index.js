import React from 'react';
import Promo from '../Promo';
import AboutProject from '../AboutProject';
import Techs from '../Techs';
import AboutMe from '../AboutMe';
import Portfolio from '../Portfolio';
import Footer from '../Footer';
import Header from '../Header';
import Navigation from '../Navigation';

const Main = () => {
  return (
    <>
      <Header place='main'>
        <Navigation />
      </Header>
      <main>
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
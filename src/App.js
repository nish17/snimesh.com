import React, { useEffect } from 'react';
import { render } from 'react-dom';
import ReactGA from 'react-ga';

import Home from './Home';
import Navbar from './Navbar';
import AboutMe from './AboutMe';
import Awards from './Awards';
import Projects from './Projects';
import Footer from './Footer';
const App = () => {
  useEffect(() => {
    ReactGA.initialize('UA-170963982-1');
    ReactGA.ga('set', 'page', window.location.pathname + window.location.search + window.location.hash);
    ReactGA.ga('send', 'pageview');
  }, []);

  return (
    <div>
      <div className='top-line'></div>
      <div className='left-line'></div>
      <div className='right-line'></div>
      <div className='bottom-line'></div>
      <div className='main-container'>
        <section id='home'>
          <Navbar />
          <Home />
        </section>

        <section id='about'>
          <AboutMe />
        </section>

        <section id='awards'>
          <Awards />
        </section>

        <section id='projects'>
          <Projects />
        </section>
      </div>
      <section id='footer'>
        <Footer />
      </section>
    </div>
  );
};

render(<App />, document.getElementById('root'));

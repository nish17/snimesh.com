import React, { useEffect } from 'react';
import { render } from 'react-dom';
import ReactGA from 'react-ga';
import * as ga from './analytics';

import Home from './Home';
import Navbar from './Navbar';
import AboutMe from './AboutMe';
import Awards from './Awards';
import Projects from './Projects';
import Footer from './Footer';
import { ThemeProvider } from './ThemeContext';

const App = () => {
  ga.initializeGoogleAnalytics();
  useEffect(() => {
    ga.logPageView();
  }, []);

  return (
    <ThemeProvider>
      <div>
        <div className='page-border'></div>
        <Navbar />
        <div className='main-container'>
          <section id='home'>
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
    </ThemeProvider>
  );
};

render(<App />, document.getElementById('root'));

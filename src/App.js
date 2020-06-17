import React from 'react';
import { render } from 'react-dom';

import Home from './Home';
import Navbar from './Navbar';
import AboutMe from './AboutMe';
import Awards from './Awards';
import Projects from './Projects';
import TechStack from './TechStack';
const App = () => {
  return (
    <div>
      <div className='top-line'></div>
      <div className='left-line'></div>
      <div className='right-line'></div>
      <div className='bottom-line'></div>
      <div className='main-container' >
      <section id='home'>
        <Navbar />
        {/* <Home /> */}
      </section>

      <section id='about'>
        <AboutMe />
      </section>

      {/* <section id='tech-stack'>
        <TechStack />
      </section> */}

      <section id='awards'>
        <Awards />
      </section>

      <section id='projects'>
        <Projects />
      </section>
    </div>
    </div>
  );
};

render(<App />, document.getElementById('root'));

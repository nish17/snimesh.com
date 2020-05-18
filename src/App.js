import React from 'react';
import { render } from 'react-dom';

import Home from './Home';
import Navbar from './Navbar';
import AboutMe from './AboutMe';

const App = () => {
  return (

     <div>
       <div className="top-line"></div>
       <div className="left-line" ></div> 
       <div className="right-line"></div>
       <div className="bottom-line"></div>
      <div >
        <Navbar />
        <Home />
      <AboutMe />
      </div>
    </div>
  );
};

render(<App />, document.getElementById('root'));

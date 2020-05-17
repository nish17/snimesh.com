import React from 'react';
import { render } from 'react-dom';

import Home from './Home';
import Navbar from './Navbar';
const App = () => {
  return (
    <div className='page-border'>
      <Navbar />
      <Home />
    </div>
  );
};

render(<App />, document.getElementById('root'));

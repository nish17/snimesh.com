import React from 'react';
import { render } from 'react-dom';

import Home from './Home';
const App = () => {
  return (
    <div className='page-border'>
      <Home />
    </div>
  );
};

render(<App />, document.getElementById('root'));

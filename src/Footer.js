import React from 'react';
import * as ga from './analytics';

const Footer = () => {
  function getYear() {
    return new Date().getFullYear();
  }

  return (
    <div className='footer'>
      <h5 className='love'>
        Made with <span className='heart'>♥</span> in India
      </h5>
      <h5 className='copyright'>
        © {getYear()}{' '}
        <a
          href='https://twitter.com/NimeshS17'
          onClick={() => ga.logCustomEvent('footer', 'Twitter')}
        >
          @NimeshS17
        </a>
      </h5>
    </div>
  );
};

export default Footer;

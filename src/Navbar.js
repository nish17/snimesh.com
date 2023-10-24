import React from 'react';

const NavBar = () => {
  return (
    <div className='nav'>
      <input type='checkbox' id='nav-check' />
      <div className='nav-btn'>
        <label htmlFor='nav-check'>
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
      <div className='nav-collapse'>
        <div className='nav-links'>
        <ul >
          <li><a className='active' href='#home'>Home</a></li>
          <li><a className='' href='#about'>Resume</a></li>
          <li><a className='' href='#awards'>Awards</a></li>
          <li><a className='' href='#projects'>Projects</a></li>
          <li><a className='' onClick={() => ga.logCustomEvent('mailMe', 'Mail me in navbar')} href='mailto:nimesh3536@gmail.com'>Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

/* 
    <header id='header'>
      <nav id="nav-bar">
          <ul>
            <li className='nav-link'>
              <a href='mailto:nimesh3536@gmail.com'>Contact</a>
            </li>
            <li className='nav-link'>
              <a href='#projects'>Projects</a>
            </li>
            <li className='nav-link'>
              <a href='#awards'>Awards</a>
            </li>
            <li className='nav-link'>
              <a href='#about'>Resume</a>
            </li>
            <li className='nav-link'>
              <a href='#home'>Home</a>
            </li>
          </ul>
        </nav>
    </header>
*/

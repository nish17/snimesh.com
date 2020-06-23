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

      <div className='nav-links'>
        <a href='#home' data-toggle='#nav-check' data-target='.nav-collapse'>
          Home
        </a>
        <a href='#about' data-toggle='#nav-check' data-target='.nav-collapse'>
          Resume
        </a>
        <a href='#awards' data-toggle='#nav-check' data-target='.nav-collapse'>
          Awards
        </a>
        <a href='#projects' data-toggle='#nav-check' data-target='.nav-collapse'>
          Projects
        </a>
        <a
          href='mailto:nimesh3536@gmail.com'
          data-toggle='#nav-check'
          data-target='.nav-collapse'
        >
          Contact
        </a>
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

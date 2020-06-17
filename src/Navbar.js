import React from 'react';

const NavBar = () => {
  return (
    <header id='header'>
      <nav id="nav-bar">
          <ul>
            <li className='nav-link'>
              <a href='mailto:nimesh3536@gmail.com'>Contact</a>
            </li>
            <li className='nav-link'>
              <a href='#awards'>Awards</a>
            </li>
            <li className='nav-link'>
              <a href='#about'>Resume</a>
            </li>
          </ul>
        </nav>
    </header>
  );
};

export default NavBar;


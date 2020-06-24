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
      <div className='nav-collapse navbar-collapse collapse navbar-collapse collapse hide'>
        <div className='nav-links'>
        <ul >
          <li><a data-toggle="collapse" data-target="#collapseDiv" className='' href='#home'>Home <span class="sr-only">(current)</span> </a></li>
          <li><a data-toggle="collapse" data-target="#collapseDiv" className='' href='#about'>Resume</a></li>
          <li><a data-toggle="collapse" data-target="#collapseDiv" className='' href='#awards'>Awards</a></li>
          <li><a data-toggle="collapse" data-target="#collapseDiv" className='' href='#projects'>Projects</a></li>
          <li><a data-toggle="collapse" data-target="#collapseDiv" className='' href='mailto:nimesh3536@gmail.com'>Contact</a></li>
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

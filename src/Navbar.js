import React from 'react';

const NavBar = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -110; // Adjusted for navbar (50px) + border (30px) + buffer (30px)
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

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
          <ul>
            <li><a onClick={() => scrollToSection('home')}>Home</a></li>
            <li><a onClick={() => scrollToSection('about')}>Resume</a></li>
            <li><a onClick={() => scrollToSection('awards')}>Awards</a></li>
            <li><a onClick={() => scrollToSection('projects')}>Projects</a></li>
            <li><a href='mailto:nimesh3536@gmail.com'>Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
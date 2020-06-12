import React from 'react';
import Nav from 'react-bootstrap/Nav';
const NavBar = () => {
  return (
    <header>
      <div className='nav'>
        <nav>
           <ul> 
          <span>
            <a href='mailto:nimesh3536@gmail.com'>Contact</a>
          </span>
          <span>
            <a href='#awards'>Portfolio</a>
          </span>
          <span>
            <a href='#about'>Resume</a>
          </span>
           </ul>
        </nav>
      </div>
    </header>
  );
};


export default NavBar;


{/* <div>

    <Nav className="justify-content-end " activeKey="/home">
    <Nav.Item>
      <Nav.Link href="#">Resume </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href='#'>Portfolio</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href='mailto:nimesh3536@gmail.com'>Contact</Nav.Link>
    </Nav.Item>
  </Nav>
  </div> */}
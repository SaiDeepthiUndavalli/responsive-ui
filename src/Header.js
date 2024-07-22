// src/Header.js
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
       
      <div className="container d-flex flex-row justify-content-left">
        <h1 className='head'>IndigoLearn</h1>
        <nav className="nav">
          <ul className="nav-list d-flex flex-row">
            <li className="nav-item"><a>Buy Courses</a></li>
            <li className="nav-item"><a>Programs</a></li>
            <li className="nav-item"><a>Free Resources</a></li>
          </ul>
        </nav>
        <div className='head-button'>
        <button className='button'>LogIn/Signup</button>
      </div>
      </div>
     
    </header>
  );
}

export default Header;

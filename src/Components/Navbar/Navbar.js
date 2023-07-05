import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = ({ style }) => {


  return (
    <>
      <nav className="navbar" style={style} >
        <div className='navbar__wrapper'>
          <div className='navbar__left'>
            <ul className='navbar__list'>
              <li className='navbar__item'><Link to="/portfolio">Index</Link></li>
              <li className='navbar__item'><Link to="/about">About</Link></li>
            </ul>
          </div>
          <div className="navbar__logotypeBox">
            <span className='navbar__logotype'>ag.</span>
          </div>
          <div className='navbar__right'>
            <ul className='navbar__list'>
              <li className='navbar__item'><Link to="/work">Work</Link></li>
              <li className='navbar__item'><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
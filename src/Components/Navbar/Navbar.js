import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = ({ style }) => {

  return (
    <nav className="navbar" style={style}>
      <div className="navbar__wrapper">
        <div className="navbar__menu">
          <div className="navbar__shrink">
            <div className="navbar__left">
              <div className="navbar__logo">
                <Link to="/">ag</Link>
              </div>
            </div>
            <div className="navbar__links">
              <Link to="/about">About</Link>
              <Link to="/work">Work</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>
          <div className="navbar__expand">
            <span className="divider"></span>
            <div className="expand row-1">
              <p>Ana Gonçalves</p>
              <span>Portugal</span>
            </div>
            <div className="expand row-2">
              <p>junior front-end developer</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
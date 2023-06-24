import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css";


const Navbar = () => {
  return (
    <nav class="navbar">
      <div class="navbar__wrapper">
        <div class="navbar__menu">
          <div class="navbar__shrink">
            <div class="navbar__left">
              *
              <div class="navbar__logo">
                <Link to="/">ag</Link></div>
            </div>
            <div class="navbar__links">
              <Link to="/about">About</Link>
              <Link to="/work">Work</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>
          <div class="navbar__expand">
            <span class="divider"></span>
            <div class="expand row-1">
              <p>Ana Gonçalves</p>
              <span>Portugal</span>
            </div>
            <div class="expand row-2">
              <p>junior front-end developer
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
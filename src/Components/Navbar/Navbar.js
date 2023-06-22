import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css";


const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link to="/home" className='navbar__logo'>ag</Link>
      <ul className='navbar__list'>
        <li className='navbar__item'><Link to="/work" className='navbar__link'>Work</Link></li>
        <li className='navbar__item'><Link to="/about" className='navbar__link'>About</Link></li>
        <li className='navbar__item'><Link to="/contact" className='navbar__link'>Contact</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
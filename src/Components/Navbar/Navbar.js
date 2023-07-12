import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = ({ style }) => {
  const navbarRef = useRef(null);

  useEffect(() => {
    const openNavbar = document.querySelector("#navbar__button");
    const closeNavbar = document.querySelector("#navbar__closeButton");
    const navbar = navbarRef.current;
  
    const openNav = () => {
      if (navbar) {
        navbar.classList.add("visible");
      }
    };
  
    const closeNav = () => {
      if (navbar) {
        navbar.classList.remove("visible");
      }
    };
  
    if (openNavbar && closeNavbar) {
      openNavbar.addEventListener("click", openNav);
      closeNavbar.addEventListener("click", closeNav);
  
      return () => {
        openNavbar.removeEventListener("click", openNav);
        closeNavbar.removeEventListener("click", closeNav);
      };
    }
  }, []);

  return (
    <>
      <nav className="navbar" style={style}>
        <div className='navbar__wrapper' ref={navbarRef}>
          <button className="navbar__closeButton" id="navbar__closeButton">
            <AiOutlineClose />
          </button>
          <div className='navbar__left'>
            <ul className='navbar__list'>
              <li className='navbar__item'><Link className="navbar__link" to="/portfolio">Index</Link></li>
              <li className='navbar__item'><Link className="navbar__link" to="/about">About</Link></li>
            </ul>
          </div>
          <div className="navbar__logotypeBox">
            <span className='navbar__logotype'>ag.</span>
          </div>
          <div className='navbar__right'>
            <ul className='navbar__list'>
              <li className='navbar__item'><Link className="navbar__link" to="/work">Work</Link></li>
              <li className='navbar__item'><Link className="navbar__link" to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
      </nav>
      <button id="navbar__button" className="navbar__button navbar__openButton">
        <GiHamburgerMenu />
      </button>
    </>
  );
};

export default Navbar;
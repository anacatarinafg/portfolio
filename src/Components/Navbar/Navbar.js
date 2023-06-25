import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'; 
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = ({ style }) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger); 

    ScrollTrigger.create({
      animation: gsap.from(".navbar__logotype", {
        y: "50vh",
        scale: 6,
        yPercent: -50,
      }),
      scrub: true,
      trigger: ".content",
      start: "top bottom",
      endTrigger: ".content",
      end: "top center",
    });
  }, []);
  return (

    <>
      <nav className="navbar" style={style}>
        <div className='navbar__wrapper'>
          <div className='navbar__left'>
            <ul className='navbar__list'>
              <li className='navbar__item'><Link to="/">Index</Link></li>
              <li className='navbar__item'><Link to="/about">About</Link></li>
            </ul>
          </div>
          <div className='navbar__right'>
            <ul className='navbar__list'>
              <li className='navbar__item'><Link to="/work">Work</Link></li>
              <li className='navbar__item'><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
      </nav>
      <div className='navbar__logotypeBox'>
        <span className='navbar__logotype'>ag.</span>
      </div>
      <div className='container'></div>
      <div className='content'>
        <img src='https://images.unsplash.com/photo-1682687980961-78fa83781450?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80' alt='me'></img>
      </div>
    </>

  );
};

export default Navbar;
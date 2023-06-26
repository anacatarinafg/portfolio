import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './navbar.css';

const Navbar = ({ style }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    if (!isHome) {
      gsap.registerPlugin(ScrollTrigger);

      ScrollTrigger.create({
        animation: gsap.from('.navbar__logotype', {
          y: '0vh',
          scale: 6,
          yPercent: 0,
        }),
        toggleClass: {
          targets: '.navbar__logotype',
          className: 'navbar__logotype--shrink',
        },
        scrub: true,
        trigger: '.content',
        start: 'top center',
        endTrigger: '.content',
        end: 'top top',
      });
    }
  }, [isHome]);

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
      <div className={`navbar__logotypeBox ${isHome ? 'home' : ''}`}>
        <span className='navbar__logotype'>ag.</span>
      </div>
    </>
  );
};

export default Navbar;
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import transition from '../../transition';
import './home.css';

const Home = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      animation: gsap.from('.navbar__logotype', {
        y: '50vh',
        scale: 6,
        yPercent: -50,
      }),
      toggleClass: {
        targets: '.navbar__logotype',
        className: 'navbar__logotype--shrink',
      },
      scrub: true,
      trigger: '.content',
      start: 'top bottom',
      endTrigger: '.content',
      end: 'top center',
    });
  }, []);
  return (
    <div className='home'>
      <div className='container'></div>
      <div className='content'>
        <img src='https://images.unsplash.com/photo-1682687980961-78fa83781450?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80' alt='me'></img>
      </div>
    </div>

  )
}

export default transition(Home);
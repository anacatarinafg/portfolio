import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './work.css';
import transition from '../../transition';

const Work = () => {
  const scrollWrapRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const scrollWrap = scrollWrapRef.current;
    let offset = 0;

    // Function to perform smooth scrolling effect
    const smoothScroll = () => {
      offset += (window.pageYOffset - offset) * 0.04;

      const scroll = `translateY(-${offset}px) translateZ(0)`;
      scrollWrap.style.transform = scroll;

      requestAnimationFrame(smoothScroll);
    };

    smoothScroll();

    const content = contentRef.current;
    let currentPos = window.pageYOffset;

    // Function to perform distortion effect during scrolling
    const callDistort = () => {
      const newPos = window.pageYOffset;
      const diff = newPos - currentPos;
      const speed = diff * 0.35;

      content.style.transform = `skewY(${speed}deg)`;
      currentPos = newPos;
      requestAnimationFrame(callDistort);
    };

    callDistort();

    // Clean up the animation frames on component unmount
    return () => {
      cancelAnimationFrame(smoothScroll);
      cancelAnimationFrame(callDistort);
    };
  }, []);

  useEffect(() => {
    const scrollWrap = scrollWrapRef.current;
    const height = scrollWrap.getBoundingClientRect().height - 1;
    document.body.style.height = Math.floor(height) + 'px';
  }, []);

  const PROJECTS = [
    {
      id: 1,
      name: "Real-time weather",
      img: "https://i.pinimg.com/564x/e7/0f/0a/e70f0a7055fc89b1a97669fc988b26aa.jpg",
      sourceCode: "https://github.com/anacatarinafg/weather-app",
      webpage: "https://anacatarinafg.github.io/weather-app/#/current-location",
    },
    {
      id: 2,
      name: 'E-commerce "ecologic memories"',
      img: "https://i.pinimg.com/564x/e7/0f/0a/e70f0a7055fc89b1a97669fc988b26aa.jpg",
      sourceCode: "https://github.com/anacatarinafg/e-commerce_ecologic-memories",
      webpage: "https://anacatarinafg.github.io/E-commerce_Ecologic_Memories/",
    },
    {
      id: 3,
      name: "Tesla clone",
      img: "https://i.pinimg.com/564x/e7/0f/0a/e70f0a7055fc89b1a97669fc988b26aa.jpg",
      sourceCode: "https://github.com/anacatarinafg/tesla-frontpage-clone/tree/gh-pages",
      webpage: "https://anacatarinafg.github.io/tesla-frontpage-clone/#solarPanels",
    },
    {
      id: 4,
      name: "NOS Alive clone",
      img: "https://i.pinimg.com/564x/e7/0f/0a/e70f0a7055fc89b1a97669fc988b26aa.jpg",
      sourceCode: "https://github.com/anacatarinafg/nos-alive-clone",
      webpage: "https://anacatarinafg.github.io/nos-alive-clone/",
    },
    {
      id: 5,
      name: "Solar system",
      img: "https://i.pinimg.com/564x/e7/0f/0a/e70f0a7055fc89b1a97669fc988b26aa.jpg",
      sourceCode: "https://github.com/anacatarinafg/solar-system",
      webpage: "https://anacatarinafg.github.io/solar-system/index.html",
    },
    {
      id: 6,
      name: "Todo",
      img: "https://i.pinimg.com/564x/e7/0f/0a/e70f0a7055fc89b1a97669fc988b26aa.jpg",
      sourceCode: "https://github.com/anacatarinafg/Todo",
      webpage: "https://anacatarinafg.github.io/Todo/",

    },
    {
      id: 7,
      name: "Calculator",
      img: "https://i.pinimg.com/564x/e7/0f/0a/e70f0a7055fc89b1a97669fc988b26aa.jpg",
      sourceCode: "https://github.com/anacatarinafg/simple-calculator",
      webpage: "https://anacatarinafg.github.io/simple-calculator/",

    },
    {
      id: 8,
      name: "Clock",
      img: "https://i.pinimg.com/564x/e7/0f/0a/e70f0a7055fc89b1a97669fc988b26aa.jpg",
      sourceCode: "https://github.com/anacatarinafg/clock",
      webpage: "https://anacatarinafg.github.io/clock/",

    },
    {
      id: 9,
      name: "Dictionary",
      img: "https://i.pinimg.com/564x/e7/0f/0a/e70f0a7055fc89b1a97669fc988b26aa.jpg",
      sourceCode: "https://github.com/anacatarinafg/dictionary",
      webpage: "https://anacatarinafg.github.io/dictionary/",

    },
    {
      id: 10,
      name: "Github search profile",
      img: "https://i.pinimg.com/564x/e7/0f/0a/e70f0a7055fc89b1a97669fc988b26aa.jpg",
      sourceCode: "https://github.com/anacatarinafg/github-profile",
      webpage: "https://anacatarinafg.github.io/github-profile/",

    },
    {
      id: 10,
      name: "Gradient generator",
      img: "https://i.pinimg.com/564x/e7/0f/0a/e70f0a7055fc89b1a97669fc988b26aa.jpg",
      sourceCode: "https://github.com/anacatarinafg/gradient-generator",
      webpage: "https://anacatarinafg.github.io/gradient-generator/",

    },
  ];

  return (
    <>
      <div className="smooth-scroll-wrapper" ref={scrollWrapRef}>
        <div className="project__box" ref={contentRef}>
          <section className='project__wrapper'>
            {PROJECTS.map((projects, index) => (
              <div key={index} className='project'>
                <h1 className='project__title'>// {projects.name} </h1>
                <img src={projects.img} alt={projects.name} className='project__image' />
              </div>
            ))}
          </section>
        </div>
      </div>
    </>
  );
};

export default transition(Work);
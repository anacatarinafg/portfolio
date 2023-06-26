import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import TagCloud from 'TagCloud';
import './work.css';
import transition from '../../transition';

const Work = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      animation: gsap.from('.infinite__scroll', {
        start: 1,
        end: 'max',
      }),
      onLeaveBack: self => self.scroll(ScrollTrigger.maxScroll('.projects__wrapper') - 2),
      onLeave: self => self.scroll(2),
    }).scroll(2);
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

  useEffect(() => {
    return () => {
      const container = ".tagcloud";
      const texts = [
        "HTML", "CSS", "SASS", "BOOTSTRAP", "TAILWIND", "JAVASCRIPT", "TYPESCRIPT", "REACT", "ANGULAR", "NEXTJS", "GSAP", "JQUERY", "FIGMA", "GIT"
      ];

      const options = {
        radius: 300,
        maxSpeed: "normal",
        initSpeed: "normal",
        keep: true,
      }
      TagCloud(container, texts, options);
    }
  }, []);

  return (
    <>
      <div class="tagcloud__box">
        <span class="tagcloud"></span>
      </div>

      <div className='infinite__scroll'>
        <div className='projects__wrapper'>
          {PROJECTS.map((project, index) => {
            return (
              <div className='project' key={index}>
                <img src={project.img} alt='' />
                <h2>{project.name}</h2>
                <p>See if it's a cool design to put a paragraph here</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default transition(Work);
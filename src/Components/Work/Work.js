import React, { useState } from 'react';
import './work.css';
import transition from '../../transition';
import Project from './Project/Project';
import Modal from './Modal/Modal';

const Work = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });

  const projects = [
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
      img: "https://i.pinimg.com/564x/4a/ae/54/4aae5468b7280e1c6643f9568e18131e.jpg",
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
      img: "https://i.pinimg.com/564x/4a/ae/54/4aae5468b7280e1c6643f9568e18131e.jpg",
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
      img: "https://i.pinimg.com/564x/4a/ae/54/4aae5468b7280e1c6643f9568e18131e.jpg",
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
      <main className='projects__main'>
        <div className='projects__wrapper'>
          {projects.map((project, index) => (
            <Project key={index} index={index} title={project.name} setModal={setModal} />
          ))}
        </div>
        <Modal modal={modal} projects={projects} index={modal.index} />
      </main>


    </>
  );
};

export default transition(Work);
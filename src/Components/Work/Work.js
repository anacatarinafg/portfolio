import React, { useState } from 'react';
import Project from './Project/Project';
import Modal from './Modal/Modal';
import './work.css';
import transition from '../../transition';


const Work = () => {
  const [modal, setModal] = useState({ active: false, index: 0 })
  const projects = [
    {
      id: 1,
      name: "Real-time weather",
      img: "assets/weather-app.png",
      didWhat: "Design & Development",
      sourceCode: "https://github.com/anacatarinafg/weather-app",
      webpage: "https://anacatarinafg.github.io/weather-app/#/current-location",
    },
    {
      id: 2,
      name: 'E-commerce "ecologic memories"',
      img: "assets/ecologic-memories.png",
      didWhat: "Design & Development",
      sourceCode: "https://github.com/anacatarinafg/e-commerce_ecologic-memories",
      webpage: "https://anacatarinafg.github.io/E-commerce_Ecologic_Memories/",
    },
    {
      id: 3,
      name: "Tesla clone",
      img: "assets/tesla-project.png",
      didWhat: "Development",
      sourceCode: "https://github.com/anacatarinafg/tesla-frontpage-clone/tree/gh-pages",
      webpage: "https://anacatarinafg.github.io/tesla-frontpage-clone/#solarPanels",
    },
    {
      id: 4,
      name: "NOS Alive clone",
      img: "assets/nos-alive.png",
      didWhat: "Development",
      sourceCode: "https://github.com/anacatarinafg/nos-alive-clone",
      webpage: "https://anacatarinafg.github.io/nos-alive-clone/",
    },
    {
      id: 5,
      name: "Solar system",
      img: "assets/planets.png",
      didWhat: "Development",
      sourceCode: "https://github.com/anacatarinafg/solar-system",
      webpage: "https://anacatarinafg.github.io/solar-system/index.html",
    },
    {
      id: 6,
      name: "Todo",
      img: "assets/todo-app.png",
      didWhat: "Design & Development",
      sourceCode: "https://github.com/anacatarinafg/Todo",
      webpage: "https://anacatarinafg.github.io/Todo/",

    },
    {
      id: 7,
      name: "Calculator",
      img: "assets/calculator.png",
      didWhat: "Design & Development",
      sourceCode: "https://github.com/anacatarinafg/simple-calculator",
      webpage: "https://anacatarinafg.github.io/simple-calculator/",

    },
    {
      id: 8,
      name: "Clock",
      img: "assets/watch.png",
      didWhat: "Design & Development",
      sourceCode: "https://github.com/anacatarinafg/clock",
      webpage: "https://anacatarinafg.github.io/clock/",

    },
    {
      id: 9,
      name: "Dictionary",
      img: "assets/dictionary.png",
      didWhat: "Design & Development",
      sourceCode: "https://github.com/anacatarinafg/dictionary",
      webpage: "https://anacatarinafg.github.io/dictionary/",

    },
    {
      id: 10,
      name: "Github search profile",
      img: "assets/githubprofile.png",
      didWhat: "Design & Development",
      sourceCode: "https://github.com/anacatarinafg/github-profile",
      webpage: "https://anacatarinafg.github.io/github-profile/",

    },
    {
      id: 10,
      name: "Gradient generator",
      img: "assets/gradient.jpg",
      didWhat: "Design & Development",
      sourceCode: "https://github.com/anacatarinafg/gradient-generator",
      webpage: "https://anacatarinafg.github.io/gradient-generator/",

    },
  ];

  return (

    <>
      <main className="main">
        <div className='projects__headlines'>
          <h1 className='projects__headline'>Projects</h1>
          <span className='projects__date'>2022&2023</span>
        </div>
        <div className="body">
          {
            projects.map((project, index) => {
              return <Project index={index} name={project.name} didWhat={project.didWhat} setModal={setModal} key={index} />
            })
          }
        </div>
        <Modal modal={modal} projects={projects} />
      </main>
    </>
  );
};

export default transition(Work);
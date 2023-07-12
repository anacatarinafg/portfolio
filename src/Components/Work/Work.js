import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Project from './Project/Project';
import Modal from './Modal/Modal';
import './work.css';
import transition from '../../transition';


const Work = () => {
  const [backgroundTransition, setBackgroundTransition] = useState(false);
  const [modal, setModal] = useState({ active: false, index: 0 })
  const projects = [
    {
      id: 1,
      name: "Real-time weather",
      img: "./portfolio/assets/weather-app.png",
      didWhat: "Design & Development",
      color: "#1F1F1F",
      sourceCode: "https://github.com/anacatarinafg/weather-app",
      webpage: "https://anacatarinafg.github.io/weather-app/#/current-location",
    },
    {
      id: 2,
      name: 'E-commerce "ecologic memories"',
      img: "./portfolio/assets/ecologic-memories.png",
      didWhat: "Design & Development",
      color: "#FF6B35",
      sourceCode: "https://github.com/anacatarinafg/e-commerce_ecologic-memories",
      webpage: "https://anacatarinafg.github.io/E-commerce_Ecologic_Memories/",
    },
    {
      id: 3,
      name: "Tesla clone",
      img: "./portfolio/assets/tesla-project.png",
      didWhat: "Development",
      color: "#3abff0",
      sourceCode: "https://github.com/anacatarinafg/tesla-frontpage-clone/tree/gh-pages",
      webpage: "https://anacatarinafg.github.io/tesla-frontpage-clone/#solarPanels",
    },
    {
      id: 4,
      name: "Pomodoro",
      img: "./portfolio/assets/pomodoro.png",
      didWhat: "Design & Development",
      color: "#DDFF00",
      sourceCode: "https://github.com/anacatarinafg/pomodoro",
      webpage: "https://anacatarinafg.github.io/pomodoro/",
    },
    {
      id: 5,
      name: "NOS Alive clone",
      img: "./portfolio/assets/nos-alive.png",
      didWhat: "Development",
      color: "#ffd301",
      sourceCode: "https://github.com/anacatarinafg/nos-alive-clone",
      webpage: "https://anacatarinafg.github.io/nos-alive-clone/",
    },
    {
      id: 6,
      name: "Archived photos",
      img: "./portfolio/assets/gallery.png",
      didWhat: "Development",
      color: "#ff4802",
      sourceCode: "https://github.com/anacatarinafg/archived-photos",
      webpage: "https://anacatarinafg.github.io/archived-photos/",
    },
    {
      id: 7,
      name: "Horizontal scrolling",
      img: "./portfolio/assets/horizontal.png",
      didWhat: "Design & Development",
      color: "#FFA1E6",
      sourceCode: "https://github.com/anacatarinafg/horizontal-scroll",
      webpage: "https://anacatarinafg.github.io/horizontal-scroll/",
    },
    {
      id: 8,
      name: "Solar system",
      img: "./portfolio/assets/planets.png",
      didWhat: "Development",
      color: "#f511c8",
      sourceCode: "https://github.com/anacatarinafg/solar-system",
      webpage: "https://anacatarinafg.github.io/solar-system/index.html",
    },
    {
      id: 9,
      name: "Todo",
      img: "./portfolio/assets/todo-app.png",
      didWhat: "Development",
      color: "#3f2eff",
      sourceCode: "https://github.com/anacatarinafg/Todo",
      webpage: "https://anacatarinafg.github.io/Todo/",
    },
    {
      id: 10,
      name: "Calculator",
      img: "./portfolio/assets/calculator.png",
      didWhat: "Development",
      color: "#41fab9",
      sourceCode: "https://github.com/anacatarinafg/simple-calculator",
      webpage: "https://anacatarinafg.github.io/simple-calculator/",
    },
    {
      id: 11,
      name: "Clock",
      img: "./portfolio/assets/watch.png",
      didWhat: "Design & Development",
      color: "#d9ff00",
      sourceCode: "https://github.com/anacatarinafg/clock",
      webpage: "https://anacatarinafg.github.io/clock/",
    },
    {
      id: 12,
      name: "Dictionary",
      img: "./portfolio/assets/dictionary.png",
      didWhat: "Design & Development",
      color: "#F0F8FF",
      sourceCode: "https://github.com/anacatarinafg/dictionary",
      webpage: "https://anacatarinafg.github.io/dictionary/",
    },
    {
      id: 13,
      name: "Github search profile",
      img: "./portfolio/assets/githubprofile.png",
      didWhat: "Design & Development",
      color: "#ff4802",
      sourceCode: "https://github.com/anacatarinafg/github-profile",
      webpage: "https://anacatarinafg.github.io/github-profile/",
    },
    {
      id: 14,
      name: "Gradient generator",
      img: "./portfolio/assets/gradient.jpg",
      didWhat: "Development",
      color: "#ffd301",
      sourceCode: "https://github.com/anacatarinafg/gradient-generator",
      webpage: "https://anacatarinafg.github.io/gradient-generator/",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const changeBackgroundColor = () => {
      if (window.scrollY > window.innerHeight / 2) {
        setBackgroundTransition(true);
      } else {
        setBackgroundTransition(false);
      }
    };

    window.addEventListener("scroll", changeBackgroundColor);
    return () => {
      window.removeEventListener("scroll", changeBackgroundColor);
    };
  }, []);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <main className={`main ${backgroundTransition ? "background__color" : ""}`}>
        <div className="projects__headlines" data-aos="flip-right">
          <h1 className="projects__headline"><span>2022—2023</span>selected projects</h1>
        </div>
        <div className="body">
          {projects.map((project, index) => (
            <Project
              index={index}
              name={project.name}
              didWhat={project.didWhat}
              id={project.id}
              link={project.webpage}
              setModal={setModal}
              key={index}
            />
          ))}
        </div>
        <Modal modal={modal} projects={projects} />
      </main>
    </>
  );
};

export default transition(Work);
import React, { useEffect } from 'react';
import TagCloud from 'TagCloud';
import transition from '../../transition';
import './about.css';

const About = () => {
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

    </>
  );
};

export default transition(About);
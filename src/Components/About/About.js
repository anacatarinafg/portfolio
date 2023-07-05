import React, { useEffect, useState } from 'react';
import TagCloud from 'TagCloud';
import { Link } from "react-router-dom";
import { GrLinkNext } from "react-icons/gr";
import AOS from "aos";
import "aos/dist/aos.css";
import transition from '../../transition';
import './about.css';

const About = () => {
  const [backgroundTransition, setBackgroundTransition] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 3000 });
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
    // Set body background color
    document.body.classList.add('about__background');

    return () => {
      // Remove the class when component is unmounted
      document.body.classList.remove('about__background');
    }
  }, []);


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
      <div className={`about ${backgroundTransition ? "background__colorAbout" : ""}`}>
        <div className="about__wrapper">
          <div className='about__info'>
            <p className='about__apresentation' data-aos="fade-down">
              I'm Ana Gonçalves.<span className="firstEmoji">✺</span> I'm a junior front—end developer<span className='secondEmoji'>✹</span> with a deep passion for creating visually appealing and user-friendly webpages.<span className='thirdEmoji'>✷</span>My practice encompasses a blend of technical expertise, creative thinking, and a drive for innovation.<span className='fourthEmoji'>✷</span> Through a combination of insight, strategy, and craftsmanship, I strive to create future-facing web experiences that connect with users, foster meaningful interactions, and drive positive change.<span className='fifthEmoji'>✳︎</span>
            </p>
            <div className='about__additionalInfo'>
              <span data-aos="fade-down">Passionate</span>
              <span data-aos="fade-down">Dedicated</span>
              <span data-aos="fade-down">Flexible</span>
            </div>
            <div className='about__resume'>
              <p data-aos="fade-down">I’m a junior front—end developer that creates digital experiences. I am a person who likes challenges and undertakes the most advanced projects for learning and commitment.</p>
            </div>
          </div>
          <div className='about__languages'>
            <h2 className='languages__headline' data-aos="fade-down">Development skills</h2>
            <div className='about__secondWrapper'>
              <div className='about__moreLangInfo' data-aos="fade-down">
                <p>— I find immense pleasure in the art of creating and recreating webpages that resonate deeply with me, immersing myself in the intricate world of web design where I can channel my passion to craft captivating online experiences that truly capture my heart.</p>
              </div>
              {/* TAGCLOUD */}
              <div class="tagcloud__box">
                <span class="tagcloud" data-aos="fade-down"></span>
              </div>
            </div>

          </div>
          <Link to="/work" className="about__link">
            <h2 className="about__linkText">Work</h2>
            <span className="about__iconLink">
              <GrLinkNext />
            </span>
          </Link>
        </div>
      </div>

    </>
  );
};

export default transition(About);
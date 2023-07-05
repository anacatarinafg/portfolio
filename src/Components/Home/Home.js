import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GrLinkNext } from "react-icons/gr";
import Sentence from "./Sentence";
import Typewriter from "typewriter-effect";
import AOS from "aos";
import "aos/dist/aos.css";
import "./home.css";
import transition from "../../transition";
import image from "./ana-goncalves.png";

const Home = () => {
  const [backgroundTransition, setBackgroundTransition] = useState(false);
  const sentence = "Portugal — based".split("");




  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  useEffect(() => {
    const changeBackgroundColor = () => {
      const homeContainer = document.querySelector(".home");
      if (homeContainer) {
        if (window.scrollY > window.innerHeight) {
          homeContainer.classList.add("background__colorSecondary");
        } else {
          homeContainer.classList.remove("background__colorSecondary");
        }
        if (window.scrollY > window.innerHeight * 1.5) {
          homeContainer.classList.add("background__colorPrimary");
        } else {
          homeContainer.classList.remove("background__colorPrimary");
        }
      }
    };

    window.addEventListener("scroll", changeBackgroundColor);
    return () => {
      window.removeEventListener("scroll", changeBackgroundColor);
    };
  }, []);

  return (
    <div className={`home ${backgroundTransition ? "background__colorHome" : ""}`}>
      <div className="home__based">
        {sentence.map((letter, index) => (
          <Sentence key={index}>{letter === " " ? "\u00A0" : letter}</Sentence>
        ))}
      </div>

      <p className="home__job" data-aos="flip-right">
        <Typewriter
          options={{
            strings: ["junior front—end developer"],
            autoStart: true,
            loop: true,
            deleteSpeed: 5000000000,
          }}
        />
      </p>

      <div
        className={`home__gallery ${backgroundTransition ? "background__colorSecondary" : ""}`}
        data-aos="zoom-in"
      >
        <img src={image} alt="my-logo" className="home__photo"></img>
      </div>

      <div className={`home__pyramid ${backgroundTransition ? "background__colorPrimary" : ""}`}>
        <div className="home__left">
          <p data-aos="fade-down" className="home__letter">
            f
          </p>
          <p data-aos="fade-down" className="home__letter">
            fr
          </p>
          <p data-aos="fade-down" className="home__letter">
            fro
          </p>
          <p data-aos="fade-down" className="home__letter">
            fron
          </p>
          <p data-aos="fade-down" className="home__letter">
            front
          </p>
          <p data-aos="fade-down" className="home__letter">
            front—
          </p>
          <p data-aos="fade-down" className="home__letter">
            front—e
          </p>
          <p data-aos="fade-down" className="home__letter">
            front—en
          </p>
          <p data-aos="fade-down" className="home__letter">
            front—end
          </p>
        </div>

        <div className="home__right">
          <p data-aos="fade-down" className="home__letter">
            developer
          </p>
          <p data-aos="fade-down" className="home__letter">
            develope
          </p>
          <p data-aos="fade-down" className="home__letter">
            develop
          </p>
          <p data-aos="fade-down" className="home__letter">
            develo
          </p>
          <p data-aos="fade-down" className="home__letter">
            devel
          </p>
          <p data-aos="fade-down" className="home__letter">
            deve
          </p>
          <p data-aos="fade-down" className="home__letter">
            dev
          </p>
          <p data-aos="fade-down" className="home__letter">
            de
          </p>
          <p data-aos="fade-down" className="home__letter">
            d
          </p>
        </div>
      </div>

      <div className="home__apresentation">
        <h4 className="home__hello">Hey there! I'm Ana Gonçalves and I'm thrilled that you've taken the time to scroll down. Welcome to my portfolio website. Feel free to explore and delve deeper into who I am. Get ready to uncover more about me and my work!</h4>
      </div>

      <div className="home__linkWrapper">
        <Link to="/about" className="home__link">
          <h2 className="home__linkText">About</h2>
          <span className="home__iconLink">
            <GrLinkNext />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default transition(Home);
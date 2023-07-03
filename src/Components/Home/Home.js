import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './home.css';
import transition from '../../transition';


const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <div className='home'>
      <h2 className="home__based" data-aos="flip-left">Portugal — based</h2>
      <p className="home__job" data-aos="flip-right">junior front—end developer</p>
      <div className="home__gallery" data-aos="zoom-in">
        {/* <img src="./assets/metree.jpg" alt="me" className="home__photo" /> */}
      <span className="home__star">🫧</span>
      </div>

      <div className="home__pyramid">
        <div className="home__left">
          <p data-aos="fade-down" className="home__letter">f</p>
          <p data-aos="fade-down" className="home__letter">fr</p>
          <p data-aos="fade-down" className="home__letter">fro</p>
          <p data-aos="fade-down" className="home__letter">fron</p>
          <p data-aos="fade-down" className="home__letter">front</p>
          <p data-aos="fade-down" className="home__letter">front-</p>
          <p data-aos="fade-down" className="home__letter">front-e</p>
          <p data-aos="fade-down" className="home__letter">front-en</p>
          <p data-aos="fade-down" className="home__letter">front-end</p>
        </div>

        <div className="home__right">
          <p data-aos="fade-down" className="home__letter">developer</p>
          <p data-aos="fade-down" className="home__letter">develope</p>
          <p data-aos="fade-down" className="home__letter">develop</p>
          <p data-aos="fade-down" className="home__letter">develo</p>
          <p data-aos="fade-down" className="home__letter">devel</p>
          <p data-aos="fade-down" className="home__letter">deve</p>
          <p data-aos="fade-down" className="home__letter">dev</p>
          <p data-aos="fade-down" className="home__letter">de</p>
          <p data-aos="fade-down" className="home__letter">d</p>
        </div>
      </div>
    </div>

  );
};

export default transition(Home);
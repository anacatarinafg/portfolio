import React from 'react';
import transition from '../../transition';
import './home.css';

const Home = () => {
  return (
    <div className='home'>
      <h1 className='home__headline'>Ana</h1>
      <p className='home__info'>My name is Ana. I'm a front-end developer based in Portugal.</p>
    </div>

  )
}

export default transition(Home);
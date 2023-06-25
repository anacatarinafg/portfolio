import React from 'react';
import transition from '../../transition';
import './home.css';

const Home = () => {
  return (
    <div className='home'>
      <h1 className='home__headline'></h1>
      <p className='home__info'>
      </p>
    </div>

  )
}

export default transition(Home);
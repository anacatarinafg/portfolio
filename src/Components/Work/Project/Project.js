import React from 'react';

const Project = ({ index, title, setModal }) => {
  return (
    <div
      className='project__box'
      onMouseEnter={() => { setModal({ active: true, index }) }} onMouseLeave={() => { setModal({ active: false, index }) }}
    >
      <h2 className='project__title'>{title}</h2>
      <p className='project__info'>Design & development</p>
    </div>
  );
};

export default Project;
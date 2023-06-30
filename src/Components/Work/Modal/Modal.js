import React from 'react';
import { motion } from 'framer-motion';
import '../work.css';

const Modal = ({ modal, projects }) => {
  const { active, index } = modal;
  const topValue = index * -100 + "%";

  const scaleAnimation = {
    initial: { scale: 0, x: '-50%', y: '-50%' },
    enter: { scale: 1, x: '-50%', y: '-50%', transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] } },
    closed: { scale: 0, x: '-50%', y: '-50%', transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] } }
  };

  return (
    <div className='modal__container'>
      <motion.div variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"} className='modal__wrapper' style={{ top: topValue }}>
        <div className='modal__slider'>
          {projects.map((project, i) => (
            <div
              key={`modal_${i}`}
              className={`modal ${index === i ? 'active' : ''}`}
              initial='initial'
              animate={active ? 'enter' : 'closed'}
              variants={scaleAnimation}
            >
              {index === i && (
                <img src={project.img} alt={project.name} width={300} height={300} className='modal__img' />
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Modal;
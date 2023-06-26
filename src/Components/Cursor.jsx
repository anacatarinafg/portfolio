import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const Cursor = () => {
  useEffect(() => {
    const cursor = document.getElementById('cursor');
    const links = document.querySelectorAll('a');
    const images = document.querySelectorAll('img');
    const cursorText = document.querySelector('.cursor__text');

    const onMouseMove = (e) => {
      const { clientX, clientY } = e;
      gsap.to(cursor, { x: clientX, y: clientY });
    };

    const onMouseEnterElements = (e) => {
      const element = e.target;
      if (element.classList.contains('view')) {
        gsap.to(cursor, { scale: 4 });
        cursorText.style.display = 'block';
      } else {
        gsap.to(cursor, { scale: 4 });
      }
    };

    const onMouseLeaveElements = () => {
      gsap.to(cursor, { scale: 1 });
      cursorText.style.display = 'none';
    };

    document.addEventListener('mousemove', onMouseMove);
    links.forEach((link) => {
      link.addEventListener('mouseenter', onMouseEnterElements);
      link.addEventListener('mouseleave', onMouseLeaveElements);
    });
    images.forEach((image) => {
      image.addEventListener('mouseenter', onMouseEnterElements);
      image.addEventListener('mouseleave', onMouseLeaveElements);
    });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      links.forEach((link) => {
        link.removeEventListener('mouseenter', onMouseEnterElements);
        link.removeEventListener('mouseleave', onMouseLeaveElements);
      });
      images.forEach((image) => {
        image.removeEventListener('mouseenter', onMouseEnterElements);
        image.removeEventListener('mouseleave', onMouseLeaveElements);
      });
    };
  }, []);

  return (
    <div id="cursor">
      <span className='cursor__text'>View</span>
    </div>
  );
};

export default Cursor;
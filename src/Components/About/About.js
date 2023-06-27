import React, { useEffect, useRef } from 'react';
import transition from '../../transition';
import './about.css';

const About = () => {
  const scrollWrapRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const scrollWrap = scrollWrapRef.current;
    let offset = 0;

    // Function to perform smooth scrolling effect
    const smoothScroll = () => {
      offset += (window.pageYOffset - offset) * 0.04;

      const scroll = `translateY(-${offset}px) translateZ(0)`;
      scrollWrap.style.transform = scroll;

      requestAnimationFrame(smoothScroll);
    };

    smoothScroll();

    const content = contentRef.current;
    let currentPos = window.pageYOffset;

    // Function to perform distortion effect during scrolling
    const callDistort = () => {
      const newPos = window.pageYOffset;
      const diff = newPos - currentPos;
      const speed = diff * 0.35;

      content.style.transform = `skewY(${speed}deg)`;
      currentPos = newPos;
      requestAnimationFrame(callDistort);
    };

    callDistort();

    // Clean up the animation frames on component unmount
    return () => {
      cancelAnimationFrame(smoothScroll);
      cancelAnimationFrame(callDistort);
    };
  }, []);

  useEffect(() => {
    const scrollWrap = scrollWrapRef.current;
    const height = scrollWrap.getBoundingClientRect().height - 1;
    document.body.style.height = Math.floor(height) + 'px';
  }, []);


  const projects = [
    {
      imageSrc: "https://i.pinimg.com/564x/e7/0f/0a/e70f0a7055fc89b1a97669fc988b26aa.jpg",
      imageAlt: "Image 1",
      title: "Boundary Supply",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat quia, inventore dolorem consequatur nulla aperiam laudantium optio fuga a facere nobis enim cum hic distinctio quae tempore rem? In quo placeat commodi ad hic omnis earum officiis voluptatibus esse dolores!"
    },
    {
      imageSrc: "https://i.pinimg.com/564x/e7/0f/0a/e70f0a7055fc89b1a97669fc988b26aa.jpg",
      imageAlt: "Image 2",
      title: "Runway Three",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente a necessitatibus tempora officia doloremque soluta eos ex mollitia possimus voluptas voluptates, quaerat nemo atque quos ducimus sint saepe vitae labore."
    },
    {
      imageSrc: "https://i.pinimg.com/564x/e7/0f/0a/e70f0a7055fc89b1a97669fc988b26aa.jpg",
      imageAlt: "Image 3",
      title: "Waste Matters",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis minus enim fugit laudantium quisquam numquam dolorum voluptas sequi a officia? Vitae quisquam aliquid id, adipisci in ex modi quae totam possimus obcaecati deleniti eos minus impedit facilis nam laboriosam tempore."
    }
  ];

  return (
    <div className="smooth-scroll-wrapper" ref={scrollWrapRef}>
      <div className="project__box" ref={contentRef}>
        <section className='project__wrapper'>
          {projects.map((projects, index) => (
            <div key={index} className='project'>
              <h1 className='project__title'>/ {projects.title} </h1>
              <img src={projects.imageSrc} alt={projects.imageAlt} className='project__image' />
              <p className='project__description'>{projects.description} </p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default transition(About);
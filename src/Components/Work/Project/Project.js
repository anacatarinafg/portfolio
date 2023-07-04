import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../work.css';

export default function Index({ index, name, didWhat, id, setModal, link }) {
  // Add leading zero if ID is less than 10
  const formattedId = index < 9 ? `0${index + 1}` : index + 1;

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <Link to={link}
      target='_blank'
      onMouseEnter={() => setModal({ active: true, index })}
      onMouseLeave={() => setModal({ active: false, index })}
      className="project"
      data-aos="fade-down"
    >
      <span className="project__id">{formattedId}</span>
      <h2 className="project__name">{name}</h2>
      <p className="project__workIn">{didWhat}</p>
    </Link>
  );
}
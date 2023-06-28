import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Work from './Components/Work/Work';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Cursor from './Components/Cursor';
import Loading from './Components/Loading/Loading';
import './App.css';

const App = () => {
  const location = useLocation();
  const [navbarStyle, setNavbarStyle] = useState({ opacity: 1, transition: 'opacity 0.3s' });
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingUp = prevScrollPos > currentScrollPos;

      if (isScrollingUp || currentScrollPos < 1) {
        setNavbarStyle({ opacity: 1, transition: 'opacity 0.3s' });
      } else {
        setNavbarStyle({ opacity: 0, transition: 'opacity 0.3s' });
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  useEffect(() => {
    // Simulating a loading delay
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      clearTimeout(loadingTimeout);
    };
  }, []);
  return (
    <>
      {isLoading ? (
        <>
          <Loading />
          <Cursor />
        </>
      ) : (
        <>
          <Navbar style={navbarStyle} />
          <Cursor />
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route index element={<Home />} />
              <Route path="/work" element={<Work />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </>
      )}
    </>
  );
};

export default App;
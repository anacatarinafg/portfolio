import './App.css';
import { Routes, Route, useLocation } from "react-router-dom";


import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Work from './Components/Work/Work';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';

function App() {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <Routes location={location} key={location.pathname}>
        <Route index element={<Home />} />
        <Route path='/work' element={<Work />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;

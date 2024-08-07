import { BrowserRouter } from "react-router-dom"
import { Works, Benefits, Footer, Hero, Navbar, Contact, Procedure, AboutUs} from "./components"
import React, { useState, useEffect } from 'react';

const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 1023px)');
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern-mobile lg:bg-hero-pattern bg-cover">
          <Navbar/>
          <Hero/>
        </div>
      </div>
      <div className={`blob-container ${isMobile ? 'procedure_blob_mobile' : 'procedure_blob'}`}>
      </div>
        <Procedure/>
      <div className={`blob-container "benefits_blob_mobile"}`}>
      </div>
        <Benefits/>
        <Works/>
        <hr className="border-2"/>
        <AboutUs/>
        <Contact/>
        <div className="footer">
          <Footer/>
        </div>
    </BrowserRouter>
  )
}

export default App
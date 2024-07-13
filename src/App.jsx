import { BrowserRouter } from "react-router-dom"
import { AboutUs, Benefits, Footer, Hero, Navbar, Order, Procedure, WhyUs} from "./components"
import React, { useState, useEffect } from 'react';

const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 1024px)');
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
      <div className={`blob-container ${isMobile ? 'procedure_blob_mobile' : 'procedure_blob'}`} id='procedure'>
      </div>
        <Procedure/>
        <Benefits/>
        <AboutUs/>
        <WhyUs/>
        <Order/>
        <div className="footer">
          <Footer/>
        </div>
    </BrowserRouter>
  )
}

export default App
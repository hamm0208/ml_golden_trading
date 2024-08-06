import React, { useState, useEffect, useRef } from 'react';
import { work } from "../constants";

const AboutUs = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef(null);

  const startInterval = () => {
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % work.length);
    }, 4000);
  };

  const clearExistingInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const nextSlide = () => {
    clearExistingInterval();
    setCurrentSlide((prevSlide) => (prevSlide + 1) % work.length);
    startInterval();
  };

  const prevSlide = () => {
    clearExistingInterval();
    setCurrentSlide((prevSlide) => (prevSlide - 1 + work.length) % work.length);
    startInterval();
  };

  const goToSlide = (index) => {
    clearExistingInterval();
    setCurrentSlide(index);
    startInterval();
  };

  useEffect(() => {
    startInterval();
    return () => clearExistingInterval();
  }, []);

  return (
    <section id='work' className='p-10 h-full'>
      <div className='px-14 flex flex-col justify-center items-center'>
        <h2 className='text-5xl lilita'>
          Our <span className='lilita text-secondary'>Work!</span>
        </h2>
      </div>
      <div className='mt-5 grid grid-cols-9 h-[20rem] md:h-[36rem] px-5'>
        <div className='col-span-1 justify-center items-center md:flex hidden'>
          <button onClick={prevSlide} className='bg-gray-800 text-white p-2 w-20 h-24 rounded-lg' id='prev'>&lt;</button>
        </div>
        <div className='md:col-span-7 col-span-9 relative flex justify-center items-center'>

          {work.map((image, index) => (
            <div
              key={index}
              className={`list absolute flex transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'} bg-primary rounded-lg`}
            >
              <img
                src={image}
                alt={`work-image-${index}`}
                className='h-72 md:w-[70rem] md:h-[35rem] my-2 px-2'
              />
            </div>
          ))}

        </div>
        <div className='col-span-1 justify-center items-center md:flex hidden'>
          <button onClick={nextSlide} className='bg-gray-800 text-white p-2 w-20 h-24 rounded-lg' id='next'>&gt;</button>
        </div>
      </div>
      <ul className='dots flex justify-center mt-10'>
        {work.map((_, index) => (
          <li
            key={index}
            className={`dot w-4 h-4 mx-2 rounded-full cursor-pointer ${index === currentSlide ? 'bg-secondary' : 'bg-gray-300'}`}
            onClick={() => goToSlide(index)}
          ></li>
        ))}
      </ul>
    </section>
  );
};

export default AboutUs;

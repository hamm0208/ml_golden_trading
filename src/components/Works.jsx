import React, { useState, useEffect, useRef } from 'react';
import { work } from "../constants";
import { useSwipeable } from 'react-swipeable';

const AboutUs = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const videoRefs = useRef([]); // Array to hold multiple video refs
  useEffect(() => {
    // Pause all videos
    videoRefs.current.forEach((video, index) => {
      if (video) {
        video.pause();
        if (index === currentSlide && work[currentSlide].type === "Video") {
          video.currentTime = 0; // Reset the video to the start
          video.volume = 0.05 ;
          video.play(); // Play the current video
        }
      }
    });
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % work.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + work.length) % work.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <section id='work' className='py-10'>
      <div className='px-14 text-center'>
        <h2 className='text-5xl lilita'>
          Our <span className='lilita text-secondary'>Work!</span>
          
        </h2>
      </div>
      <div {...handlers} className='mt-5 grid grid-cols-9 h-[20rem] md:h-[36rem] px-5 w-full'>
        <div className='col-span-1 justify-center items-center md:flex hidden mr-3'>
          <button onClick={prevSlide} className='bg-gray-800 text-white p-2 w-20 h-24 rounded-lg' id='prev'>&lt;</button>
        </div>
        <div className='md:col-span-7 col-span-9 relative flex justify-center items-center list'>
        
          {work.map((image, index) => (
            <div
              key={index}
              className={`list absolute flex transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'} rounded-lg bg-primary`}
            >
              {image.type == "Image" ? 
              <>
                <img
                  src={image.src}
                  alt={`work-image-${index}`}
                  className={` ${image.aspect == "16:9" ? 'md:w-[70rem] md:h-[35rem] w-[650px] h-[325px] ' : 'w-[20rem] h-[20rem] md:w-[35rem] md:h-[35rem] '} my-2 px-2 relative work_image` }
                />
              </> :
              <>
                <video
                  ref={(el) => (videoRefs.current[index] = el)} // Store ref to video element
                  src={image.src}
                  loop
                  autoPlay
                  
                  
                  preload="auto"
                  className={` ${image.aspect === "16:9" ? 'md:w-[70rem] md:h-[35rem] w-[650px] h-[325px]' : 'w-[20rem] h-[20rem] md:w-[35rem] md:h-[35rem]'} relative work_image`}
                >
                  Your browser does not support the video tag.
                </video>
              </>
              }
             
            </div>
          ))}

        </div>
        <div className='col-span-1 justify-center items-center md:flex hidden ml-3'>
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

import {React, useState} from 'react'
import {styles} from '../styles'
import {navLinks} from '../constants'
import { Product1Canvas } from './canvas'
const Hero = () => {
  const [active, setActive] = useState("")
  const handleNavClick = (event, link) => {
    event.preventDefault(); // Prevent the default anchor click behavior
    setActive(link.title);

    const element = document.getElementById(link.id);
    if (element) {
      const yOffset = -100; // Adjust this value to set the offset
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`absolute inset-0 lg:top-[180px] top-[150px] mx-auto flex lg:flex-row flex-col items-start gap-10`}>
        <div className='lg:w-5/6 w-full flex flex-col justify-center items-center lg:bg-transparent home p-6 mt-10 rounded-xl landing'>
          <h1 className='text-white text-[25px] lg:text-5xl text-center'>
            Transform Your Ground Leveling with our <br/>
            <span className='text-secondary text-[25px] lg:text-6xl'>
              Flat Floor System
            </span>
          </h1>
          <p className='text-center lg:mt-18 my-12 lg:text-3xl text-white'>
          Revolutionize your projects with <span className='text-secondary font-bold'>ML GOLDEN TRADING</span> , through our patented groundbreaking <span className='text-secondary'>self-leveling cement screeding</span> screeding and <span className='text-secondary'>cement mortar screeding systems</span> . Trusted by contractors for unparalleled precision and efficiency.
          </p>
          <a class="bg-white hover:bg-zinc-300 transition duration-500 text-black cursor-pointer font-bold py-5 px-7 xl:mt-20 rounded-full" key={navLinks[0].id} href={`#${navLinks[0].id}`} onClick={(event)=>handleNavClick(event,navLinks[0])}>
              Explore Now
          </a>
        </div>
        <div className='product h-full lg:w-1/3 lg:top-0 top-1/4 lg:relative absolute w-full mr-5'>
          <div className='w-full h-full absolute lg:z-0 z-10'></div>
          <Product1Canvas/>
        </div>
      </div>
    </section>
  )
}

export default Hero
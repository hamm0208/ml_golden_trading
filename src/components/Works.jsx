import React from 'react'
import {work} from "../constants"
const AboutUs = () => {
  return (
    <section id='work' className='pt-10'>
        <div className='px-14  flex flex-col justify-center items-center'>
        <h2 className='text-5xl lilita'>Our <span className= 'lilita text-secondary '>Work!</span></h2>
      </div>
      <div className='mt-5'>
          {work.map((image, index) => (
            <img src={image} alt={index} className='w-[40rem] h-[20rem] md:w-[80rem] md:h-[40rem] mx-auto mt-2 px-[5vw] '/>
          )) }

      </div>
    </section>
  )
}

export default AboutUs
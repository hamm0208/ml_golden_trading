import React from 'react'
import {about, patent} from "../constants"

const About = () => {
  return (
    <section id='about' className='h-full mt-10 px-5'>
      <div className='flex justify-center items-center flex-col'>
        <h2 className='text-5xl lilita 2xl:text-left text-center'>About <br className='md:hidden block'/><span className= 'lilita text-secondary '>ML GOLDEN TRADING!</span></h2>
        <div className='flex md:flex-row flex-col p-5 mt-3 bg-primary w-fit rounded-lg text-white'>
          {
            patent.map((patent) => (
              <>
                <div className='flex md:mt-0 mt-2 md:ml-2 ml-0'>
                  <img src={patent.country} alt="Malaysia Flag" className='w-14'/>
                  <p className='mx-2 text-gray-200 text-xs'>
                    {patent.type}<br/>
                    <span className='text-base'>
                      {patent.no}
                    </span>
                  </p>
                </div>
              </>
            ))
          }
          
        </div>
      </div>
      <div className='p-4 rounded-lg border-2 bg-secondary  border-black mt-5 w-[70vw] mx-auto'>
        <p
          dangerouslySetInnerHTML={{ __html: about[0].comment.replace(/\n/g, '<br>') }}
        ></p>
      </div>

      

      

    </section>
  )
}

export default About
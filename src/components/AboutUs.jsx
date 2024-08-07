import React from 'react'
import {about, patent} from "../constants"

const About = () => {
  return (
    <section id='about' className='h-screen mt-10 px-5'>
      <div className='flex justify-center 2xl:items-start items-center flex-col'>
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
      <div className='grid grid-cols-4 gap-4 mt-5'>
        {about.map((about, index) => (
          <React.Fragment key={index}>
            {index % 2 === 0 ? (
              <>
                <div className='md:col-span-3 col-span-4 flex justify-center items-center p-10 rounded-lg border-2 bg-secondary  border-black'>
                  <p
                    className='text-justify'
                    dangerouslySetInnerHTML={{ __html: about.comment.replace(/\n/g, '<br>') }}
                  ></p>
                </div>
                <div className='col-span-1 px-2 bg-slate-200 rounded-lg border-2 border-black flex '>
                  <img src={about.image} alt={`about-image-${index}`} className='w-screen mx-auto py-2' />
                </div>
              </>
            ) : (
              <>
                <div className='col-span-1 px-2 bg-slate-200 rounded-lg border-2 border-black'>
                  <img src={about.image} alt={`about-image-${index}`} className='w-screen mx-auto py-2' />
                </div>
                <div className='md:col-span-3 col-span-4 flex justify-center items-center p-10 rounded-lg border-2 bg-primary border-black'>
                  <p
                    className='text-justify text-white'
                    dangerouslySetInnerHTML={{ __html: about.comment.replace(/\n/g, '<br>') }}
                  ></p>
                </div>
              </>
            )}
          </React.Fragment>
        ))}


        
      </div>

    </section>
  )
}

export default About
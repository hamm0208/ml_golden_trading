import React from 'react'
import {benefits} from "../constants"
const Benefits = () => {
  
  return (
    <section>
      <div className='relative w-full h-full  z-0 benefits mt-16 bg-primary p-10'  id="benefits">
          <div className='2xl:text-left  2xl:w-full flex flex-col 2xl:justify-start 2xl:items-start justify-center items-center'>
            <h2 className='text-5xl lilita text-secondary'>Benefits</h2>
            <h3 className='text-2xl lilita text-white'>How can we help you?</h3>
          </div>
          <div className='flex justify-center items-center mt-8 md:border md:p-10 md:rounded-md'>
            <div className='max-w-7xl mx-auto w-full  grid-cols-9 md:grid hidden'>
              {benefits.map((benefit, index) =>(
                <React.Fragment key={index}>
                  {index % 2 === 0 ? 
                  (<>
                  <div className='col-span-4 w-full h-full'>
                    <div className='w-full h-full bg-secondary rounded-md p-4 md:pl-4'>
                      <h3 className='text-xl py-2 font-bold'>{benefit.benefits}</h3>
                      <p className='sm:text-sm text-xs '>{benefit.explaination}</p>
                    </div>
                  </div>
                  <div className='col-span-1 relative w-full h-full flex justify-center items-center'>
                    <div className='h-full w-1 bg-white'></div>
                    <img src={benefit.icon} alt={benefit.benefits} className='bg-secondary p-3 rounded-full absolute'/>
                  </div>
                  <div className='col-span-4 w-full h-full'></div>
                  </>)
                  :
                  (<>
                  <div className='col-span-4 w-full h-full'></div>
                  <div className='col-span-1 w-full h-full flex justify-center items-center relative'>
                    <div className='h-full w-1 bg-white'></div>
                    <img src={benefit.icon} alt={benefit.benefits} className='absolute bg-slate-800 p-3 rounded-full'/>
                  </div>
                  <div className='col-span-4 w-full h-full'>
                    <div className='w-full h-full bg-secondary rounded-md p-4 md:pl-4'>
                      <h3 className='text-xl font-bold py-2'>{benefit.benefits}</h3>
                      <p className='sm:text-sm text-xs'>{benefit.explaination}</p>
                    </div>
                  </div>
                  </>)}
                </React.Fragment>
              ))}
            </div>
            <div className='w-full  grid-cols-4 md:hidden grid'>
              {benefits.map((benefit, index) =>(
                <React.Fragment key={index}>
                  <>
                  <div className='col-span-1 relative w-full h-full flex justify-center items-center mr-4 md:mr-8'>
                    <div className='h-full w-1 bg-white'></div>
                    <img src={benefit.icon} alt={benefit.benefits} className='bg-primary p-3 rounded-full absolute'/>
                  </div>
                  <div className='col-span-3 w-full h-full py-3'>
                    <div className='w-full h-full bg-secondary p-3 md:pl-4 rounded-md'>
                      <h3 className='text-xl font-bold py-2'>{benefit.benefits}</h3>
                      <p className='sm:text-sm text-sm'>{benefit.explaination}</p>
                    </div>
                  </div>
                </>
                </React.Fragment>
              ))}
            </div>
          </div>
      </div>
    </section>
  )
}

export default Benefits
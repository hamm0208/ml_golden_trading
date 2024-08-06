import React from 'react'
import { styles } from '../styles'
import {procedure} from '../constants'
import {demo_vid} from "../assets"

const Procedure = () => {
  return (
    <section className='relative w-full h-full lg:mb-40 3xl:mb-20 xl:mb-0 mb-0 procedure'  id='procedure'>
      <div className={`p-14 flex 2xl:flex-row flex-col relative inset-0 lg:top-[200px] xl:top-[180px] 2xl:top-[20px] 3xl:top-[50px] top-[35px] items-center`}>
        <div className='2xl:text-left text-center 2xl:w-full flex flex-col 2xl:justify-start 2xl:items-start justify-center items-center'>
          <h2 className='text-5xl lilita'>How It <span className= 'lilita text-secondary '>Works!</span></h2>
          <br />
          <h3 className='text-2xl font-bold'>Simple Installation</h3>
          <p className='text-xl w-3/4'>The operator only needs to use an electric drill and two screws to lock down the framework on the ground</p>
          <br />
          <h3 className='text-2xl font-bold'>Flat Floor System Process</h3>
            <div className='flex flex-col rounded-2xl 2xl:w-3/4 justify-items-center p-3 mt-3 bg-primary'>
              <div className='flex sm:flex-row flex-col'>
                <div className='sm:m-2 mt-5 sm:mx-3 md:text-lg sm:text-sm text-md p-2 w-full h-32 lg:h-52 lg:w-42 flex-1 rounded-2xl bg-secondary text-center flex justify-center items-center'>
                  {procedure[0].processNo + ". " + procedure[0].instruction}
                </div>
                <div className='sm:m-2 mt-5 sm:mx-3 md:text-lg sm:text-sm text-md p-2 w-full h-32 lg:h-52 lg:w-42 flex-1 rounded-2xl bg-[#DADBDD] text-center flex justify-center items-center'>
                  {procedure[1].processNo + ". " + procedure[1].instruction}
                </div>
                <div className='sm:m-2 mt-5 sm:mx-3 md:text-lg sm:text-sm text-md p-2 w-full h-32 lg:h-52 lg:w-42 flex-1 rounded-2xl bg-white text-center flex justify-center items-center'>
                  {procedure[2].processNo + ". " + procedure[2].instruction}
                </div>
              </div>
              <div className='flex sm:flex-row flex-col'>
                <div className='sm:m-2 mt-5 sm:mx-3 md:text-lg sm:text-sm text-md p-2 w-full h-32 lg:h-52 lg:w-42 flex-1 rounded-2xl bg-white text-center flex justify-center items-center'>
                  {procedure[3].processNo + ". " + procedure[3].instruction}
                </div>
                <div className='sm:m-2 mt-5 sm:mx-3 md:text-lg sm:text-sm text-md p-2 w-full h-32 lg:h-52 lg:w-42 flex-1 rounded-2xl bg-secondary text-center flex justify-center items-center'>
                  {procedure[4].processNo + ". " + procedure[4].instruction}
                </div>
                <div className='sm:m-2 mt-5 sm:mx-3 md:text-lg sm:text-sm text-md p-2 w-full h-32 lg:h-52 lg:w-42 flex-1 rounded-2xl bg-[#DADBDD] text-center flex justify-center items-center'>
                  {procedure[5].processNo + ". " + procedure[5].instruction}
                </div>
              </div>
              <div className='flex sm:flex-row flex-col'>
                <div className='sm:m-2 mt-5 sm:mx-3 md:text-lg sm:text-sm text-md p-2 w-full h-32 lg:h-52 lg:w-42 flex-1 rounded-2xl bg-white text-center flex justify-center items-center'>
                  {procedure[6].processNo + ". " + procedure[6].instruction}
                </div>
                <div className='sm:m-2 mt-5 sm:mx-3 md:text-lg sm:text-sm text-md p-2 w-full h-32 lg:h-52 lg:w-42 flex-1 rounded-2xl bg-[#DADBDD] text-center flex justify-center items-center'>
                  {procedure[7].processNo + ". " + procedure[7].instruction}
                </div>
                <div className='sm:m-2 mt-5 sm:mx-3 md:text-lg sm:text-sm text-md p-2 w-full h-32 lg:h-52 lg:w-42 flex-1 rounded-2xl bg-secondary text-center flex justify-center items-center'>
                  {procedure[8].processNo + ". " + procedure[8].instruction}
                </div>
              </div>
            </div>
        </div>
        <div className='bg-primary rounded-xl p-8 pt-2 mt-10 justify-center 3xl:top-[100px] xl:relative'>
          <h2 className='text-white text-2xl text-center mb-3 '>Example:</h2>
          <video src={demo_vid} autoPlay loop muted controls className='md:w-1/2 2xl:w-full w-full mx-auto'>
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  )
}

export default Procedure
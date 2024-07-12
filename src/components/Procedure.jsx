import React from 'react'
import { styles } from '../styles'
import {procedure} from '../constants'

const Procedure = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 lg:top-[200px] xl:top-[200px] 2xl:top-[100px] top-[100px] mx-auto flex lg:flex-row flex-col items-start gap-10`}>
        <div className='procedure'>
          <h2 className='text-5xl lilita'>How It <span className= 'lilita text-secondary '>Works!</span></h2>
          <br />
          <h3 className='text-2xl font-bold'>Simple Installation</h3>
          <p className='text-xl w-3/4'>The operator only needs to use an electric drill and two screws to lock down the framework on the ground</p>
          <br />
          <h3 className='text-2xl font-bold'>Flat Floor System Process</h3>
          <div className='flex flex-col rounded-2xl w-1/2 p-3 mt-3 bg-primary'>
            <div className='flex flex-row'>
              <div className='text-xl m-3 p-10 flex-1 rounded-2xl bg-secondary text-center flex justify-center items-center'>
                {procedure[0].processNo + ". " + procedure[0].instruction}
              </div>
              <div className='text-xl m-3 p-10 flex-1 rounded-2xl bg-[#DADBDD] text-center flex justify-center items-center'>
                {procedure[1].processNo + ". " + procedure[1].instruction}
              </div>
              <div className='text-xl m-3 p-10 flex-1 rounded-2xl bg-white text-center flex justify-center items-center'>
                {procedure[2].processNo + ". " + procedure[2].instruction}
              </div>
            </div>
            <div className='flex flex-row'>
              <div className='text-xl m-3 p-10 flex-1 rounded-2xl bg-white text-center flex justify-center items-center'>
                {procedure[3].processNo + ". " + procedure[3].instruction}
              </div>
              <div className='text-xl m-3 p-10 flex-1 rounded-2xl bg-secondary  text-center flex justify-center items-center'>
                {procedure[4].processNo + ". " + procedure[4].instruction}
              </div>
              <div className='text-xl m-3 p-10 flex-1 rounded-2xl bg-[#DADBDD] text-center flex justify-center items-center'>
                {procedure[5].processNo + ". " + procedure[5].instruction}
              </div>
            </div>
            <div className='flex flex-row'>
              <div className='text-xl m-3 p-10 flex-1 rounded-2xl bg-white text-center flex justify-center items-center'>
                {procedure[6].processNo + ". " + procedure[6].instruction}
              </div>
              <div className='text-xl m-3 p-10 flex-1 rounded-2xl bg-[#DADBDD] text-center flex justify-center items-center'>
                {procedure[7].processNo + ". " + procedure[7].instruction}
              </div>
              <div className='text-xl m-3 p-10 flex-1 rounded-2xl bg-secondary text-center flex justify-center items-center'>
                {procedure[8].processNo + ". " + procedure[8].instruction}
              </div>
            </div>
          </div>
        </div>
        <div>
          
        </div>
      </div>
    </section>
  )
}

export default Procedure
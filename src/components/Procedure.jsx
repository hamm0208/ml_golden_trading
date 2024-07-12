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
          <br />
          <div className='flex-col flex bg-primary rounded-2xl p-3'>
            <div className='flex-row flex '>
              <div className='m-3 p-14 w-h-22 h-22 rounded-2xl bg-secondary'>{procedure[0].instruction}</div>
              <div className='m-3 p-14 w-h-22 h-22 rounded-2xl bg-[#DADBDD]'>{procedure[1].instruction}</div>
              <div className='m-3 p-14 w-h-22 h-22 rounded-2xl bg-white'>{procedure[2].instruction}</div>
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
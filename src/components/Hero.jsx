import {React, useState} from 'react'
import {styles} from '../styles'
import {navLinks} from '../constants'
import { Product1Canvas } from './canvas'
const Hero = () => {
  const [active, setActive] = useState("")

  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 lg:top-[150px] top-[100px] mx-auto flex lg:flex-row flex-col items-start gap-10`}>
        <div className='lg:w-5/6 w-full flex flex-col justify-center items-center'>
          <h1 className='text-white text-[25px] lg:text-6xl text-center'>
            Transform Your Ground Leveling with our <br/>
            <span className='text-secondary text-[25px] lg:text-6xl'>
              Flat Floor System
            </span>
          </h1>
          <p className='text-center lg:my-10 my-12 lg:text-3xl text-white'>
          Revolutionize your projects with <span className='text-secondary font-bold'>ML GOLDEN TRADING</span> , through our patented groundbreaking <span className='text-secondary'>self-leveling cement screeding</span> screeding and <span className='text-secondary'>cement mortar screeding systems</span> . Trusted by contractors for unparalleled precision and efficiency.
          </p>
          <a class="bg-white hover:bg-zinc-300 transition duration-500 text-black  cursor-pointer font-bold py-5 px-7 rounded-full" key={navLinks[0].id} href={`#${navLinks[0].id}`} onClick={()=>setActive(navLinks[0].title)}>
              Explore Now
          </a>
        </div>
        <div className='bg-white lg:w-2/5 w-full'>
          test
        </div>
      </div>
    </section>
  )
}

export default Hero
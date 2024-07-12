import React from 'react'
import { styles } from '../styles'

const Procedure = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 lg:top-[130px] top-[100px] mx-auto flex lg:flex-row flex-col items-start gap-10`}>
        Procedure
      </div>
    </section>
  )
}

export default Procedure
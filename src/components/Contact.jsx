import React from 'react'
import {company_circle, company_square, whatsapp} from "../assets/index";

const Contact = () => {
  return (
    <section id='contact' className='h-full my-10 px-5 '>
      <div>
        <h2 className='text-5xl lilita text-center text-secondary'>Contact Us!</h2>
        <h3 className='text-2xl lilita text-center text-primary'>Get in Touch</h3>
      </div>

      <div className='mt-7 flex lg:flex-row flex-col gap-9 '>
        <div className='lg:w-1/2 w-full bg-primary rounded-3xl  p-6 flex gap-10 '>
          <div className='sm:block hidden'>
            <img src={company_square} alt="Company Logo" className='w-36 sm:block hidden'/>
          </div>
          <div className='flex flex-col gap-2 text-sm text-gray-400  '>
            <div className='lg:text-left text-center'>
              <img src={company_square} alt="Company Logo" className='p-1 w-36 sm:hidden block mx-auto'/>
              <h3 className='text-white text-3xl'>ML GOLDEN TRADING <br /> (M) SDN BHD</h3>
              <h4 className='mt-2'>202201016344 (1462041-X)</h4>
            </div>
            <div className='h-[5px] bg-secondary rounded-full'></div>
            <p>
              <span className='text-secondary'>Phone:</span><br />
              +6011-5557 3863 <br />
              +6012-588 3863
            </p>
            <p>
              <span className='text-secondary'>Mail:</span><br />
              mlgoldentrading@gmail.com
            </p>
            <p>
              <span className='text-secondary'>KL address:</span><br />
              No 11, Jalan 10/155, Taman Industrial Bukit OUG 58200 Kuala Lumpur
            </p>
            <p>
              <span className='text-secondary'>KUCHING address:</span><br />
              Ground floor, Lot 11180 (SL 56) Jalan Pending 93450 Kuching Sarawak
            </p>
            <p>
              <span className='text-secondary'>Penang address:</span><br />
              No, 1337, Jalan Tasik Valdor Ria 14200 S.P.S Penang
            </p>
            <a href="https://wa.me/+601155573863" aria-label="Chat on WhatsApp" className='mt-5 xl:mx-0 mx-auto '><img alt="Chat on WhatsApp" src={whatsapp} /></a>

            
          </div>
        </div>
        <div className='lg:w-1/2 w-full'>
          <div className='p-6 bg-[#2E312F] border-2 rounded-3xl'>
            <h3 className='text-3xl lilita text-center text-white  '>Our Factory</h3>
            <p className='border rounded-2xl p-2 mt-2'>
              <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1fbLayoKUbUJfXjFoMfcap1MplHnayHY&ehbc=2E312F"  className='map mx-auto mt-3 w-[100%] h-[40vh]'></iframe>
            </p>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Contact
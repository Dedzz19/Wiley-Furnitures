import React from 'react'
import amaski from '../Img/Amaski.png'
import { IoIosArrowRoundForward } from '@react-icons/all-files/io/IoIosArrowRoundForward';

export default function FeaturedProduct() {
  return (
    <section className='flex place-content-center'>
     <div className='w-fit'>
     <img src={amaski} alt='bedroom'/>
        <div className='mt-4 flex items-center'>
          <p className='text-sm text-offBlack'>Couch</p>
          <h5 className='ml-auto text-base text-black'>From $3,405</h5>
        </div>
        <div className='flex items-center'>
          <h5 className='text-black'>Amaski 3 seater Sofa</h5>
          <IoIosArrowRoundForward className='text-4xl ml-auto' />
        </div>
     </div>
    </section>
  )
}

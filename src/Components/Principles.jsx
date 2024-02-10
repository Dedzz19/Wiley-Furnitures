import React from 'react'
import materials from '../Img/Materials.png'
import factory from '../Img/Factory.png'
import partnership from '../Img/Partnership.png'

export default function Principles() {
  return (
    <section className='bg-white md:px-10 lg:px-28 p-28'>
    <h4 className='text-center pb-16 text-2xl md:text-3xl font-bold'>WF Principles</h4>
    <div className='md:grid grid-flow-col grid-rows-1'>
      <div className='w-fit mx-auto'>
        <img src={materials} alt="Materials" className='mx-auto' />
        <h3 className='uppercase text-center font-bold mt-6 mb-4'>Materials</h3>
        <p className='text-center text-offBlack'>Our Quality wooden materials <br/>from European Wood market<br/>worldwide</p>
      </div>
      <div className=' px-auto md:border-r-2 md:border-l-2'>
        <img src={factory} alt="Materials" className='mx-auto' />
        <h3 className='uppercase text-center font-bold mt-6 mb-4'>Factory</h3>
        <p className='text-center text-offBlack'>Our Quality wooden materials <br/>from European Wood market<br/>worldwide</p>
      </div>
      <div className='w-fit  mx-auto'>
        <img src={partnership} alt="Materials" className='mx-auto' />
        <h3 className='uppercase text-center font-bold mt-6 mb-4'>Partnership</h3>
        <p className='text-center text-offBlack'>Our Quality wooden materials <br/>from European Wood market<br/>worldwide</p>
      </div>
    </div>

  </section>
  )
}

import React from 'react'
import image from '../../Img/Three seater.png'
import { AiOutlineArrowRight } from '@react-icons/all-files/ai/AiOutlineArrowRight'

export default function CollectionItem2() {
  return (
    <header className='md:px-10 lg:px-28 py-10'>
      <section className='md:grid mx-auto grid-cols-2 grid-rows-1'>
      <img src={image} alt='image' className='h-[640px] mx-auto  w-[690px]'/>
        <div className='md:grid mt-5 grid-cols-1 grid-rows-3'>
          <div></div>
          <div className='capitalize text-center'>
            <h3 className='text-base italic '>Couch</h3>
            <h1 className='text-2xl pt-2 py-4'>Amaski 3 seater Sofa</h1>
            <p className='text-lg leading-relaxed pb-6'>Find Your Perfect Match: Browse Our Wide Selection<br/>of Furniture Pieces.Lorem Ipsum dolor</p>
            <div className='bg-lightGray rounded-full w-fit mx-auto p-3 text-2xl cursor-pointer'>
              <AiOutlineArrowRight />
            </div>
          </div>
          <div></div>
        </div>
      </section>
    </header>
  )
}

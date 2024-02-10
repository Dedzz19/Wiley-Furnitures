import React, { useState } from 'react'
import image from '../../Img/Image.png'
import { IoIosArrowRoundForward } from '@react-icons/all-files/io/IoIosArrowRoundForward';
import { BsFillCircleFill } from '@react-icons/all-files/bs/BsFillCircleFill';
import { motion } from 'framer-motion';
import LikeButton from '../LikeButton';

export default function CollectionItem() {
  const [moveUp, setMoveUp]=useState('')
  const [liked, setLiked]=useState(false)

  function translate(){
    setMoveUp(' md:-translate-y-[7rem] -translate-y-[9rem]  ')
  }
  function remove(){
    setMoveUp('')
  }
  return (
    <section className='md:px-10 lg:px-28 w-fit mx-6 my-4'>
      <div className='overflow-hidden h-[30rem]  md:h-img'>
        <motion.img  onMouseOver={translate}  onMouseOut={remove}
         whileHover={{scale:1.15, translateY:-50}} transition={{duration:0.5}} src={image} alt="bed" className=' h-img relative' />
        <LikeButton liked={liked} />
        <div
        onMouseOver={translate}  onMouseOut={remove}
        className={`flex items-center mx-auto gap-3 text-2xl mt-2 bg-white w-fit py-2 px-5 rounded-3xl transition duration-75 ${moveUp} `}>
          <BsFillCircleFill className='text-red-400 cursor-pointer' />
          <BsFillCircleFill className='text-yellow-300 cursor-pointer'/>
          <BsFillCircleFill className='text-green-700 cursor-pointer'/>
          <BsFillCircleFill className='text-blue-500 cursor-pointer'/>          
        </div>
      </div>
        <div className='mt-4 flex items-center'>
            <p className='text-sm text-offBlack'>Couch</p>
            <h5 className='ml-auto text-base text-black'>From $3,405</h5>
          </div>
          <div className='flex items-center'>
            <h5 className='text-black text-lg font-medium'>Amaski 3 seater Sofa</h5>
            <IoIosArrowRoundForward className='text-4xl ml-auto' />
          </div>
    </section>
  )
}

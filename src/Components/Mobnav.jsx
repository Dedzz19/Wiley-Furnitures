import React from 'react'
import {AiOutlineClose} from '@react-icons/all-files/ai/AiOutlineClose'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AiOutlineArrowRight } from '@react-icons/all-files/ai/AiOutlineArrowRight';
import { IoIosArrowForward } from '@react-icons/all-files/io/IoIosArrowForward';
const links=[
  {id:1, text:"Categories", destination:" "},
  {id:2, text:"About", destination:" "},
  {id:3, text:"Cart", destination:" "}
]

export default function Mobnav(props) {
  function resizeing(){
    setOpen(false)
  }
  window.addEventListener('resize', resizeing)
  const open = props.open
  const setOpen = props.setOpen
  return (
    <motion.section 
    className={open?'fixed z-[999] top-0 right-0 md:hidden w-5/12 h-full cursor-pointer bg-offWhite px-4 py-2 transition duration-200 -translate-x-[0]':'fixed translate-x-[60rem] md:hidden'}>
     <div onClick={()=>{setOpen(false)}} className='flex place-content-end cursor-pointer mt-4 text-3xl'> <AiOutlineClose /></div>
      <ul onClick={()=>{setOpen(false)}}>
        {links.map((link,index) => (
          <motion.li
          initial={{translateX:index*50, opacity:0}}
          className='p-3 m-3 transition-colors hover:bg-[#8b8b8b] hover:text-black font-semibold flex cursor-pointer items-center rounded-md border-b text-gray-500'
          transition={{duration:.3, delay:index*.3}}
          whileInView={{translateX:0, opacity:1}}
          key={index}><Link to={link.destination}>{link.text}</Link><IoIosArrowForward className='ml-auto' /></motion.li>
        ))}
      </ul>
    </motion.section>
  )
}

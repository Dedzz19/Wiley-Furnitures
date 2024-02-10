import React, {  useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import FullLogo from '../Img/Logo-full.png'
import { BsSearch } from '@react-icons/all-files/bs/BsSearch';
import { BsHeart } from '@react-icons/all-files/bs/BsHeart';
import { BsPerson } from '@react-icons/all-files/bs/BsPerson';
import { BsBag } from '@react-icons/all-files/bs/BsBag';
import {AiOutlineClose} from '@react-icons/all-files/ai/AiOutlineClose'
import {GiHamburgerMenu} from '@react-icons/all-files/gi/GiHamburgerMenu'
import Mobnav from './Mobnav';
import { motion } from 'framer-motion';


export default function Navbar(props) {
  const Navigate=useNavigate()
  const [fix, setFix]=useState(true)
  const open =props.open
  const setOpen= props.setOpen
  function goHome(){
    Navigate('/Home')
  }
  const links=[
    {id:1, text:"Categories", destination:"/Categories"},
    {id:2, text:"About", destination:"/About"},
    {id:3, text:"Cart", destination:"/Cart"}
  ]
  function setFixed(){
    if(window.scrollY> 400){
      setFix(true)
      console.log(fix)
    }else{
      setFix(false)
    }
  }
  window.addEventListener('scroll', setFixed)

return (
   <header className='overflow-x-hidden'  >
    <div >
    <section className='bg-Nav px-2 md:px-28 md:flex py-3'>
      <motion.h4 
      initial={{translateX:100}}
      animate={{translatex:200}}
      transition={{duration:1, }}
      className='font-bold text-sm md:text-base mr-auto text-center md:text-start'>Get free delivery on every order above #5000.</motion.h4>
     <Link to='/sign-up' className=' md:block hidden'><p className='text-end uppercase'>Sign in / Register</p></Link>
    </section>
    <section className='border-b-2 border-Navb px-4 md:px-10 lg:px-28 py-5 grid grid-rows-1 grid-flow-col'>
      <img src={FullLogo} alt='logo' className='cursor-pointer max-w-full' onClick={goHome}/>
      <div className=' md:flex hidden items-center gap-6 text-hr place-content-center'>
        <span>
          <Link>Category</Link>
        </span>
        <span>
          <Link>Products</Link>
        </span>
        <span className='capitalize '>
          <Link>about</Link>
        </span>
      </div>
      {/* icons */}
      <div className='md:flex hidden items-center gap-7 ml-auto text-lg'>
        <Link><BsSearch /></Link>
        <Link><BsHeart /></Link>
        <Link><BsPerson className=' text-2xl' /></Link>
        <Link><BsBag /></Link>
      </div>
      <div className='ml-auto my-auto text-3xl cursor-pointer text-center md:hidden '>
        <GiHamburgerMenu 
        onClick={()=>{setOpen(true)}} />
      </div>
    </section>
    </div>
   </header>
  )
}

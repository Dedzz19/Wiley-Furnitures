import React, { useState } from 'react'
import '../styles.css'
import { easeInOut, motion, spring } from 'framer-motion';
import { Link } from 'react-router-dom';
import SocialLinks from './SocialLinks';
import PasswordInput from './PasswordInput';
const transition = { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] };

export default function Login() {
  return (
    <div className='lg:h-screen lg:grid sm:grid lg:grid-cols-2 lg:grid-rows-1 grid-cols-1 grid-rows-2'>
      <section className=' w-max mx-auto lg:grid grid-cols-1 grid-rows-3 '>
        <div>
        <motion.h1 
        animate={{transform:'translatey(6rem)'}}
        style={spring}
         transition={transition}
         className='mb-20 font-serif text-center leading-relaxed text-6xl font-semibold'>Log in</motion.h1>
        {/* Links */}
        <motion.div
         animate={{transform:'translatex(32%)'}}
         transition={transition}>
           <SocialLinks />
        </motion.div>
        </div>
        {/* inputs */}
        <div className='mx-auto '>
          <motion.div 
          animate={{margin:[12, 0 ,0, 12]}}
          exit={{transform:'translatex(-100%)', opacity:.5}}
          transition={{duration:.5, easeInOut}}>
            <div><label>Email:</label></div>
            <input type='text' className='border w-100 py-1 font-semibold outline-none px-4 rounded-xl'/>
          </motion.div>
      <motion.div
        animate={{margin:[12, 0 ,0, 12]}}
        exit={{transform:'translatex(-100%)'}}
        transition={{duration:.5, easeInOut}}>
           <PasswordInput label='Password' />            
      </motion.div>
          <motion.p 
          animate={{ transform: "translatex(200px)" }} 
          whileHover={{opacity:1.3}}
           transition={transition} className='w-fit underline text-blue-800 cursor-pointer' >Forgot password?</motion.p>
        </div>

        <div className='mx-auto my-12 md:my-0 md:-mt-8'>
          <motion.button
          whileTap={{scale:0.9}}
          transition={{duration:.5, easeInOut}}
          exit={{y:100, scale:0.6, opacity:0.3}}
          className='bg-blue-600 text-white md:mt-16 lg:my-2 font-semibold text-2xl rounded-full px-10 py-2'>Log in </motion.button>
        </div>
        </section>
        {/* to sign up */}
      <section className=' text-center md:mt-3 lg:mt-0 text-white bg-gradient-to-b lg:h-screen from-pink to-brown grid grid-cols-1 grid-rows-3 '>
        <div></div>
        <div>
        <h1 className='md:text-6xl text-4xl font-bold tracking-wider'>Hello, There!</h1>
        <p className='py-6 font-thin capitalize text-xl md:text-2xl'>Dont have an account? sign up for free</p>
       <Link to='/sign-up'>
          <motion.button  whileHover={{scale:1.3}} animate={{opacity:1}} transition={{ease:[0.43, 0.13, 0.23, 0.96], duration:0.5 }} className='border-2 rounded-full lg:text-lg    border-white px-10 py-2'>Sign up</motion.button>
       </Link>
        </div>
      </section>
    </div>
  )
}

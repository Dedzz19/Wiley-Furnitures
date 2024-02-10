import React from 'react'
import '../styles.css'
import { Link, useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';
import SocialLinks from './SocialLinks';
import PasswordInput from './PasswordInput';
export default function Signup() {
  const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

  return (
    <div className='md:grid grid-cols-2 grid-rows-1 overflow-hidden md:h-screen'>
      <motion.section className='text-center text-white bg-gradient-to-b md:h-screen from-pink to-brown grid grid-cols-1 grid-rows-3'>
        <div></div>
        <motion.div  exit={{opacity:0.5, translate:'translatey(-100%)'}} transition={transition}>
        <motion.h1 initial={{ translateY:100}} 
        transition={transition} animate={{opacity:1, translateY:0}}
        className='lg:text-6xl font-bold tracking-wider'>Welcome Back!</motion.h1>
        <p className='py-6 font-thin capitalize lg:text-2xl'>ALready have an account?</p>
        <Link to='/login'>
        <motion.button whileHover={{scale:1.2}} 
        exit={{opacity:0.8}}  transition={transition}
         className='border-2 rounded-full lg:text-lg border-white px-16 py-2'>Log in</motion.button>
        </Link>
        </motion.div>
      </motion.section>
       {/* to sign up */}
   <motion.section className={`my-16 grid grid-cols-1 grid-rows-3`}>
        <div>
        <h1 className='font-serif text-center leading-relaxed text-6xl font-bold'>Create Account</h1>
        {/* Links */}
        <div className='place-content-center flex'>
           <SocialLinks />
        </div>
        </div>
        <motion.div className='mx-auto '>
          <div className='my-2'>
            <div><label>Email:</label></div>
            <input type='text' className='border w-100 py-1  outline-none px-4 rounded-xl'/>
          </div>
          <div className="my-2">
          <PasswordInput label='Password' />
          </div>
         <PasswordInput label='Confirm Password' />
    </motion.div>

        <div className='mx-auto my-3 '>
          <motion.button whileTap={{scale:0.8}}  className=" bg-blue-600 text-white font-semibold text-2xl rounded-full px-10 py-2">Sign up</motion.button>
        </div>
  </motion.section>
    
       </div>
  )
}

import React,{useState} from 'react'
import { motion } from 'framer-motion'
import {AiOutlineEye} from '@react-icons/all-files/ai/AiOutlineEye'
import { AiOutlineEyeInvisible } from '@react-icons/all-files/ai/AiOutlineEyeInvisible';

export default function PasswordInput(props) {
  const[inputType, setInputType]=useState('password')
  const[eyes, setEyes]=useState('block')
  const[noEyes, setNoEyes]=useState('hidden')
  
 function passwordVisible(){
  setInputType('text')
  setEyes('hidden')
  setNoEyes('block')
 } 
 function passwordInvisible(){
  setInputType('password')
  setEyes('block')
  setNoEyes('hidden')
 }
  return (
    <div>
        <label>{props.label}</label>
        <span  className='flex items-center'>
          <input type={`${inputType}`} className='border w-100 py-1  outline-none px-4 rounded-xl'/>
          <motion.span
          className={` ${eyes} opacity-5`} whileHover={{opacity:1}}>
            <AiOutlineEye onClick={passwordVisible} className='text-2xl -ml-9 cursor-pointer' />
          </motion.span>
          <motion.span className='opacity-5' whileHover={{opacity:1}}>
            <AiOutlineEyeInvisible onClick={passwordInvisible} className={`${noEyes} text-2xl -ml-9 cursor-pointer`} />
          </motion.span>
        </span>
    </div>
  )
}

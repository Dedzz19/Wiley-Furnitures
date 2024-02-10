import React, { useState } from 'react'
import { AiOutlineHeart } from '@react-icons/all-files/ai/AiOutlineHeart';
import { AiFillHeart } from '@react-icons/all-files/ai/AiFillHeart';
import { motion } from 'framer-motion';

export default function LikeButton(props) {
  const [fill, setFill]=useState(<AiFillHeart />)
  const [liked, setLiked]=useState(props.liked)

  function like(){
    const id = liked
    if (id ){
      setFill(<AiOutlineHeart />)
      setLiked(false)
    }else{
      setFill(<AiFillHeart />)
      setLiked(true)
    }
  }

  return (
    <section>
    <motion.div 
      onClick={like}
      className='-translate-y-[30rem]  duration-75  cursor-pointer bg-white shadow-md p-2 ml-auto mr-8 w-fit  text-2xl rounded-full'>
        {fill} 
    </motion.div>
    </section>
  )
}

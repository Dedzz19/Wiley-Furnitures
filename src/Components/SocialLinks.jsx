import React from 'react'
import {CgFacebook} from "@react-icons/all-files/cg/CgFacebook";
import {AiOutlineGooglePlus} from '@react-icons/all-files/ai/AiOutlineGooglePlus'
import {TiSocialLinkedin} from '@react-icons/all-files/ti/TiSocialLinkedin'

export default function SocialLinks() {
  return (
    <div className=' py-4 gap-4 place-content-center flex items-center w-fit '>
            <span
            className='border-gray-200 border rounded-full p-2 '>
            <CgFacebook className='text-gray-700 text-3xl' />
            </span>
            <span className='border-gray-200 border rounded-full p-2 '>
            <AiOutlineGooglePlus className='text-gray-700 text-3xl' />
            </span>
            <span className='border-gray-200 border rounded-full p-2 '>
            <TiSocialLinkedin className='text-gray-700 text-3xl' />
            </span>
    </div>
  )
}

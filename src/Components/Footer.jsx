import React from 'react'
import logo from '../Img/Logo.png'
import { Link } from 'react-router-dom'
import {GiPlainCircle} from '@react-icons/all-files/gi/GiPlainCircle'
import {FaFacebook} from "@react-icons/all-files/fa/FaFacebook";
import {AiOutlineInstagram} from "@react-icons/all-files/ai/AiOutlineInstagram";
import {AiOutlinePlus} from "@react-icons/all-files/ai/AiOutlinePlus";
import {ImTwitter} from "@react-icons/all-files/im/ImTwitter";
// const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });
export default function Footer() {

  return (
    <div>
      <section className='grid grid-rows-1 grid-cols-2 items-center px-2 bg-lightGray py-6 md:px-10 lg:px-28'>
        <div className='flex place-content-center'>
        <p className='md:text-lg text-sm lg:w-2/3'>Sign up for promotions and recieve updates on our upcoming products</p>
        </div>
        <div className='md:flex items-center place-content-center'>
          <input type='text' placeholder='Enter your e-mail address' 
          className='rounded-tl-md rounded-bl-md w-6/12 placeholder:text-sm outline-none px-3 py-3 border-2 border-border' />
          <button className=' rounded-tr-sm rounded-br-sm bg-black text-white -m-1 p-3 border-2 border-black '>Sign up</button>
        </div>
      </section>
      <section className=' bg-FooterBg uppercase'>
      <section className=' text-hr md:px-10 lg:px-28 md:grid grid-rows-1 pt-12 pb-20 grid-cols-3 '>
        <div className=''>
          {/* Image side */}
          <div>
          <div className=' border-hr hidden md:block md:border-b-2 ml-2 pb-8'>
            <img src={logo} alt="logo" />
          </div>
         <div className='flex items-center mt-4 md:px-0 px-4'>
         <h2>Contact Us</h2>
         <div className='ml-auto mr-6 md:hidden'><AiOutlinePlus /></div>
         </div>
          <div className='hidden md:block'>
          <div className='my-5'><Link>Who we are</Link></div>
          <div><Link>Our Projects</Link></div>
          </div>
          </div>
        </div>
        {/* Collections side */} 
        <div className='md:ml-40 md:mt-12 md:w-8/12'>
          <div className='border-hr md:border-b-2 md:pb-5'>
            {/* w plus */}
            <div className='flex items-center mt-4  md:px-0 px-4'>
              <h2>Collections</h2>
              <div className='ml-auto mr-6 md:hidden'><AiOutlinePlus /></div>
            </div>
          </div>
         <div className='hidden md:block'>
              <div className='mt-4'><Link>Bed</Link></div>
              <div className='my-5'><Link>Tv console</Link></div>
              <div><Link>Tables</Link></div>
              <div  className='mt-4'><Link>Sofa</Link></div>
              <div className='my-5'><Link>Chairs</Link></div>
              <div><Link>Coffe table</Link></div>
         </div>
        </div>
        {/* Support side*/}
        <div className='md:ml-40 md:mt-12 md:w-8/12'>
        <div className='border-hr md:border-b-2 md:pb-5'>
          <div className='flex items-center mt-4  md:px-0 px-4'>
            <h2>Supports</h2>
            <div className='ml-auto mr-6 md:hidden'><AiOutlinePlus /></div>
          </div>
        </div>
         <div className='hidden md:block'>
          <div className='mt-4'><Link>Faq</Link></div>
            <div className='my-5'><Link>customer care</Link></div>
         </div>
        </div>
      </section>
      <div className=' hidden md:px-10 lg:px-28 text-sm md:grid grid-rows-1 grid-cols-3 items-center'>
        <h5>©2023 WILLS FURNITURE ALL RIGHTS RESERVED</h5>
        <div className='flex items-center place-content-center gap-8'> 
          <div className='flex items-center'>
            <GiPlainCircle />
            <p>privacy policy</p>
          </div>
          <div className='flex items-center'>
            <GiPlainCircle />
            <p>terms and conditions</p>
          </div>
        </div>
        <div className=' text-end ml-auto py-4 gap-4 hidden md:flex items-center w-fit '>
            <span className='bg-social border-gray-200 border rounded-full p-2 '>
            <AiOutlineInstagram className='text-white text-3xl' />
            </span>
            <span className='bg-social border-gray-200 border rounded-full p-2 '>
            <ImTwitter className='text-white text-3xl' />
            </span>
            <span
            className='bg-social border-gray-200 border rounded-full p-2 '>
            <FaFacebook className='text-white text-3xl' />
            </span>
    </div>
      </div>
      </section>
    </div>
  )
}

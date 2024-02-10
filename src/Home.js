import React from 'react'
import Navbar from "./Components/Navbar";
import home1 from './Img/Home 1.png'
import bed from './Img/Bed console.png'
import { IoIosArrowForward } from '@react-icons/all-files/io/IoIosArrowForward';
import {AiOutlineArrowRight} from '@react-icons/all-files/ai/AiOutlineArrowRight'
import FeaturedProduct from './Components/FeaturedProduct';
import Principles from './Components/Principles';
import FeaturedCollection from './Components/Collection page/FeaturedCollection';
import Footer from './Components/Footer';
import "./styles.css"
import Mobnav from './Components/Mobnav';
export default function Home(props) {
  const open = props.open
  const setOpen = props.setOpen
  return (
    <>
    <Mobnav open={open} setOpen={setOpen}/>
     <div className={open?' opacity-50 ':""}>
     <Navbar open={open} setOpen={setOpen} />
      <section className='lg:pl-28 md:pl-10 relative md:flex items-center py-10'>
      <div className='flex-initial order-last'>
        <img src={home1} alt='a classic bed'/> 
        </div>
        <div className='flex-none'>
          <h1 className='md:text-6xl text-2xl text-center font-bold'>Collection of Wooden <br/> and Metal Furniture. </h1>
          <p className='my-3 md:my-9 leading-loose md:text-xl'>Lorem ipsum dolor sit amet consectetur. Eu in nec sit gravida <br className='hidden md:block'/> lorem eu magna nunc erat. Auctor proin sed vulputate vulputate<br/> nibh lorem.</p>
          <div className=' bg-black w-fit flex items-center text-white p-2'>
          <button  className='capitalize'>Shop collections</button>
          <IoIosArrowForward />
          </div>
        </div>
      </section>
      {/* Featured Products side */}
      <section className='bg-smokeWhite py-32'>
        <h1 className='font-bold text-3xl text-center'>Featured Products</h1>
        <p className='text-center mt-4 text-offBlack'>Lorem ipsum dolor sit amet consectetur. Vitae fringilla tellus praesent pellentesque vulputate condimentum odio cursus neque.<br/> Sodales eu nunc odio auctor arcu arcu placerat facilisi suspendisse.</p>
        <div className='md:px-10 lg:px-28 pt-16 md:grid grid-flow-col grid-rows-1'>
          <FeaturedProduct />
          <FeaturedProduct />
          <FeaturedProduct />
        </div>
      </section>
      {/* Wf Principles */}
      <Principles />
      {/* Featured Collection */}
      <FeaturedCollection />
      {/*  */}
      <div className='text-center py-32'>
        <h3 className='text-darkGray text-2xl italic'>So what are you waiting for? Browse our wide selection of<br/> furniture pieces today and find the perfect match for your <br/> home.</h3>
        <div className=' mt-8 border-social mx-auto border-b-8 w-3/12'>
        </div>
      </div>
      {/*Bed console side  */}
      <section className='md:grid grid-cols-2 py-4 gap-0 grid-rows-1 bg-offWhite'>
        <img src={bed} alt='bed console' />
        <div className='md:grid grid-cols-1 grid-rows-2'>
          <span></span>
          <div className='md:ml-28 mt-4 md:mt-0 ml-4'>
            <h3 className='text-3xl font-bold text-offBlack'>Bed Consoles</h3>
            <p className='mt-2 mb-2'>Lorem ipsum dolor sit amet consectetur. <br/> Vel ipsum viverra quis varius. Lacinia sed.</p>
            <p className='text-offBlack font-bold'>$1,200-$6,500</p>
            <div className='bg-black mt-4 flex items-center gap-3 w-fit px-4 py-2 rounded-md text-white cursor-pointer'>
              <p>View Collections</p>
              <AiOutlineArrowRight />
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </div>
    </>
  )
}

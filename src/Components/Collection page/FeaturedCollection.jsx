import React from 'react'
import table from '../../Img/table.png'
import tvconsole from '../../Img/Tv console.png'
import { IoIosArrowRoundForward } from '@react-icons/all-files/io/IoIosArrowRoundForward';
import { IoIosArrowRoundBack } from '@react-icons/all-files/io/IoIosArrowRoundBack';

export default function FeaturedCollection() {
  return (
      <section className='bg-console'>
      <header className='md:px-10 lg:px-28 py-20 w-9/12 relative'>
      <img src={table} alt="table" className='mx-auto py-4' />
      <section className='flex mt-6 items-center'>
        <div>
          <h4 className='text-2xl font-bold'>Name Of Collection</h4>
          <h3 className='text-xl mt-4 font-medium'>+ SHOP COLLECTION</h3>
        </div>
        <div className='flex ml-auto items-center gap-4'>
          <IoIosArrowRoundBack className='text-4xl'/>
          <IoIosArrowRoundForward className='text-4xl' />
        </div>
      </section>
      </header>
      </section>
  )
}

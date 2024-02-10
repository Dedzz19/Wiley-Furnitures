import React, {useState} from 'react'
import Navbar from './Components/Navbar'
import Dropdown from './Components/Dropdown'
import CollectionItem from './Components/Collection page/CollectionItem'
import CollectionItem2 from './Components/Collection page/CollectionItem2'
import Mobnav from './Components/Mobnav'

export default function Collections(props) {
  const open = props.open
  const setOpen = props.setOpen
  return (
    <>
    <Mobnav open={open} setOpen={setOpen}/>
    <div className={open? 'opacity-50':""}>
      <Navbar open={open} setOpen={setOpen}/>
      {/*  */}
    <section className=' bg-collections pt-40 pb-20'>
      <h1 className='md:text-6xl text-3xl text-center font-bold uppercase'>All collections</h1>
     <span className='flex items-center gap-2 uppercase text-white text-center pt-4 place-content-center'>
     <p >Home &gt;</p>
     <p> collections</p>
     </span>
    </section>
    {/*  */}
    <section className='grid grid-rows-1 md:px-10 lg:px-28 grid-cols-3 py-12'>
      <Dropdown name='Products (20)' />
      <div className='flex items-center place-content-center gap-5'>
        <Dropdown name='collection'/>
        <Dropdown name='price'/>
      </div>
      <div className='flex place-content-end'>
      <Dropdown name='sort' />
      </div>
    </section>
    {/*  */}
      <section className='lg:flex'>
        <div>
        <CollectionItem />
        </div>
        <div>
        <CollectionItem />
        </div>
      </section>
    {/*  */}
    <CollectionItem2 />
      
    </div>
    </>
  )
}

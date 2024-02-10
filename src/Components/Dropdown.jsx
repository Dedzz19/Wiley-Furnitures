import React from 'react'
import { BsFillCaretDownFill } from '@react-icons/all-files/bs/BsFillCaretDownFill';

export default function Dropdown(props) {
  return (
    <div className='flex items-center gap-2'>
        <h3 className='uppercase font-semibold text-base'>{props.name}</h3>
        <BsFillCaretDownFill />
    </div>
  )
}

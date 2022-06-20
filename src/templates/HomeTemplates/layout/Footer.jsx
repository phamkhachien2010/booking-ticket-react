import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='bg-gray-800'>
      <div className="py-6 text-sm text-center text-white">
        © 2022 Copyright by
        <NavLink to='/' className='text-purple-200 hover:text-purple-200 hover:underline ml-2'>
          Hafa team.
        </NavLink>
        <span className='text-white ml-2'><i className="fa fa-phone"> 0123456789</i></span>
      </div>
    </div>
  )
}

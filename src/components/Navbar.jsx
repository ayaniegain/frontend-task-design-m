import React from 'react'

import Brandlogo from "../assets/top/brand-logo.png"
import heart from "../assets/top/mdi_heart-outline.png"
import user from "../assets/top/user.png"

function Navbar() {
  return (
    <div className='flex justify-around items-center py-1'>
    <div>
        <img src={Brandlogo} alt="brand" />
    </div>

    <div className='flex gap-10 justify-center item-center'>

    <div className='flex flex-row justify-center align-middle items-center gap-8 font-manrope '>

        <h4 className='font-bold '>Home</h4>
        <h4>Services</h4>
        <h4>System Funnels</h4>
        <h4>Sign Up/Log in</h4>

    </div>
    <div className='flex justify-between align-middle items-center gap-6'>
        <button className='bg-white text-gold-500 border border-yellow-500 text-yellow-500 rounded-full px-4 py-2'>Become a Tasker</button>
        <img src={heart} alt="heart" className='h-8 w-8' />
        <img src={user} alt="user"  className='h-7 w-7' />
    </div>
    </div>

    </div>
  )
}

export default Navbar
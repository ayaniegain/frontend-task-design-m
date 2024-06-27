import React from 'react';
import Brandlogo from '../assets/top/brand-logo.png';
import heart from '../assets/top/mdi_heart-outline.png';
import user from '../assets/top/user.png';

function Navbar() {
  return (
    <div className='flex justify-around items-center py-1'>
      <div>
        <img src={Brandlogo} alt='brand' />
      </div>

      <div className='flex flex-col md:flex-row gap-2 md:gap-10 justify-center items-center mt-4 md:mt-0'>
        <div className='flex flex-row justify-center items-center gap-4 font-manrope text-sm md:text-base'>
          <h4 className='font-bold'>Home</h4>
          <h4>Services</h4>
          <h4>System Funnels</h4>
          <h4>Sign Up/Log in</h4>
        </div>

        <div className='flex justify-between items-center gap-4 md:gap-6 mt-4 md:mt-0'>
          <button className='bg-white border border-yellow-500 text-yellow-500 rounded-full px-3 py-1 md:px-4 md:py-2 text-xs md:text-sm'>
            Become a Tasker
          </button>
          <img src={heart} alt='heart' className='h-6 w-6 md:h-8 md:w-8' />
          <img src={user} alt='user' className='h-5 w-5 md:h-7 md:w-7' />
        </div>
      </div>
    </div>
  );
}

export default Navbar;

import React from 'react'

function User() {
  return (
    <div className='flex flex-col md:flex-row h-44 md:justify-center gap-10 md:gap-48 items-center bg-yellow-500 text-white text-manrope tracking-wider p-4'>
      <div className='flex flex-col justify-center items-center'>
        <h2 className='text-3xl font-bold'>642+</h2>
        <span className='text-sm'>Locks Installed</span>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <h2 className='text-3xl font-bold'>746+</h2>
        <span className='text-sm'>Happy Customers</span>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <h2 className='text-3xl font-bold'>3456+</h2>
        <span className='text-sm'>Coffee Cups</span>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <h2 className='text-3xl font-bold'>431+</h2>
        <span className='text-sm'>Premises Secured</span>
      </div>
    </div>
  )
}

export default User

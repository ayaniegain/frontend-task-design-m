import React from 'react'

function Auth() {
  return (
    <div className="bg-yellow-500 text-white h-40 flex items-center gap-16 justify-center">
      <h2 className="text-base font-bold">STAY TUNED WITH UPDATES</h2>
      <input 
        type="text" 
        placeholder="Enter your Email" 
        className="bg-yellow-500 text-white placeholder-white rounded-full border border-white py-2 px-32 outline-none text-left pl-4"
      />
      <button 
        className="bg-[#FFFEFE] text-yellow-500 font-semibold py-2 px-6 rounded-full">
        SIGN UP
      </button>
    </div>
  )
}

export default Auth

import React from 'react';

function Auth() {
  return (
    <div className="bg-yellow-500 text-white h-40 flex flex-col items-center justify-center gap-4 md:flex-row md:justify-center md:gap-16">
      <h2 className="text-sm md:text-base font-bold">STAY TUNED WITH UPDATES</h2>
      <div className="flex flex-col items-center md:flex-row md:items-center gap-4">
        <input
          type="text"
          placeholder="Enter your Email"
          className="bg-yellow-500 text-white placeholder-white rounded-full border border-white py-1 px-6 md:py-2 md:px-32 outline-none text-left md:pl-4 text-xs md:text-base"
        />
        <button className="bg-[#FFFEFE] text-yellow-500 font-semibold py-1 px-4 md:py-2 md:px-6 rounded-full text-xs md:text-base">
          SIGN UP
        </button>
      </div>
    </div>
  );
}

export default Auth;

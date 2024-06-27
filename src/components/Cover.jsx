import React from 'react';
import backgroundImage from '../assets/top/banner.png';
import search from '../assets/top/search.png';

function Cover() {
  return (
    <div
      className="relative bg-cover bg-center h-[500px]"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-center p-4">
        <h1 className="text-white text-[64px] font-bold mb-4 leading-[78px] text-center" style={{ fontFamily: '', fontWeight: 600 }}>
          Create the best smart home
        </h1>
        <span className="text-white text-lg mb-6 text-center">
          Ready to dive into the internet of things to automate your home? 
          Start with the top <br />products we’ve tested for every room
        </span>
        <div className="flex items-center">
          <input
            type="text"
            className="border border-white px-20 py-1.5 rounded-l-full focus:outline-none bg-transparent text-white"
          />
          <button className="bg-yellow-500 text-white px-4 py-2 rounded-r-full">
            <img src={search} alt="search" className="h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cover;

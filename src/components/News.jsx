import React from 'react';
import line from "../assets/last/line.png";
import cnn1 from "../assets/last/cnn1.png";
import cnn2 from "../assets/last/cnn2.png";
import cnn3 from "../assets/last/cnn3.png";

function News() {
  return (
    <div className="py-10 px-4">
      <div className="text-center">
        <div className="flex items-center justify-center gap-2">
          <img src={line} alt="" className="h-1 w-10" />
          <h2 className="text-2xl">News</h2>
          <img src={line} alt="" className="h-1 w-10" />
        </div>
        <h2 className="text-3xl tracking-widest font-semibold font-manrope mt-10">Latest Article</h2>
      </div>
      <section className="flex flex-col md:flex-row justify-center gap-6 mt-6">
        {[cnn1, cnn2, cnn3].map((image, index) => (
          <div 
            key={index}
            className="flex flex-col items-center text-center shadow-lg hover:bg-yellow-500 hover:text-white transition-all mt-10 w-full md:w-1/3 max-w-xs"
          >
            <img src={image} alt="" className="mb-4 w-full" />
            <h2 className="text-xl font-bold mb-2">
              WE NEED A <br />
              RENT ROOM FOR PARTY
            </h2>
            <span className="text-sm mb-4">
              Many desktop publishing packages and <br /> web page editors now use Lorem Ipsum <br />
              as their default model text
            </span>
            <button className="mb-4">
              Read More
            </button>
          </div>
        ))}
      </section>
    </div>
  )
}

export default News;

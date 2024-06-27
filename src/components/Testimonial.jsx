import React from "react";

import line from "../assets/testmonial/line.png";
import arrowleft from "../assets/testmonial/arrowleft.png";
import arrowright from "../assets/testmonial/arrowright.png";
import dot1 from "../assets/testmonial/dot1.png";
import dot2 from "../assets/testmonial/dot2.png";
import people from "../assets/testmonial/people.png";

function Testimonial() {
  return (
    <div className="flex flex-col justify-center gap-10 items-center bg-lightGold py-16 px-4">
      <section className="text-center">
        <div className="flex flex-row gap-2 items-center justify-center">
          <img src={line} alt="" className="h-1 w-10" />
          <h2 className="text-2xl text-yellow-500">Testimonial</h2>
          <img src={line} alt="" className="h-1 w-10" />
        </div>
        <h2 className="text-2xl tracking-widest font-semibold font-manrope mt-2">
          What Our Clients Say
        </h2>
      </section>
      <section className="flex flex-col justify-center items-center text-center">
        <img src={people} alt="" className="h-20 w-20" />
        <h2 className="mt-2 px-4">
          It is a long established fact that a reader will be distracted by the
          readable <br /> content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a <br />more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making <br /> it
          look like readable English.
        </h2>
      </section>
      <section className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-64">
        <button className="bg-yellow-500 h-12 w-12 flex justify-center items-center rounded-full">
          <img src={arrowleft} alt="left arrow" className="h-6 w-6" />
        </button>
        <div className="flex flex-col justify-center items-center gap-2">
          <h2 className="text-xl font-semibold">WALTER DOYLE</h2>
          <span className="text-sm">HAPPY CLIENT</span>
          <div className="flex flex-row justify-center gap-2 items-center">
            <img src={dot1} alt="dot1" />
            <img src={dot2} alt="dot2" />
            <img src={dot2} alt="dot2" />
          </div>
        </div>
        <button className="bg-yellow-500 h-12 w-12 flex justify-center items-center rounded-full">
          <img src={arrowright} alt="right arrow" className="h-6 w-6" />
        </button>
      </section>
    </div>
  );
}

export default Testimonial;

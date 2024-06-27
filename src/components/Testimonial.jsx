import React from "react";

import  line from "../assets/testmonial/line.png"
import  arrowleft from "../assets/testmonial/arrowleft.png"
import  arrowright from "../assets/testmonial/arrowright.png"
import  dot1 from "../assets/testmonial/dot1.png"
import  dot2 from "../assets/testmonial/dot2.png"
import  people from "../assets/testmonial/people.png"

function Testimonial() {
  return (
    <div className="flex flex-col justify-center gap-10 items-center bg-lightGold py-16">
      <section className="text-center">

<div className='flex flex-row gap-10 items-center mx-[600px] '>
<img src={line} alt="" className="mx-auto  h-1 w-10" />
<h2 className='text-2xl text-yellow-500'>Testimonial</h2>
<img src={line} alt="" className="mx-auto  h-1 w-10" />
</div>
<h2 className="text-2xl tracking-widest font-semibold font-manrope mt-2 ">What Our Client Say</h2>
</section>
      <section className="flex flex-col justify-center items-center ">
        <img src={people} alt="" className="h-20 w-20"/>
        <h2 className="text-center mt-2">
          It is a long established fact that a reader will be distracted by the
          readable <br /> content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a <br />more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making <br /> it
          look like readable English.
        </h2>
      </section>
      <section className="flex flex-row justify-between gap-64 ">
        <article className="bg-yellow-500 h-12">

        <img src={arrowleft} alt=""/>
        </article>
        <div className="flex flex-col justify-center items-center gap-4">
          <h2 className="text-xl font-semibold">WALTER DOLYE</h2>
          <span className="text-sm -mt-2">HAPPY CLIENT</span>
          <div className="flex flex-row justify-center gap-2 items-center">
            <img src={dot1} alt="" />
            <img src={dot2} alt="" />
            <img src={dot2} alt="" />
          </div>
        </div>
        <article className="bg-yellow-500 h-12">


        <img src={arrowright} alt="" />
        </article>
      </section>
    </div>
  );
}

export default Testimonial;

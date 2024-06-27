import React from "react";
import logo1 from "../assets/mid/logo1.png";
import logo2 from "../assets/mid/logo2.png";
import logo3 from "../assets/mid/logo3.png";
import logo4 from "../assets/mid/logo4.png";
import logo5 from "../assets/mid/logo5.png";
import img1 from "../assets/mid/img1.png";

function Checkout() {
  return (
    <div className="py-6 bg-lightGold">
      <div className="flex justify-center items-center text-3xl text-center font-bold font-manrope tracking-wider ">
        <h2>
          Check out <br />
          our home improvement services
        </h2>
      </div>
      <div className="flex justify-center pt-10 gap-36  items-center">
      <div className="flex flex-col justify-center items-center ">

      <article className="bg-yellow-500 h-20 w-20 rounded-full shadow-md flex justify-center items-center">

            <img src={logo1} alt="" className="h-12 w-12" />
          </article>
          <span>Assembly</span>
        </div>
        <div className="flex flex-col justify-center items-center ">
          <article className="bg-white h-20 w-20 rounded-full shadow-md flex justify-center items-center">
            <img src={logo2} alt="" className="h-12 w-12"/>
          </article>
          <span>Cleaning</span>
        </div>

        <div className="flex flex-col justify-center items-center ">

        <article className="bg-white h-20 w-20 rounded-full shadow-md flex justify-center items-center">

            <img src={logo3} alt="" className="h-12 w-12"/>
          </article>
          <span>Moving</span>
        </div>

        <div className="flex flex-col justify-center items-center ">

        <article className="bg-white h-20 w-20 rounded-full shadow-md flex justify-center items-center">

            <img src={logo4} alt="" className="h-12 w-12" />
          </article>

          <span>Painting</span>
        </div>

        <div className="flex flex-col justify-center items-center ">

        <article className="bg-white h-20 w-20 rounded-full shadow-md flex justify-center items-center">

            <img src={logo5} alt="" className="h-12 w-12"/>
          </article>
          <span>Home Repairs</span>
        </div>
      </div>

      <section className="flex flex-row justify-center gap-20 py-20">
  <div className="flex flex-col justify-between ">
    <h2 className="tracking-wider">Our handymen are extremely well-qualified <br />
      and have years of professional experience under their <br />
      belt. experience under their belt
    </h2>
    <div className="grid grid-cols-2 gap-4 mt-6">
      <button className="py-2 px-4 rounded-full border border-gray-800">IKEA Assembly</button>
      <button className="py-2 px-4 rounded-full border border-gray-800">Furniture Assembly</button>
      <button className="py-2 px-4 rounded-full border border-gray-800">Crib Assembly</button>
      <button className="py-2 px-4 rounded-full border border-gray-800">PAX Assembly</button>
      <button className="py-2 px-4 rounded-full border border-gray-800">Desk Assembly</button>
    </div>
    <button className=" bg-yellow-500 text-white py-2 w-24 mb-2 rounded-full">View more</button>
  </div>
  <div className="">
    <img src={img1} alt="" className="h-96" />
  </div>
</section>


    </div>
  );
}

export default Checkout;

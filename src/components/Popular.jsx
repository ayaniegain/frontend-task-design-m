import React from "react";

import img2 from "../assets/mid/img2.png";
import img3 from "../assets/mid/img3.png";
import img4 from "../assets/mid/img4.png";
import img5 from "../assets/mid/img5.png";
import img6 from "../assets/mid/img6.png";
import img7 from "../assets/mid/img7.png";

function Popular() {
  return (
    <section className="py-10">
      <h2 className="text-center text-3xl font-manrope font-bold tracking-widest">
        Popular Projects
      </h2>
      
      <div className="flex flex-row max-w-7xl mx-auto flex-wrap gap-10 justify-center items-center pt-20">
        <div
          className="flex flex-col text-center items-center shadow-lg pb-8"
          style={{ background: "#F9AC250F" }}
        >
          <img src={img2} alt="" className="h-72" />
          <h2 className="text-xl mt-2">Smart Home Devices</h2>
          <span>Projects starting at $49</span>
        </div>
        <div
          className="flex flex-col text-center items-center shadow-lg pb-8"
          style={{ background: "#F9AC250F" }}
        >
          <img src={img3} alt="" className="h-72" />
          <h2 className="text-xl mt-2">Home Automation Services</h2>
          <span>Projects starting at $49</span>
        </div>
        <div
          className="flex flex-col text-center items-center shadow-lg pb-8"
          style={{ background: "#F9AC250F" }}
        >
          <img src={img4} alt="" className="h-72" />
          <h2 className="text-xl mt-2">Energy management</h2>
          <span>Projects starting at $49</span>
        </div>
        <div
          className="flex flex-col text-center items-center shadow-lg pb-8"
          style={{ background: "#F9AC250F" }}
        >
          <img src={img6} alt="" className="h-72" />
          <h2 className="text-xl mt-2">Security and Surveillance</h2>
          <span>Projects starting at $49</span>
        </div>
        <div
          className="flex flex-col text-center items-center shadow-lg pb-8"
          style={{ background: "#F9AC250F" }}
        >
          <img src={img5} alt="" className="h-72" />
          <h2 className="text-xl mt-2">Integration and Compatibility</h2>
          <span>Projects starting at $49</span>
        </div>
      
        <div
          className="flex flex-col text-center items-center shadow-lg pb-8"
          style={{ background: "#F9AC250F" }}
        >
          <img src={img7} alt="" className="h-72" />
          <h2 className="text-xl mt-2">Professional installation</h2>
          <span>Projects starting at $49</span>
        </div>

       
      </div>
    </section>
  );
}

export default Popular;

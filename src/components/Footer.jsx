import React from "react";

import facebook from "../assets/footer/facebook-f 1.png";
import linkdin from "../assets/footer/linkedin-in 1.png";
import twitter from "../assets/footer/twitter 1.png";
import phone from "../assets/footer/phone-telephone.png";
import message from "../assets/footer/message.png";
import location from "../assets/footer/loc.png";
import line from "../assets/last/line.png";

function Footer() {
  return (
    <section className="text-white bg-black py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-4 md:px-20">
        <div className="flex flex-col justify-center items-center md:items-start">
          <h2 className="font-bold text-center md:text-left">Home Automator</h2>
          <p className="text-center md:text-left">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor amet sint.
            Amet minim mollit non deserunt ullamco est sit aliqua.
          </p>
          <div className="flex gap-4 mt-4">
            <div className="bg-yellow-500 h-7 w-7 rounded-full flex justify-center items-center">
              <img src={facebook} alt="Facebook" />
            </div>
            <div className="bg-yellow-500 h-7 w-7 rounded-full flex justify-center items-center">
              <img src={twitter} alt="Twitter" />
            </div>
            <div className="bg-yellow-500 h-7 w-7 rounded-full flex justify-center items-center">
              <img src={linkdin} alt="LinkedIn" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
      <div className="flex flex-col ">

            <h2 className="font-bold">Services</h2>
        <img src={line} alt="" className=" mt-1 h-0.5 w-20" />

          </div>
          <span>Furniture</span>
          <span>Mount art or shelves</span>
          <span>Mount a TV</span>
          <span>Plumbing repair</span>
        </div>
        <div className="flex flex-col gap-4">
        <div className="flex flex-col">

            <h2 className="font-bold">Useful Links</h2>
        <img src={line} alt="" className="mt-1 h-0.5 w-20" />

          </div>
          <span>Home</span>
          <span>About us</span>
          <span>Blog</span>
          <span>Contact Us</span>
        </div>
        <div className="flex flex-col gap-4">
      <div className="flex flex-col ">

            <h2 className="font-bold">Contact</h2>
        <img src={line} alt="" className=" mt-1  h-0.5 w-20" />
          </div>
          <div className="flex gap-2 items-center">
            <img src={phone} alt="Phone" className="h-5" />
            <span>+1 405 638-5343</span>
          </div>
          <div className="flex gap-2 items-center">
            <img src={message} alt="Email" className="h-5" />
            <span>homeautomator@gmail.com</span>
          </div>
          <div className="flex gap-2 items-start">
            <img src={location} alt="Location" className="h-6" />
            <span>2919 nW Cache rd, <br /> lawton, oK 73505, <br /> United States</span>
          </div>
        </div>
      </div>
      <h4 className="text-center text-sm mt-8">Copyright by Home Automator @ 2024. All rights reserved</h4>
    </section>
  );
}

export default Footer;

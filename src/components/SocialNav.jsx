import React from 'react';

import location from "../assets/top/location.png";
import message from "../assets/top/message.png";
import twitter from "../assets/top/twitter.png";
import facebook from "../assets/top/facebook.png";
import pintrest from "../assets/top/pintrest.png";
import instagram from "../assets/top/instagram.png";

function SocialNav() {
  return (
    <div className='flex flex-col md:flex-row bg-black w-full justify-between p-4'>
      <div className='flex flex-col md:flex-row items-center mx-4 md:mx-20 mb-4 md:mb-0'>
        <div className='flex items-center mx-2 mb-2 md:mb-0'>
          <img src={location} alt="location" className='h-4 w-4 mr-2' />
          <h4 className='text-white text-xs'>12880 SW Scholls Ferry Rd Tigard, OR 97223</h4>
        </div>
        <div className='flex items-center mx-2'>
          <img src={message} alt="message" className='h-4 w-4 mr-2' />
          <h4 className='text-white text-xs'>info@GreatGreekMediterraneanGrill.com</h4>
        </div>
      </div>
      <div className='flex justify-center md:justify-between gap-4 text-center items-center mx-4 md:mx-20'>
        <img src={twitter} alt="twitter" className='h-4 w-4' />
        <img src={facebook} alt="facebook" className='h-4 w-4' />
        <img src={pintrest} alt="pintrest" className='h-4 w-4' />
        <img src={instagram} alt="instagram" className='h-4 w-4' />
      </div>
    </div>
  );
}

export default SocialNav;

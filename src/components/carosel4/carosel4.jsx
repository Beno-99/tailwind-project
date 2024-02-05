import React from "react";

import Africa from '../../assets/image/Africa.jpg';
import africaLogo from '../../assets/image/africaFree.svg';
import { FaLocationDot } from "react-icons/fa6";


const Carosel4 =()=>{
  return(
    <>
      <div class="w-[100%] sm:h-[700px]  bg-cover  " style={{backgroundImage:`url(${Africa})`,objectFit:'cover',backgroundRepeat:'no-repeat'}}>
        <div class="backdrop-brightness-100 h-[100%]  bg-black/30 w-[100%] ">
          <div class="flex flex-col justify-center items-center pt-6 gap-4 text-white relative">
            <img  src={africaLogo} width={'320px'} height={'320px'}/>
            <p>I WANT TO EXPLORE  </p>
            <p class="font-font-one text-8xl">Africa</p>
            <button class="text-lg py-2 px-4 border-2 rounded-3xl hover:bg-white hover:text-black hover:duration-700 hover:transition">Discover more</button>
            <p class="flex flex-row items-center gap-2 absolute left-16 -bottom-28"><span>{<FaLocationDot/>}</span>Borana,Kenya</p>
          </div>
        </div>
      </div>
    </>
  )
}
export default Carosel4;
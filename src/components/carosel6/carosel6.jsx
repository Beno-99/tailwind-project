import React from "react";

import Fire from '../../assets/image/fire.webp';
import Sea from '../../assets/image/sea.webp';
import { IoIosArrowForward } from "react-icons/io";


const Carosel6 =()=>{
  return(
    <>
      <div class="py-40">
        <div class="text-center flex flex-col gap-5 justify-center items-center w-[100%]">
          <p class="font-bold ">GET A GLIMPSE OF WHAT YOU CAN EXPERIENCE</p>
          <p class="font-font-one text-7xl  lg:w-[300px] sm:w-auto">Inspiring <em>stories</em></p>
        </div>
        <div class="flex lg:flex-row lg:justify-center lg:gap-32 sm:gap-12  sm:flex-col   sm:px-7 mt-12">
          <div class="lg:w-[22vw] lg:h-[800px]  flex flex-col gap-5">
            <img class="lg:w-[100%] lg:h-[500px] rotate-[2deg]" src={Fire} alt="img" style={{objectFit:'cover'}} />
            <h3 class="font-font-one text-3xl ">How to choose a <em>responsible</em> tour operator</h3>
            <p class="text-xs font-bold text-[#fc6220]  ">ABOUT NIARRA TRAVEL</p>
            <a class="flex flex-row gap-3  items-center w-full cursor-pointer"><hr class="border-[1px] border-black w-[100%]" /><span class="text-xs font-bold w-[120px]">READ STORY </span>{<IoIosArrowForward/>}</a>
          </div>
          <div class="lg:w-[22vw] lg:h-[800px]  flex flex-col gap-5">
            <img class="lg:w-[100%] lg:h-[500px] lg:mt-40 -rotate-[2deg] " src={Sea} alt="img" style={{objectFit:'cover'}} />
            <h3 class="font-font-one text-3xl ">Why the travel industry needs greater <em>transparency</em></h3>
            <p class="text-xs font-bold text-[#b1b886]  ">ABOUT NIARRA TRAVEL</p>
            <a class="flex flex-row gap-3  items-center w-full cursor-pointer"><hr class="border-[1px] border-black w-[100%]" /><span class="text-xs font-bold w-[120px]">READ STORY </span>{<IoIosArrowForward/>}</a>
          </div>
        </div>
        <button class="lg:hidden  sm:block mr-auto ml-auto mt-36 w-[200px] border-[1px] rounded-[50px] py-4 px-2 text-xl hover:bg-[#283a2c] hover:text-white transition hover:duration-500"><p>See All Stories</p></button>
      </div>
    </>
  )
}
export default Carosel6;
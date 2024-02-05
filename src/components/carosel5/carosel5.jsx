import React from "react";
import Photos from "./photos";
import Meddle from "./meddle";

import Section3 from '../../assets/image/section3.jpg';
import Section2 from '../../assets/image/section2.jpg';
import Section1 from '../../assets/image/section1.jpg';

const Carosel5 =()=>{
  return(
    <>
      <div class="w-[100%]  ">
        <div class="bg-[#f1efec] w-[100%] h-[500px] flex flex-col  items-center lg:pt-20 sm:pt-40 p-[1px] " >
          <p class="text-xs font-bold pb-2">TRAVEL IN STYLE</p>
          <p class="lg:w-[370px] sm:w-auto text-5xl font-font-one text-center">Find travel inspiration by <em>style</em></p>
        </div>
        <div class="flex flex-row sm:gap-5 lg:justify-between  lg:h-auto lg:overflow-x-hidden  mt-[-20%] ml-auto mr-auto w-[90%] sm:h-auto sm:overflow-x-scroll  ">
          <Photos 
            image={Section3}
            title='Family travel'
            p='Luxury family safaris and inspiring wildlife adventures with a positive impact.'
          />
          <Meddle
            image={Section2}
            title='Private travel'
            p='Quality time with family and friends, complete flexibility and exclusive use safari camps.'
          />
          <Photos
            image={Section1}
            title='Honeymoons'
            p='From guilt-free indulgence to the romance of a real adventure, we can help you plan your perfect honeymoon.'
          />
        </div>
      </div>
    </>
  )
}
export default Carosel5;
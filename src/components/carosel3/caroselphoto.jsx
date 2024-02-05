import React from "react";

import { BsCurrencyDollar } from "react-icons/bs";
import { GiAfrica } from "react-icons/gi";



const CaroselPhoto =(props)=>{
  const{
    p1,
    p2,
    p3,
    image,
    pound,
    title
  }=props
  return(
    <>
      <div class="md:w-[350px] md:h-[650px]  sm:h-[700px]  text-white  flex  lg:hover:transition lg:hover:duration-700 lg:hover:rotate-2 backdrop-opacity-20 backdrop-invert bg-black/30 "style={{backgroundImage: `url(${image})`,objectFit:'cover',backgroundPosition:'center'}}>
        <div class="flex flex-col  sm:w-[100vw]   justify-between backdrop-brightness-90">
          <p class="mt-3 text-xl pl-10 flex flex-row items-center gap-2"><span class="text-3xl">{<GiAfrica/>}</span>{title}</p>
          <a class="cursor-pointer flex flex-col gap-6 sm:w-[100vw] lg:w-auto">
            <div class=" sm:w-[100vw] lg:w-auto p-4">
              <p>{p1}</p>
              <p class="text-5xl font-font-one pb-6  lg:w-auto">{p2}</p>
              <p class=" lg:w-auto">{p3}</p>
            </div>
            <div class="flex flex-row justify-around items-center">
              <button class="rounded-[40px] w-[150px] h-[50px] border-white border-2   md:text-base hover:bg-gray-100 hover:text-black">Discover Trip</button>
              <div class="flex flex-col items-center justify-center">
                <p>FROM</p>
                <div class="flex flex-row  items-center text-2xl font-font-one"><span class="text-2xl">{<BsCurrencyDollar/>}</span> <span class="text-3xl pb-2">{pound}</span> <p class="pl-2 pb-1 text-base"> pp</p></div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  )
}
export default CaroselPhoto;
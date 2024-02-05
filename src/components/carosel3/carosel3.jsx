import React from "react";
import CaroselPhoto from "./caroselphoto";
import Slide1 from '../../assets/image/slide1.jpg';
import Slide2 from '../../assets/image/slide2.jpg';

const Carosel3 =()=>{
  return(
    <>
      <div class="w-[100%] h-auto bg-[#f1efec] flex md:flex-row md:justify-around md:items-center md:py-24 sm:flex sm:flex-col ">
        <div class="md:w-[27%]  flex flex-col gap-4 mt-auto md:p-0 sm:p-10">
          <p class="font-bold">Example trips</p>
          <p class="lg:text-5xl sm:text-5xl md:text-4xl font-font-one">Get inspired</p>
          <p class="md:text-base sm:text-2xl">Browse our example trips and get in contact to start planning your very own adventure.</p>
        </div>
        <div class="md:w-[55%] sm:w-[100vw] h-auto sm:overflow-x-scroll lg:overflow-hidden  ">
          <div class="flex flex-row sm:gap-10 sm:px-3 w-[100vw]">
            <CaroselPhoto
              title='Africa'
              p1="11-Day trip"
              p2="Cape, Wine, Wildlife and Waterfalls"
              p3="This is the perfect first-time trip to South Africa, showcasing the very best of the Rainbow Nation before a spectacular finale by Victoria Falls.."
              pound="11,500"
              image={Slide1}
            />
            <CaroselPhoto
              title='Africa'
              p1="11-Day trip"
              p2="Conservation and Culture in Kenya"
              p3="Experience the best of Kenya's wildlife, conservation efforts and some of the most iconic hotels"
              pound="11,500"
              image={Slide2}
            />
          </div>
          
        </div>
      </div>
    </>
  )
}
export default Carosel3;
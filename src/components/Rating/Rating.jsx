import React from "react";

import Rating from '../../assets/image/rating.jpg';

const Carosel4 =()=>{
  return(
    <>
      <div class="w-[100%] bg-[#f1efec] flex flex-col text-center justify-center items-center py-24 ">
        <div class="sm:w-[90%] lg:w-[50%]  flex flex-col gap-5 px-5">
          <p class="lg:text-4xl sm:text-4xl font-font-one"><em>“Absolutely Blown Away!”</em></p>
          <p class="sm:text-2xl lg:text-base ">Hands down the best travel experience we’ve ever had.We reached out to Niarra Travel to plan our honeymoon in Africa. We were paired with James, who took our rather vague input and turned it into the perfect vacation for us. In the months leading u...</p>
          <img class="ml-auto mr-auto" src={Rating} width={'200px'} height={'50px'} />
          <div class=" flex flex-col gap-1">
            <p class="text-stone-400 sm:text-xs lg:text-sm">Published Sunday, January 21, 2024  on Trustpilot</p>
            <p class="text-sm font-bold ">Emma and Henry</p>
          </div>
        </div>
      </div>
    </>
  )
}
export default Carosel4;
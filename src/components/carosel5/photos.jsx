import React from "react";

const Photos =(props)=>{
  const{
    image,
    title,
    p,
  }=props
  return(
    <>
      <div class="text-center flex flex-col items-center gap-5 lg:w-[26vw] lg:h-auto sm:w-[100vw] sm:h-[1500px] ">
        <div class="lg:w-[100%] sm:w-[90vw] sm:h-[100%] lg:h-[600px] bg-cover bg-center " style={{backgroundImage:`url(${image})`,objectFit:'cover'}}>
          <p class="text-center  text-white font-font-one text-4xl pt-20  mr-auto ml-auto " >{title}</p></div>
        <p class="text-center text-black lg:w-[100%] lg:text-base sm:text-2xl">{p}</p>
        <button class=" text-black rounded-[40px] w-[150px] h-[50px] border-black border-[1px]   md:text-base hover:bg-[#283a2c] hover:transition hover:duration-500 hover:text-white">Discover more</button>
      </div>
    </>
  )
}
export default Photos;
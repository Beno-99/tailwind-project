import React from "react";

import Mountain from '../../assets/image/mountain.webp';
import Footer from '../../assets/image/footer-clouds.png';

const Carosel7 =()=>{
  return(
  <>
    <div class=" bg-cover bg-top bg-[#f1efec] text-center " style={{backgroundImage:`url(${Mountain})`,backgroundRepeat:'no-repeat'}}>
        <div class="h-auto bg-cover bg-center p-1" style={{backgroundImage:`url(${Footer})`,backgroundRepeat:'no-repeat'}}>
          <div class="mt-96 mr-auto ml-auto lg:w-[470px] sm:w-[100vw] p-3">
            <p class="text-xs font-bold">THE WORLD IS AT YOUR FEET</p>
            <p class="font-font-one text-5xl">Receive <em>inspiration</em> in your inbox</p>
            <form class="lg:flex-row lg:flex-wrap sm:flex-col flex items-center justify-between lg:w-[500px] lg:gap-4 sm:gap-6 pt-6 p-2">
              <input class=" border-b-[1px] border-black outline-none lg:w-auto sm:w-[90vw]" style={{backgroundColor:'transparent'}} type="text" placeholder="First Name" />
              <input class=" border-b-[1px] border-black outline-none lg:w-auto sm:w-[90vw] pr-7" style={{backgroundColor:'transparent'}} type="text" placeholder="Last Name"/>
              <input class=" border-b-[1px] border-black outline-none  lg:w-auto sm:w-[90vw]" style={{backgroundColor:'transparent'}} type="text" placeholder="E-mail"/>
              <a class="flex gap-3 justify-center items-center sm:ml-[20px] lg:ml-0 sm:mr-auto lg:mr-0"><input type="radio" /><p class="text-left lg:w-52 sm:w-auto sm:text-3xl lg:text-base">I'm happy to receive emails from Niarra Travel *</p></a>
            </form>
          </div>
        </div>
    </div>
  </>
  )
}
export default Carosel7;
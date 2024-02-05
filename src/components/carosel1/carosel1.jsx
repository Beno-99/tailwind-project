import React from "react";
import { motion,useScroll } from "framer-motion";
import NavList from "../nav-list/nav-list";

import image1 from "../../assets/image/w1.jpg";

import { GiCompass } from "react-icons/gi";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";



const Carosel1 =()=>{
    
    return(
        <>
            <div class=" object-cover  bg-no-repeat bg-cover w-full h-screen  " style={{backgroundImage: `url(${image1})`}}>
                <div class="w-full h-full pt-1 backdrop-opacity-10 backdrop-invert bg-black/20">
                    <div class="h-16 p-5 mt-4 flex gap-2 justify-between items-center text-white 
																	lg:justify-around  md:px-16 sm:px-10 ">
                        <p><a class="lg:text-3xl md:text-2xl sm:text-xl" style={{cursor:'pointer'}}>Niarra</a></p>
                        <ul class="lg:flex gap-6 text-xs hidden">
                            <NavList
                                title='DESTINATIONS'
                            />
                            <NavList
                                title='TRAVEL STYLES'
                            />
                            <NavList
                                title='ABOUT US'
                            />
                            <NavList
                                title='STORIES'                               
                            />
                        </ul>
                        
                        <div class="flex items-center justify-center lg:gap-4 gap-9 ">
                            <a class=" items-center justify-center cursor-pointer gap-1 hidden lg:flex"><span>{<HiOutlineCurrencyDollar/>}</span>USD <span><IoIosArrowDown/></span></a>
                            <button class="lg:rounded-full lg:bg-lime-950	lg:px-8 lg:py-4 md:p-0 lg:text-xs flex gap-1 items-center lg:hover:bg-orange-500 transition duration-950 ">
                                <span class="hidden text-base lg:block md:hidden md:w-auto md:p-0">{<GiCompass/>}</span><p>ENQUIRE</p>
                            </button>
                            <button class="lg:hidden rounded-full border-dashed border-2 border-x-white p-2 ">{<GiHamburgerMenu/>}</button>
						</div>
                        
                    </div>
                    <motion.div  initial={{ opacity: 0, scale: 0.5 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5 }} 
                                        class="text-white text-center justify-center mt-24 w-full ">
                        <p class="md:text-xl sm:text-lg pb-5">CONNECTING YOUR JOURNEY WITH PURPOSE</p>
                        <p class="md:text-7xl  text-center sm:text-4xl font-font-one">Unforgettable travel</p>
                        <p class="md:text-7xl  text-center sm:text-4xl font-font-one">experiences with</p>
                        <p class="md:text-7xl  text-center sm:text-4xl font-font-one"> a <em>positive</em> impact</p>
                    </motion.div>
                </div>
            </div>
        </>
    )
}
export default Carosel1;
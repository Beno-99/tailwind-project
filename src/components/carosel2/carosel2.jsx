import React from "react";

import './carosel2.css';

import { TfiMapAlt } from "react-icons/tfi";
import { TbWorldHeart } from "react-icons/tb";
import { MdOutlineGroups } from "react-icons/md";

import Elephant from '../../assets/image/Elephant.jpg';
import Singita from '../../assets/image/Singita.jpg';


const Carosel2 =()=>{
	
    return(
			
        <>
            <div class="bg-[#283a2c] w-[100%] h-auto pt-24">
							<div class="w-full h-auto text-white  text-center flex flex-col justify-center items-center">
								<p class="font-bold pb-5">WHAT MAKES US DIFFERENT</p>
								<p class="font-font-one lg:text-7xl sm:text-5xl">Why Niarra</p>
							</div>
							<div class="lg:flex lg:flex-row flex sm:flex-col justify-around text-white">
										<div class="lg:pt-32  lg:relative lg:left-24 lg:pr-9 lg:order-none lg:w-auto sm:order-3 sm:w-[90%]  sm:flex-col sm:justify-center ">
													<div class="lg:w-48 lg:items-center flex  py-10 lg:flex-col lg:justify-center lg:m-0 lg:text-center lg:gap-0  sm:flex-row sm:gap-10 sm:align-middle sm:justify-between  sm:pl-1   sm:items-center sm:m-2 sm:w-[100%]" > 
														<span class="text-5xl lg:pb-3 lg:pl-0   sm:pl-12">{<TfiMapAlt/>}</span>
														<div class="sm:flex sm:flex-col lg:text-center lg:w-auto  sm:text-left lg:gap-0 sm:gap-5 lg:ml-0 sm:ml-4 sm:w-[75%]">
															<p class="font-font-one lg:text-4xl lg:pb-3 sm:text-2xl">Unforgettable experiences</p>
															<p class="lg:w-72 lg:text-base sm:text-base sm:w-full ">Creating your trip is entirely collaborative and our Travel Researchers are here for every step.</p>
														</div>
													</div>
													<div class="lg:relative">
														<div class="lg:w-48 lg:items-center flex py-10 lg:flex-col lg:justify-center lg:text-center lg:relative  lg:-right-24 lg:gap-0  sm:flex-row sm:gap-10 sm:align-middle sm:justify-between  sm:pl-1   sm:items-center sm:m-2 sm:w-[100%]">
															<span class="text-5xl lg:pb-3 lg:pl-0   sm:pl-12">{<TbWorldHeart/>}</span>
															<div class="sm:flex sm:flex-col lg:text-center  sm:text-left lg:gap-0 sm:gap-5 lg:ml-0 sm:ml-4 lg:w-auto sm:w-[75%]">
																<p class="font-font-one lg:text-4xl lg:pb-3 sm:text-2xl">Positive impact</p>
																<p class="lg:w-60">Curated sustainable experiences and accommodation that maximize the benefits to local people and place.</p>
															</div>
														</div>
													</div>
													<div class="lg:relative">
														<div class="lg:w-48 lg:items-center flex py-10 lg:flex-col lg:justify-center lg:text-center lg:relative  lg:-right-96 lg:-top-20 lg:gap-0  sm:flex-row sm:gap-10 sm:align-middle sm:justify-between  sm:pl-1   sm:items-center sm:m-2 sm:w-[100%]">
															<span class="text-5xl lg:pb-3 lg:pl-0   sm:pl-12">{<MdOutlineGroups/>}</span>
															<div class="sm:flex sm:flex-col lg:justify-center lg:items-center lg:text-center  sm:text-left lg:gap-0 sm:gap-5 lg:ml-0 sm:ml-4 lg:w-auto sm:w-[75%]">
																<p class="font-font-one lg:text-3xl lg:pb-3 lg:w-40 sm:text-2xl">Fairness and transparency</p>
																<p class="lg:w-60">An open, competitive pricing structure that ensures more money goes to where it's needed in the destination.</p>
															</div>
														</div>
													</div>
										</div>

										<div  class="  lg:w-1/4 lg:-mr-4 lg:order-none lg:pb-0  relative pt-8 lg:mb-0 lg:pl-12 sm:mb-72 sm:mr-auto sm:ml-auto  lg:ml-0 ">
												<div class="-rotate-3 lg:w-[300px] lg:h-[500px] sm:w-[250px] sm:h-[300px]"><img class="object-cover " src={Elephant}  alt="image1" /></div>
												<div class="absolute z-10  lg:-right-10 sm:left-36 lg:left-44  lg:top-80 rotate-6 lg:w-[200px] lg:h-[300px] sm:w-[140px] sm:h-[170px] "><img class="object-cover "  src={Singita}  alt="image2" /></div>
										</div>
										
										<div class="lg:w-1/4 lg:h-auto   lg:pt-36 gap-5 lg:order-none sm:order-2 mt-60 sm:m-7">
											<div class="w-auto h-auto flex flex-col gap-5 lg:px-4 ">
												<p class="text-2xl">Niarra Travel is a forward-thinking travel company headquartered in London born out of a passion to do things differently.</p>
												<p class="text-lg">In Swahili, a Bantu language spoken by millions in Eastern, Central and Southern Africa, the name Niara means "with utmost purpose" and our team are united by a passion for exploration and a belief that the right kind of travel can make the world a better place.</p>
												<p class="text-lg">Our Travel Researchers are here to create incredible trips with a positive impact for you.</p>
											</div>
										</div>
							</div>		
            </div>
        </>
    )
}

export default Carosel2;
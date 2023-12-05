import React from "react";
import { Link } from "react-router-dom";
import '../../App.css';
const Services = () => {
return(
<div>
<section className="py-16">


<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
  <h2 className="text-3xl  md:text-5xl font-extrabold  uppercase text-gray-900 text-center  ">
    Our Services
  </h2>
  <p className="mt-4 text-lg text-gray-500 text-center">
  Turn Your Biggest Language Challenges Into Growth Oppurtunities
  </p>
  <div class="mt-16   flex flex-wrap justify-evenly items-center mx-auto mb-10">
    <div class="px-4 mb-8 w-full md:w-1/2 lg:w-1/3 ">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="flex justify-center">
          <img src={process.env.PUBLIC_URL + '/img/second.svg'} alt="" className="w-44   " />
        </div>
        <div class="px-6 py-4">
          <div class="  text-[#0f7383] font-bold text-xl mb-2">Interpretation</div>
          <p class="text-gray-500 text-base">
              Get the expertise you need to overcome language barriers 24/7/365. With On-Demand interpreting.
            </p>

        </div>
        
      </div>
    </div>



    <div class="px-4 mb-8 w-full md:w-1/2 lg:w-1/3">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="flex justify-center">
          <img src={process.env.PUBLIC_URL + '/img/second.svg'} alt="" className="w-44   " />
        </div>
        <div class="px-6 py-4">
          <div class="  text-[#0f7383] font-bold text-xl mb-2">Localization</div>
          <p class="text-gray-500 text-base">
          Provide high-quality, accurate translation that resonate with your audience in 100+ languages.
          </p>
        </div>
        
      </div>
    </div>



    <div class="px-4 mb-8 w-full md:w-1/2 lg:w-1/3">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="flex justify-center">
          <img src={process.env.PUBLIC_URL + '/img/second.svg'} alt="" className="w-44   " />
        </div>
        <div class="px-6 py-4">
          <div class="  text-[#0f7383] font-bold text-xl mb-2">Training</div>
          <p class="text-gray-500 text-base">
          Localize your print and digital content for any global market with the support of 5,000 + professional linguists.
          </p>
        </div>
        
      </div>
    </div>


  </div>
</div>
</section>


</div>
) 
}

export default Services;
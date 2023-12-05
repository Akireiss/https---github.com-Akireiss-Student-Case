import React from "react";
import { Link } from "react-router-dom";
import '../../App.css';
const Brand = () => {
return(
<div>
<section id="second_section" className="py-32 border-t border-b ">


<div className="container mx-auto  flex flex-col px-4 space-x-0 space-y-8 md:flex-row md:space-y-0  max-w-6xl text-center">



  <div className="flex flex-col space-y-2  justify-start md:w-1/2 container mx-auto">

    <h2 className="text-3xl font-bold  text-center text-black max-w-md md:text-left md:text-4xl ">
      Are you in?
    </h2>
    <h2 className="text-3xl font-bold  text-center text-[#0f7383] max-w-md md:text-left md:text-4xl ">
      Let's get it done.
    </h2>


  </div>


  <div className=" md:w-1/2 text-center md:text-end">

    <button type="button" class=" bg-[#0f7383] text-white px-8 py-3 rounded-lg hover:bg-[#0a5763] ">
      Get Started
    </button>

  </div>
</div>

</section>

</div>
) 
}

export default Brand;
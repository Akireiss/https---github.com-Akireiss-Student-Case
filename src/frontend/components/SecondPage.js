import React from "react";
import { Link } from "react-router-dom";
import '../../App.css';
const SecondPage = () => {
return(
<div>
<section id="second_section" className="py-10 border-b ">


<div className="container mx-auto  text-center flex
 px-4 space-x-0 space-y-8 md:flex-row md:space-y-0 justify-center max-w-6xl flex-col-reverse">



  <div className="flex flex-col space-y-6  justify-start md:w-1/2 container mx-auto">
    <h2 className="text-lg text-[#0f7383] font-semibold text-center md:text-left uppercase">
    Technology
    </h2>
    <h2 className="text-3xl font-extrabold  text-center text-black max-w-md md:text-left md:text-5xl ">
    Pioneering Technology
    </h2>
    <h4 className="text-lg text-gray-500 text-center max-w-md md:text-left  ">
      I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence,
      that I neglect my talents. I am alone, and feel the charm of existence in this spot,
      which was created for the bliss of souls like mine.
    </h4>
    
  </div>
  <div className=" md:w-1/2 flex align-top justify-center md:justify-end ">
    <img src={process.env.PUBLIC_URL + '/img/voice.svg'} alt="" className="w-48   md:w-80  " />
  </div>
</div>

</section>








</div>
) 
}

export default SecondPage;
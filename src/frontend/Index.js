import React from "react";
import { Link } from "react-router-dom";
import '../App.css';
const Index = () => {
  return (
    <div>
     {/* Aki Reissssss */}

     <div class="custom-shape-divider-bottom-1682946584 hidden md:block">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>

      <section className="min-h-screen bg-white  flex items-center">
        
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">

          <h2 className="text-4xl font-extrabold text-gray-900 md:text-5xl max-w-full ">
            Reiss Aki
            <h2 className="text-[#0f7383] mt-2">
              lorem ipsum dolor
            </h2>
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-xl  text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pulvinar quis
            neque et varius. Fusce eget mauris vel enim aliquet fermentum a id mauris.
          </p>
          <div className="mt-10 flex flex-row justify-center space-x-4">
            <div>
              <Link to={"/contact"}
                className="inline-block  bg-[#0f7383] text-white px-8 py-3 rounded-lg font-semibold tracking-wider hover:bg-[#0a5763]"
              >
                Get Started
              </Link>
            </div>


            <div>
              <Link to={"/contact"} className="inline-block px-4 py-3 rounded-lg font-semibold tracking-wider text-cyan-500">
                Get Started
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block align-middle ml-2 text-cyan-500">
                  <path d="M1 10H16" stroke="#000" strokeWidth="2" strokeLinecap="round" />
                  <path d="M11 5L16 10L11 15" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Another Section */}
      <section id="second_section" className="py-32 ">
      

        <div className="container mx-auto  text-center flex px-4 space-x-0 space-y-8 md:flex-row md:space-y-0 justify-center max-w-6xl flex-col-reverse">



          <div className="flex flex-col space-y-6  justify-start md:w-1/2 container mx-auto">
            <h2 className="text-lg text-blue-500 font-semibold text-center md:text-left uppercase">
              Enjoy The Moment
            </h2>
            <h2 className="text-3xl font-extrabold  text-center text-black max-w-md md:text-left md:text-5xl ">
              This is the first great feature.
            </h2>
            <h4 className="text-lg text-gray-500 text-center max-w-md md:text-left  ">
              I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence,
              that I neglect my talents. I am alone, and feel the charm of existence in this spot,
              which was created for the bliss of souls like mine.
            </h4>
            <div className="text-center md:text-left">
              <button type="button" class="inline-block bg-[#0f7383] text-white px-4 py-2 rounded-lg hover:bg-[#0a5763]">
                Get Started
              </button>
            </div>
          </div>
          <div className=" md:w-1/2 flex align-top justify-center md:justify-end ">
            <img src={process.env.PUBLIC_URL + '/img/second.svg'} alt="" className="w-80  " />
          </div>
        </div>

      </section>



      {/* Second Section End */}

      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-gray-500 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            pulvinar quis neque et varius.
          </p>
          <div class="mt-10 flex flex-wrap justify-center items-center mx-auto">
          
            <div className="px-4 mb-8 w-full md:w-1/2 lg:w-1/3">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-4">
                  <h3 className="text-2xl font-semibold text-gray-800">
                    Mobile App Development
                  </h3>
                  <p className="mt-3 text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus pulvinar quis neque et varius.
                  </p>
                </div>
                <div className="bg-gray-200 px-4 py-2 flex justify-end">
                  <Link
                    to="/app-development"
                    className="inline-block bg-[#0f7383] text-white px-4 py-2 rounded-lg hover:bg-[#0a5763]"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>


            <div className="px-4 mb-8 w-full md:w-1/2 lg:w-1/3">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-4">
                  <h3 className="text-2xl font-semibold text-gray-800">
                    Mobile App Development
                  </h3>
                  <p className="mt-3 text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus pulvinar quis neque et varius.
                  </p>
                </div>
                <div className="bg-gray-200 px-4 py-2 flex justify-end">
                  <Link
                    to="/app-development"
                    className="inline-block bg-[#0f7383] text-white px-4 py-2 rounded-lg hover:bg-[#0a5763]"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
            <div className="px-4 mb-8 w-full md:w-1/2 lg:w-1/3">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-4">
                  <h3 className="text-2xl font-semibold text-gray-800">
                    SEO Services
                  </h3>
                  <p className="mt-3 text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus pulvinar quis neque et varius.
                  </p>
                </div>
                <div className="bg-gray-200 px-4 py-2 flex justify-end">
                  <Link
                    to="/seo-services"
                    className="inline-block bg-[#0f7383] text-white px-4 py-2 rounded-lg hover:bg-[#0a5763]"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>

  );
};

export default Index;

import React from "react";
import { Link } from "react-router-dom";
import '../../App.css';
const FirstPage = () => {
return(
    <div>


<section className="min-h-screen bg-white  flex items-center">

        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">

          <h2 className="text-4xl font-extrabold text-gray-900 md:text-5xl max-w-full ">
          Learnosa
            <h2 className="text-[#0f7383] mt-2">
            Translation Agency
            </h2>
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-xl  text-center">
          Our expert linguists handle 64+ million interactions annually—more than one every second. Let us be your total language solutions partner.
          </p>
          <div className="mt-10 flex flex-row justify-center space-x-4">
            <div>
              <Link to={"/contact"}
                className="inline-block  bg-[#0f7383] text-white px-8 py-3 rounded-lg font-semibold tracking-wider hover:bg-[#0a5763]"
              >
                Schedule
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
    </div>
) 
}

export default FirstPage;
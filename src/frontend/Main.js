import React from "react";
import { Link } from "react-router-dom";
import '../App.css';
import FirstPage from "./components/FirstPage";
import Navbar from "./components/Navbar";
import SecondPage from "./components/SecondPage";
import ThirdPage from "./components/ThirdPage";
import Services from "./components/Services";
import Brand from "./components/Brand";
import Footer from "./components/Footer";
const Main = () => {
return(
    <div>
        <div>
            <Navbar/>
        </div>
        <FirstPage/>
        <SecondPage/>
        <ThirdPage/>
        <Services/>
        <Brand/>
        <Footer/>
        
    </div>
)
}


export default Main;

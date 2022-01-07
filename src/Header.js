import React from 'react'
import {Link} from "react-router-dom";
import SignUpHeader from './SignUp/SignUpHeader';
export default function Header() {
    return (
        <div>
        <SignUpHeader></SignUpHeader>
        <div className=" h-45 flex flex-wrap content-start ">
       
            <img alt="header" src="./logo.png" className=" pl-6 pt-6 w-60 mr-7"></img>
            <ul className="mt-11">
                <Link to="/"> <button className=" text-center font-semibold  text-opacity-3 mr-9 text-xl"> Home</button> </Link>    
                <Link to ="/Course">  <button className=" text-center font-semibold  text-opacity-3 mr-9 text-xl"> Courses</button></Link>
                <Link to="/AboutUs"><button className=" text-center font-semibold  text-opacity-3 mr-9 text-xl"> AboutUs</button></Link>
                <Link to="/Contact"><button className=" text-center font-semibold  text-opacity-3 mr-9 text-xl"> ContactUs</button></Link>
                <Link to="FAQ">   <button className=" text-center font-semibold  text-opacity-3 mr-9 text-xl"> FAQ</button></Link>
                <Link to="/Browcher">  <button className=" text-center font-semibold  text-opacity-3 mr-9 text-xl"> Forms and Browchers</button></Link>
                <Link to="/Misfueling"><button className=" text-center font-semibold  text-opacity-3 mr-9 text-xl"> Misfueling</button></Link>
            </ul>
        </div>
        </div>
    )
}

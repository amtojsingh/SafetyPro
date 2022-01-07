import React,{useState} from 'react'
import BreadCrumb from '../Components/BreadCrumb'
import Accord from './Accord';
//import useState from "react";
export default function Faqs(props) {
console.log(props);
    return (<>
<div className="mt-3 ">
<BreadCrumb value={"/ Faq"}></BreadCrumb></div>
        <div>
        <div className="py-2 bg-gray-900"> <h1 className="text-lg text-center font-extrabold text-white ">Frequently Asked Questions</h1></div>
        <h1 className="ml-4 mt-3 text-xl text-black font-bold mb-2">SafetyPro Training Center Online operates best on a wired network connected PC or Apple based DESKTOP computer.

</h1>
            {props.data.map((question)=>{
                return <Accord  key={question.id}{...question}></Accord>
                  })}
        </div>
   </> )
}

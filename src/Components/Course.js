import React from 'react'
import Header from './../Header'
import Footer from './../Footer'
import FeaturedCourses from './FeaturedCourses'
import BreadCrumb from '../Components/BreadCrumb'

export default function Course() {

    return (
        <div>
        <Header></Header>

<div>
<div className="mt-3">
<BreadCrumb value={"/ Course"}></BreadCrumb></div>
<div className="p-5 flex">
  <div className=" rounded-lg shadow-md  w-1/5 light_green_color">
        <h1 className="category_box font-extrabold text-white text-2xl pl-4 text-center">CATEGORIES</h1>
            <ul className="">
                <li className="text-lg font-semibold text-black ml-4">
                    <a href="">AIRPORT SAFETY</a><br></br>
                    <a href="">ALL COURSES</a><br></br>
                    <a href="">FAA FUEL SAFETY</a><br></br>
                    <a href="">ENVIRONMENTAL</a><br></br>
                    <a href="">SIDA AND DRIVER</a><br></br>

                </li>
            </ul>
        </div>
<div className="col-span-4" >
<div className="bluebar ml-4 mr-4">
    <h1 className="ml-5 text-2xl font-extrabold text-white">
    COURSES
    </h1></div>
    <div>
    <div className="grid grid-cols-4 gap-5 mr-4 ml-4 h-50">
    <div className="mt-2">
    <figure className="course_box shadow-md p-4">
       <img alt="Courses" className="w-56 h-56  mx-auto" src="./fuelSafety.png"/>
       <figcaption className="text-center text-gray font-semibold text-l mb-2 pt-2">
          <p> Fuel Safety Supervisor 14 CFR 139.321(e)(1)</p>
         <button className="mt-5 blue_button p-2.5"> Course Details</button>
       </figcaption> 
       </figure> 
       </div>
       <div className="mt-2">
       <figure className="course_box shadow-md p-4">
       <img alt="Courses" className="w-56 h-56  mx-auto" src="./LineFuel.png"/>
       <figcaption className="text-center text-gray font-semibold text-l mb-2 pt-2">
          <p> Fuel Safety Supervisor 14 CFR 139.321(e)(1)</p>
         <button className="mt-5 blue_button p-2.5"> Course Details</button>
       </figcaption> 
       </figure> 
       </div>
       <div className="mt-2">
       <figure className="course_box shadow-md p-4">
       <img alt="Courses" className="w-56 h-56  mx-auto" src="./Aviation.png"/>
       <figcaption className="text-center text-gray font-semibold text-l mb-2 pt-2">
          <p> Fuel Safety Supervisor 14 CFR 139.321(e)(1)</p>
         <button className="mt-5 blue_button p-2.5"> Course Details</button>
       </figcaption> 
       </figure> 
       </div>
       <div className="mt-2">
       <figure className="course_box shadow-md p-4">
       <img alt="Courses" className="w-56 h-56  mx-auto" src="./aviationSelf.png"/>
       <figcaption className="text-center text-gray font-semibold text-l mb-2 pt-2">
          <p> Fuel Safety Supervisor 14 CFR 139.321(e)(1)</p>
         <button className="mt-5 text-center blue_button p-2.5"> Course Details</button>
       </figcaption> 
       </figure>
       </div>
    </div>
    </div>
</div>
</div> 
<div className="grid  grid-cols-4 gap-4 mt-6">
       <FeaturedCourses></FeaturedCourses>  
</div>
<Footer></Footer>
     </div>
     </div>
    )
}

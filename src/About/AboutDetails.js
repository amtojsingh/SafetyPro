import React from 'react'
import BreadCrumb from '../Components/BreadCrumb'

export default function AboutDetails() {
    return (
      
        <div>
        <div className="mt-3">
<BreadCrumb value={"/ About"}></BreadCrumb></div>
<div className="flex p-5">
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
        <div className="w-4/5 pl-3.5">
            <div className="bg-green"><h1 className=" bluebar text-2xl font-extrabold text-white pl-3">
            ABOUT US</h1>
            <h1 className="font-semibold text-black">
            Solutions
            </h1>
            <p>
            ACE, Inc. was founded in 2004 by emergency service
             providers who wanted to make quality safety learning a possibility for everyone.
              We began providing compliance training to airport refueling personnel at Part 139 certificated 
              airports. At the request of our clients, we have expanded to include Security Identification
               Display Area (SIDA) and Airport Ground Vehicles Training as well as aviation and general
                safety education and consulting services. As a result,
             our mission has been to provide open, accessible and flexible learning management solutions.
            </p>
            <h1 className="font-semibold text-black">Value Driven</h1>
            <p>
            ACE, Inc. is value driven. We recognize the financial burden of operating a successful business.
             Our model for business keeps the financial aspect in mind by providing high quality, comprehensive, 
             timely courses. We are customer focused and operate our customer service line from 0800-1800 M-F and 
             email support from 1800-2300 M-F and 0800-2300 S-S.
          Integrity and trust is our foremost asset. By working as a team ACE can provide our basic safety 
           training service or provide robust course and website development. We hold ourselves accountable to our 
        clients and students. With over 34 years of aviation fire and safety experience, we have the answers.
         Our vision of the future is to provide not only premiere educational opportunities to enhance airfield 
         safety but to incorporate these opportunities in an online community setting, providing the
       attendee with a complete networking and learning environment. By bringing together organizations
        and individuals in a single arena the experiences of the many can be driven down to the individual.
       Our turnkey course populated Learning Management System product provides companies with a 
      cost effective method to train their employees. Additional savings may be seen from lowered 
      insurance premiums and higher employee productivity. Let ACE go to work for you to raise the bar on safety. 
      ACE strives to transform the education technology industry by combining the benefits of 
learning management applications with enterprise-level security, reliability and scalability.
            </p>
            <h1 className="font-semibold text-black"> Our Mission</h1>
            To provide the very best, comprehensive training for those operating on strict budgets. 
            Our ALL INCLUSIVE approach is novel in the industry and provides open, accessible 
            and flexible learning management solutions to those who might otherwise not participate.
             To provide unparalleled customer support. There are three ways to contact an instructor 
             during you online education. The message center provides a chat style window for direct texting,
              email if you're not in a rush or phone for assistance and receive an immediate response.
               Our customer service line is open from 0700-2300 
            EST daily and you’ll always talk with a competent professional when you call ACE.
            </div>
            </div> 
            </div>
            </div>
   )
}

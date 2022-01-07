import React from 'react'
import {Link} from "react-router-dom";
export default function SignUpHeader() {
    return (

            <div className="absolute right-0 text-right ">
            <ul className=" text-lg font-bold text-black"> 
            <li>
               <Link to="https://www.safetyprotc.com/login/signup.php?"> <button className="bg-green-500 p-2 text-base text-white rounded-tl-full rounded-bl-full mt-2 w-28">Create Account</button><br/></Link>
               <Link to="https://www.safetyprotc.com/login"><button className="bg-green-500 p-2 text-base text-white rounded-tl-full rounded-bl-full mt-2 w-28">Log In</button><br/></Link>
            {/* <Link to="">  <button className="bg-blue-500 rounded-md mt-2">Search</button><br/></Link> */}
              
            </li>
        </ul>
        </div>
      
    )
}


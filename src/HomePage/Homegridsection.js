import React from 'react'
import Homegrid from './Homegrid'
 const GridData=[
            {title:"MISFUELING PREVENTION",
                details:"Watch the video NOW! Only 4 minutes to save a life!"
            },
            {
                title:"FREE MISFUELING PROCEDURES",
                details:"Just register to get your free copy Energy institute publication E1-1597"       
            },
            {
                title:"SAFETYPRO INTRO VIDEO",
                details:"Let SafetyPro secure your future Watch today on your facebook page"
            }
        ];
export default function Homegridsection() {
    return (
        <div className="bg-white">          
        <div className="font-semibold  text-center text-lg text-black"></div>
          <section className="p-20 grid sm:grid-cols-2 md:grid-cols-3 gap-6"> 
          <Homegrid value={GridData}></Homegrid>
       </section>
        </div>);
}

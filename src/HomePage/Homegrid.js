import React from 'react'

export default function Foot({value}) {
    console.log(value);
    return (<>{value.map((value)=>{
        return(<>
            <div className="green_bg2 p-6">
            <div className="">
    <div className="font-semibold  text-center text-lg text-black "> 
    </div>
    <h1 className=" text_box text-center font-bold ">{value.title}</h1>
    <br/>
    <h2 className="text-center text-base to-black font-semibold"> {value.details}</h2>
    <div className="align-middle w-36">
    <button className="  text-white blue_button align-middle text-center"> Click Here
    </button>
    </div>
     
    </div>
        </div>
        </>)
    })}
        
   </>)



}
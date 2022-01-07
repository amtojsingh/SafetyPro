import React,{useState} from 'react'

export default function Accord({title,content}) {
    //console.log(props.data)
    const [show,setShow]= useState(false);
    return (
        <div className="mx-6 mb-2.5">
           <div className="accgreen py-2 font-semibold" onClick={()=>setShow(!show)}>
               <h1 className="text-black font-medium ml-4"><button className="font-semibold text-lg" onClick={()=>setShow(!show)}>{title}</button></h1>
           </div>
           
           <div className="bg-gray-300"> {show &&<p className="text-black ml-4 pr-4 mb-2.5 py-1.5">{content}</p>}</div>
        </div>
    )
}

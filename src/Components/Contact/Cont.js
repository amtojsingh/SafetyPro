import React from 'react'

export default function Cont() {
    return (
        <div className="green_bg3">
<div className="grid grid-cols-2 gap-4 ml-28 my-9">
<div className="w-3/5">
<h1 className="text-5xl  pt-12 text-[#1d3042]">CONTACT US</h1>
  <div className="bg-grey-300 border-1 mt-5"> <input type="text" placeholder="Name" className="contactform"></input></div><br/>
  <div className="bg-grey-300 "> <input type="text" placeholder="Email"  className="contactform"></input></div><br/>
  <div className="bg-grey-300"> <input type="text" placeholder="Subject"  className="contactform"></input></div><br/>
  <div className="bg-grey-300"> <input type="text" placeholder="Message"  className="contactform"></input></div><br/>
  <div className="cls my-6" > <img alt="img"src="./captcha.png"></img></div>
  <div><button className="my-2 w-28 p-1.5 text-xl block blue_button"> Submit</button></div>
  </div>
  <div className=" content-end"> <img alt= "uni" src="./Contact.png"></img></div>
</div>
      </div>
    )
}

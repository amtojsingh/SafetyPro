import React from 'react'
export default function BreadCrumb({value}) {

	return(
<div className="w-full">
<ol class="breadcrumb flex">

  	<li className="breadcrumb-item">You are here:  </li>
    <li className="breadcrumb-item pl-1"><a href="https://www.safetyprotc.com/home.php"> Home</a></li>

    <li className="breadcrumb-item active" aria-current="page"> {value}</li>



  </ol>


</div>
)
}
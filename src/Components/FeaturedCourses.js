import axios from "axios";
import React,{useState} from "react";
//import data from "./data";

const baseURL = "https://www.safetyprotc.com/webservice/rest/server.php?wsfunction=local_metadata_home_courses&moodlewsrestformat=json&wstoken=fb115bb7535ad2f01dceea80d52361cc&visible=1";

function FeaturedCourses(){

    const [postres, setPost] = React.useState(null);
    React.useEffect(() => {
    axios
      .post(baseURL, {       
      })
      .then((response) => {
        setPost(response.data);
      });
     }, []);
    var postar=JSON.parse(postres);
    console.log(postar);
    return(<>
    {postar && postar.map((course)=>{
        return(<>
            <figure className="bg-white shadow-lg shadow-gray-200 pt-5 min-h-full h-3/5">
       <img alt="Courses" className="w-72 mx-auto" src= {course.courseimage} />
       <figcaption className="text-center text-gray font-semibold text-l mb-3.5 pt-2">
          <p> {course.coursename}</p>
         <button className="mt-5 text-center blue_button p-4 leading-3"> Course Details</button>
       </figcaption> 
       </figure> 
        </>)
    })          
    }  
    </>)
}export default FeaturedCourses;
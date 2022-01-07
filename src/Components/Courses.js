import React from 'react';
import Header from '../Header';
import Home from '../HomePage/Home';
//import Course from './Courses/Course';
import CoursesCard from "./CoursesCard";
function Courses(){
  return(<>
  <Header></Header>
<CoursesCard></CoursesCard>
    <Home></Home>
  </>)
}
export default Courses;
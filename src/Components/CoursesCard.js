import React from 'react'
import FeaturedCourses from './FeaturedCourses'

export default function CoursesCard() {
    return (
    <div>        
    <div className="green_bg">
  
    <div className="font-semibold  text-center text-3xl text-black"> <h1>FEATURED COURSES</h1>
    </div>
      <section className="p-20 grid sm:grid-cols-2 md:grid-cols-4 gap-6"> 
      <FeaturedCourses/>
    </section>
    </div>
        </div>
    )
}

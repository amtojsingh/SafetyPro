import React from 'react'
import Banner from '../Components/Banner'
import CoursesCard from '../Components/CoursesCard'
import Homegridsection from './Homegridsection'
import Header from '../Header'
import Footer from "../Footer"
export default function Homepage() {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <CoursesCard></CoursesCard>
            <Homegridsection></Homegridsection>    
            <Footer></Footer>
        </div>
    )
}

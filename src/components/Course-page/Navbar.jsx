import React from "react";
import Navbar from "../Home-page/Navbar.jsx";
import Courses from "../../Courses.jsx";
import Footer from "../Home-page/Footer.jsx";
function CourseNavbar(){
    return(
        <>
        
        <Navbar/>
        <img src="\public\CoursesPage_images\Courses.png" alt="Course Page Banner" />
        <Courses/>
        <Footer/>
        
        </>)
}


export default CourseNavbar;
import React from "react";

function AboutUs() {
    return (
        <>
            <div> 
        
     <center><button className="explore_courses">Explore All Courses</button></center>  
</div>        
<section className="about-us">
    <div className="left-section">

        <p className="aboutus">About us</p>
        <p className="about_para1">Start learning with skills </p>
        <p className="about_para2">Hunt Now</p>
        <p className="about_para3">Tap into your full potential with online courses guided by industry experts.
Master high-demand skills on your schedule and take control of your 
career journey today.</p>
    <div className="about-container">
        <div>

            <img src="/AboutUs_images/Learning.png"/>
            <p>Start learning from our experts</p>
            <img src="/AboutUs_images/Book.png"/>
            <p>Enhance your skills with us now</p>
        </div>
        <div>
       <img src="/AboutUs_images/mortarboard_fill 1.png"/>
       <p>Do the professional level course</p>
       <img src="/AboutUs_images/certificate.png"/>
        <p>Get our verified certificate</p>
        </div>
  </div>
            <button className="browse-courses">Browse courses</button>
    </div>
    <div className="right-section">
        <img src="/AboutUs_images/aboutus_image04.png"/>
        <img src="/AboutUs_images/aboutus-pexels-julia-m-cameron-4144224 1.png"/>
            
    </div>

</section>


        </>
    );
}

export default AboutUs;
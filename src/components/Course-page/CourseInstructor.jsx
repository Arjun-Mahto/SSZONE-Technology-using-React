
import Courses from "../../Courses";
import Navbar from "../Home-page/Navbar";
import Footer from "../Home-page/Footer";

function CourseInsturctor() {
  return (

            <>
            <Navbar />
            <img  className="courseView_image" src="/CourseDetails_images/Section (1).png" alt="Course Page Banner" />
            <div className="co-main">

            <div className="co-d1" >

                    <p>
                        Full Stack Web Development
                     </p>
                <div className="overviewD1">
                    <span className="co-span">
                        <img  className=" co-image" src="/CourseOverview_image/avatar.png" />
                        <span className="co-span2">

                        <p>Instructor </p>
                        <p>Dylen Merigue</p>
                        </span>
                    </span>
                    <span>
                        <p>Categories</p>
                        <p>Online Teaching</p>
                    </span>
                    <span>
                        <p>Reviews</p>
                        <p>⭐⭐⭐⭐✰</p>
                    </span>
                </div>
                



                <div className="co-right_section">
                        <span className="co-right_section_span">
                    
                        <img src="\CourseDetails_images\Frame 1000003098.png"></img>
                        <p> ₹4999</p>
                        <button className="co-button">Enroll Now</button>
                        
                        </span>

                             <span className="co-right_section_span2">
                            <p ><b>This Course Includes:</b></p>
                            <p> 62 hours on-demand video</p>
                            <p> Dylan meringue instructor</p>
                            <p>English language</p>
                            <p>Advance level</p>
                            <p>Certificate of Completion</p>
                            <p>Access on Mobile andd TV</p>
                        </span>   
                        <span >
                           <p className="co-right_section_span3">
                            <p>Share it:</p>
                            <img  src="\CourseDetails_images\Dribble.png" alt="Instagram"></img>
                            <img  src="\CourseDetails_images\Twitter.png" alt="Twitter"></img>
                            <img  src="\CourseDetails_images\linkedin.png" alt="LinkedIn"></img>

                            <img  src="\CourseDetails_images\facebook.png" alt="Facebook"></img>
                            </p> 

                        </span>



                    </div>
            </div>
                    
            </div>
         <div className="co-instructor">
            <span><img src="/CourseInstructor_images/Rectangle 5.png"></img></span>
            <span  className="co-instructor-text">
                <p><b>Dylen Merigue</b></p>
                <p>Back-End Development</p>
                <p>This course is designed to give learners a clear and practical understanding of back-end development. Whether you're new to programming or looking to expand your skills, you’ll gain hands-on experience with the tools and techniques used in real-world development. My goal is to equip you with the knowledge and confidence to build efficient, scalable server-side applications from the ground up.</p>
            </span>
         </div>
         <div className="co-instructor-social">
            <p>Social Network</p>
            <img src="/CourseInstructor_images/Dribble.png" alt="Instagram"></img>
            <img src="/CourseInstructor_images/Twitter.png" alt="Twitter"></img>  
            <img src="/CourseInstructor_images/facebook.png" alt="LinkedIn"></img>      
         </div>
           
            
            <Courses/>
            <Footer/>
            </>

 ) ;
}

export default CourseInsturctor;
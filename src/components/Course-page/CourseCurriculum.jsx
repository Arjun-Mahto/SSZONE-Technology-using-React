
import Courses from "../../Courses";
import Navbar from "../Home-page/Navbar";
import Footer from "../Home-page/Footer";

function CourseCurriculum() {
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
         
            <div >
                   <div>
                <ul className="co-ul">
                    <li>Overview</li>
                    <li>Curriculum</li>
                    <li>Instructor</li>
                    <li>Reviews</li>
                    <hr className="hr1"></hr>
                </ul>
            </div>
                <div className="co-d2 co-d2-curriculum">
                  
                    <p><b>Course Module</b></p>
                    <div className="course-outline">
      <p>Introduction to web development</p><hr className="co-hr1"></hr>
      <p >What is Full Stack Development?</p><hr className="co-hr1"></hr>
      <p>Frontend vs Backend vs Database.</p><hr className="co-hr1"></hr>
      <p>How the Web Works: HTTP, DNS, Hosting.</p><hr className="co-hr1"></hr>
      <p>Frontend Development - HTML, CSS, JS</p><hr className="co-hr1"></hr>
      <p>Frontend Framework - React.js</p><hr className="co-hr1"></hr>
      <p>Version Control with Git & GitHub</p><hr className="co-hr1"></hr>
      <p>Backend Development with Node.js & Express</p><hr className="co-hr1"></hr>
      <p>Databases - MongoDB</p><hr className="co-hr1"></hr>
      <p>User Authentication & Authorization</p><hr className="co-hr1"></hr>
      <p>Deployment & Hosting</p><hr className="co-hr1"></hr>
      <p>Project Work</p><hr className="co-hr1"></hr>
    </div>
                    
                </div>
                    
            </div>
            
            <Courses/>
            <Footer/>
            </>

 ) ;
}

export default CourseCurriculum;
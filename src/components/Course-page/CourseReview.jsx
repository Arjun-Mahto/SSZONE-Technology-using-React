
import Courses from "../../Courses";
import Navbar from "../Home-page/Navbar";
import Footer from "../Home-page/Footer";

function CourseReview() {
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
            <div>
                <ul className="co-ul">
                    <li>Overview</li>
                    <li>Curriculum</li>
                    <li>Instructor</li>
                    <li>Reviews</li>
                    <hr className="hr1"></hr>
                </ul>
            </div>
            <div>
                <span className="co-review">

                <img src="/CourseReviews_images/avatar1.png"></img>
                <p>Add a comment...</p>
                </span>
                <hr className="cr-hr1"></hr>

            </div>
        <div className="co-review2">
                <span className="co-review-span">

                <img src="/CourseReviews_images/avatar.png"></img>
                <p>

                <p>Russel Sprout</p>
                <p> April 19,2025 At 10:45 pm</p>
                 
                </p>
                
                </span>
                <p className="cr-p">Great read for beginners! I finally understand how JavaScript fits in with HTML and CSS. Excited to start coding!</p>
               

            </div>
            <div className="co-review2">
                <span className="co-review-span">

                <img src="/CourseReviews_images/avatar.png"></img>
                <p>

                <p>Russel Sprout</p>
                <p> April 19,2025 At 10:45 pm</p>
                 
                </p>
                
                </span>
                <p className="cr-p">Great read for beginners! I finally understand how JavaScript fits in with HTML and CSS. Excited to start coding!</p>
               

            </div>
            <div className="co-review2">
                <span className="co-review-span">

                <img src="/CourseReviews_images/avatar.png"></img>
                <p>

                <p>Russel Sprout</p>
                <p> April 19,2025 At 10:45 pm</p>
                 
                </p>
                
                </span>
                <p className="cr-p">Great read for beginners! I finally understand how JavaScript fits in with HTML and CSS. Excited to start coding!</p>
               

            </div>
    
           
            
            <Courses/>
            <Footer/>
            </>

 ) ;
}

export default CourseReview;
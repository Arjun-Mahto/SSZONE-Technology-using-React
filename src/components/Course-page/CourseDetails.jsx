
import Navbar from "../Home-page/Navbar";

function CourseOverview() {
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
                    
                        <img src="\public\CourseDetails_images\Frame 1000003098.png"></img>
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
                <div className="co-d2">
                  
                    <p><b>Description</b></p>
                    <p>Dive into the world of Full Stack Web Development and learn how to build complete, dynamic web applications from start to finish. This course covers both front-end and back-end technologies, giving you a solid foundation in HTML, CSS, JavaScript, server-side programming, databases, APIs, and deployment. Whether you're designing user-friendly interfaces or writing powerful server logic, you’ll gain hands-on experience with real-world projects. Perfect for beginners or aspiring developers looking to become versatile and job-ready in the tech industry</p>
                </div>
                    
            </div>
            <div className="co-d3">
                <p> <b>What you will learn?</b></p>
            <div>
                <p>Build responsive websites using HTML, CSS, and JavaScript.</p>
                <p>Develop dynamic web applications with front-end frameworks.</p>
                <p>Create and manage server-side logic with backend technologies.</p>
                <p>Work with databases and perform CRUD operations.</p>
                <p>Connect frontend and backend using RESTful APIs.</p>
                <p>Deploy full stack applications to live servers.</p>
                <p>Understand version control with Git and GitHub.</p>
                <p>Gain real-world experience through hands-on projects.</p>
            </div>

            </div>
            
            </>

 ) ;
}

export default CourseOverview;
import React from "react";
function Courses(){

    return (
        
        <>
             <div className="popular_courses">
       <center><p id="para1">Popular Courses</p></center> 
       <center><p id="para2">Choose our top courses</p></center> 
       <center><p id="para3">Discover a world of knowledge and opportunities with our online education platform pursue a new career.</p></center> 

        <ul>
            <li><button>Trending</button></li>
            <li><button>All Categories</button></li>
            <li><button>Design</button></li>
            <li><button>Marketing</button></li>
            <li><button>Programming</button></li>
            <li><button>Web Design</button></li>

        </ul>
    </div>
       <div className="card-container">
  {/* Card 1 */}
  <div className="card">
    <div style={{ position: 'relative' }} className="card-image">
      <img src="/Card_images/Section (1).png" alt="Course Image" />
    </div>
    <div className="card-body">
      <div className="card-title">Full Stack Web Development</div>
      <div className="card-description">
        Become a proficient full-stack developer with this course covering HTML, CSS, JavaScript, React.
      </div>
      <div className="card-footer">
        <span>📘 20 Lessons</span>
        <div className="rating">⭐ 4.8</div>
      </div>
      <div style={{ marginBottom: '12px' }}>
        <span className="price">₹ 4,999</span>
        <span className="old-price">₹11,999</span>
      </div>
      <a href="#" className="enroll-button">Enroll Now</a>
    </div>
  </div>

  {/* Card 2 */}
  <div className="card">
    <div style={{ position: 'relative' }} className="card-image">
      <img src="/Card_images/Section (1).png" alt="Course Image" />
    </div>
    <div className="card-body">
      <div className="card-title">Full Stack Web Development</div>
      <div className="card-description">
        Become a proficient full-stack developer with this course covering HTML, CSS, JavaScript, React.
      </div>
      <div className="card-footer">
        <span>📘 20 Lessons</span>
        <div className="rating">⭐ 4.8</div>
      </div>
      <div style={{ marginBottom: '12px' }}>
        <span className="price">₹ 4,999</span>
        <span className="old-price">₹11,999</span>
      </div>
      <a href="#" className="enroll-button">Enroll Now</a>
    </div>
  </div>

  {/* Card 3 */}
  <div className="card">
    <div style={{ position: 'relative' }} className="card-image">
      <img src="/Card_images/Section (1).png" alt="Course Image" />
    </div>
    <div className="card-body">
      <div className="card-title">Full Stack Web Development</div>
      <div className="card-description">
        Become a proficient full-stack developer with this course covering HTML, CSS, JavaScript, React.
      </div>
      <div className="card-footer">
        <span>📘 20 Lessons</span>
        <div className="rating">⭐ 4.8</div>
      </div>
      <div style={{ marginBottom: '12px' }}>
        <span className="price">₹ 4,999</span>
        <span className="old-price">₹11,999</span>
      </div>
      <a href="#" className="enroll-button">Enroll Now</a>
    </div>
  </div>
</div>
          <div className="card-container">
  {/* Card 1 */}
  <div className="card">
    <div style={{ position: 'relative' }} className="card-image">
      <img src="/Card_images/Section (1).png" alt="Course Image" />
    </div>
    <div className="card-body">
      <div className="card-title">Full Stack Web Development</div>
      <div className="card-description">
        Become a proficient full-stack developer with this course covering HTML, CSS, JavaScript, React.
      </div>
      <div className="card-footer">
        <span>📘 20 Lessons</span>
        <div className="rating">⭐ 4.8</div>
      </div>
      <div style={{ marginBottom: '12px' }}>
        <span className="price">₹ 4,999</span>
        <span className="old-price">₹11,999</span>
      </div>
      <a href="#" className="enroll-button">Enroll Now</a>
    </div>
  </div>

  {/* Card 2 */}
  <div className="card">
    <div style={{ position: 'relative' }} className="card-image">
      <img src="/Card_images/Section (1).png" alt="Course Image" />
    </div>
    <div className="card-body">
      <div className="card-title">Full Stack Web Development</div>
      <div className="card-description">
        Become a proficient full-stack developer with this course covering HTML, CSS, JavaScript, React.
      </div>
      <div className="card-footer">
        <span>📘 20 Lessons</span>
        <div className="rating">⭐ 4.8</div>
      </div>
      <div style={{ marginBottom: '12px' }}>
        <span className="price">₹ 4,999</span>
        <span className="old-price">₹11,999</span>
      </div>
      <a href="#" className="enroll-button">Enroll Now</a>
    </div>
  </div>

  {/* Card 3 */}
  <div className="card">
    <div  className="card-image">
      <img src="/Card_images/Section (1).png" alt="Course Image" ></img>
    </div>
    <div className="card-body">
      <div className="card-title">Full Stack Web Development</div>
      <div className="card-description">
        Become a proficient full-stack developer with this course covering HTML, CSS, JavaScript, React.
      </div>
      <div className="card-footer">
        <span>📘 20 Lessons</span>
        <div className="rating">⭐ 4.8</div>
      </div>
      <div style={{ marginBottom: '12px' }}>
        <span className="price">₹ 4,999</span>
        <span className="old-price">₹11,999</span>
      </div>
      <a href="#" className="enroll-button">Enroll Now</a>
    </div>
  </div>
</div>
  
        </>
        )



}


export default Courses;
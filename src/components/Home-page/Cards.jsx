function Cards(){

    return(
            <>
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
            
            </>


    )
}

export default Cards;
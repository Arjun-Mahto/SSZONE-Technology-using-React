function BlogsCart() {
  return (
<>

        {/* First row of cards */}
        <div className="card-container">
          <div className="card">
            <div>
              <img src="/Blogs_images/istockphoto-1434212178-612x612 1.png" alt="Course" />
            </div>
            <div className="card-body">
              <div className="card-title">
                <b>Introduction to JavaScript for Beginners</b>
              </div>
              <div className="blogs-description">
                <p>
                  Learn the fundamentals of JavaScript from scratch and start building interactive web pages...
                </p>
              </div>
              <div className="blogs_left">
                <span>10 April, 2025</span>
                <button className="read_more">Read More &#8594;</button>
              </div>
            </div>
          </div>

          <div className="card">
            <div>
              <img src="Blogs_images/istockphoto-1987424613-612x612 1.png" alt="Course" />
            </div>
            <div className="card-body">
              <div className="card-title">
                <b>Why Online Learning is the Key to Career Growth</b>
              </div>
              <div className="blogs-description">
                Discover how online learning empowers you to gain new skills, stay competitive, and get ahead...
              </div>
              <div className="blogs_left">
                <span>10 April, 2025</span>
                <button className="read_more">Read More &#8594;</button>
              </div>
            </div>
          </div>

          <div className="card">
            <div>
              <img src="/Blogs_images/pexels-marcus-aurelius-4063792 1.png" alt="Course" />
            </div>
            <div className="card-body">
              <div className="card-title">
                <b>Mastering Python: Beginner to Advanced Tips</b>
              </div>
              <div className="blogs-description">
                Unlock the power of Python with hands-on tips and techniques from beginner to advanced level.
              </div>
              <div className="blogs_left">
                <span>10 April, 2025</span>
                <button className="read_more">Read More &#8594;</button>
              </div>
            </div>
          </div>
        </div>


</>
  );
}
export default BlogsCart;   
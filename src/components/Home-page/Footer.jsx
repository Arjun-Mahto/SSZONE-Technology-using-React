import React from "react";

function Footer() {
  return (
    <>
      <footer>
        <div className="company-info">
          <div className="logo">
            <img src="/Footer_images/Logo.png" alt="Company Logo" />
          </div>
          <p className="description">
            Discover a world of knowledge and opportunities with our online
            education platform. Pursue a new career.
          </p>
        </div>

        <div className="links">
          <h3 className="footer_h3">LINKS</h3>
          <ul className="footer_ul">
            <li className="footer_li">
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Courses</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Blogs</a>
            </li>
          </ul>
        </div>

        <div className="contact">
          <h3 className="white">CONTACT US</h3>
          <p className="contact-info">
            GMS Road Dehradun, <br />
            Uttarakhand, India <br />
            +91 897 989 1703
          </p>
        </div>

        <div className="social">
          <h3 className="white">Social Media</h3>
          <div className="social-icons">
            <span>💬</span>
            <span>💮</span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

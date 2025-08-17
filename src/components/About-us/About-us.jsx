import AboutUs from "../Home-page/AboutUs";
import Company from "../Home-page/Company";
import Footer from "../Home-page/Footer";
import Navbar from "../Home-page/Navbar";
import Testimonials from "../Home-page/Testimonials";

function AboutUsPage() {
  return (
   <>
   <Navbar />
   <img className="aboutus_image" src="/AboutUSpage_images/About Us.png" alt="About Us Banner" />
   <Company />
   <AboutUs />

    
   

      <div className="testinonialss au-main">
        <center>
          <p id="para1">
            <b>OUR TOP FEATURES</b>
          </p>
        </center>
        <center>
          <p id="para2">
            <b>Achive Your Goals With SSZone Technology</b>
          </p>
        </center>
        <center>
          <p id="blogs_para3">
            Empowering you with skills and knowledge to turn your goals into reality
          </p>
        </center>
      </div>

      <section className="testimonials">
        {/* Card 1 */}
        <div className="testimonial-card aboutusPage">
            <img
            src="/AboutUSpage_images/Education.png"
            alt="User"
            className="avatar"
          />
          <h4>High Quality Courses</h4>
          <p className="quote">
           Expert-designed courses crafted to deliver practical skills and real-world knowledge.
          </p>
          
          
        </div>

        {/* Card 2 */}
        <div className="testimonial-card .aboutusPage">
         <img
            src="/AboutUSpage_images/Education.png"
            alt="User"
            className="avatar"
          />
          <h4>High Quality Courses</h4>
          <p className="quote">
           Expert-designed courses crafted to deliver practical skills and real-world knowledge.
          </p>
        </div>

        {/* Card 3 */}
        <div className="testimonial-card .aboutusPage">
          <img
            src="/AboutUSpage_images/Education.png"
            alt="User"
            className="avatar"
          />
          <h4>High Quality Courses</h4>
          <p className="quote">
           Expert-designed courses crafted to deliver practical skills and real-world knowledge.
          </p>
        </div>
      </section>
<Testimonials />
<Footer />
   </>
  );
}

export default AboutUsPage;
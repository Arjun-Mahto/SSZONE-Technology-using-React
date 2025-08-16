import Footer from "../Home-page/Footer";
import Navbar from "../Home-page/Navbar";






function Contact_us(){
    return(
        <>
        <Navbar />
        <img  className="contactUs_image " src="/ContactUSpage_images/Contact us.png"></img>

        <div className="contactus_main">
            <div className="contactus_left">
                <p> Get in Touch</p>
                <p>We're here to help</p>
                <span className="contactus_left_para">
                    <img src="/ContactUSpage_images/Location.png" alt="Phone Icon" />
                    <span>

                    <p><b>HEAD OFFICE</b></p>
                    <p>GMS Road Dehradun</p>
                    <p>Uttarakhand,India</p>
                    </span>
                </span>
                <span className="contactus_left_para">
                    <img src="/ContactUSpage_images/Location (1).png" alt="Phone Icon" />
                    <span>

                    <p><b>Email Support</b></p>
                    <p>info@novanector.co.in</p>
                    
                    </span>
                </span>
                <span className="contactus_left_para">
                    <img src="/ContactUSpage_images/Location (2).png" alt="Phone Icon" />
                    <span>

                    <p><b>Let's Talk</b></p>
                    <p>Phone: +91 8979891703</p>
                    </span>
                </span>
                <span className="contactus_left_para">
                    <img src="/ContactUSpage_images/Location (3).png" alt="Phone Icon" />
                    <span>

                    <p><b>HEAD OFFICE</b></p>
                    <p>09:00 AM- 06:00 PM</p>
                    <p>Monday-Saturday</p>
                    </span>
                </span>

            </div>
<div className="contact-container">
      <h4 className="form-subtitle">SEND US MESSAGE</h4>
      <h2 className="form-title">Need Help? Message.</h2>

      <form className="contact-form">
        <div className="form-row">
          <input type="text" placeholder="Enter your first name" />
          <input type="text" placeholder="Enter your last name" />
        </div>

        <div className="form-row">
          <input type="text" placeholder="Enter your phone number" />
          <input type="email" placeholder="Enter your email address" />
        </div>

        <input type="text" placeholder="Enter subject" />
        <input type="text" placeholder="Enter your address" />
        <textarea placeholder="Type message here..."></textarea>

        <button type="submit" className="btn-submit">Send Message</button>
      </form>
    </div>
        </div>
            <img className="contactUs_image" src="/ContactUSpage_images/Location1.png"></img>
            <Footer />


        </>
    ) 
}

export default Contact_us;
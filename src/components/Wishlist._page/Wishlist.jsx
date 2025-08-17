import Cards from "../Home-page/Cards";
import Footer from "../Home-page/Footer";
import Navbar from "../Home-page/Navbar";
import TestimonialCard from "../Home-page/TestimonialCard";




function Whislist(){
            return(


                <>
                    <Navbar />
                    <img className="wishlist_image" src="/WhislistPage_images/Wishlist.png" alt="Wishlist Banner" />

                    <div className="blogs">
                     <div>
                     <center>
                <p id="para1"><b>Our Wishlist</b></p>
            </center>
            <center>
                     <p id="para2">Save Your Favorite Courses</p>
                  </center>
                <center>
            <p id="blogs_para3">
              Keep all your favorite courses in one place and come back to learn anytime
            </p>
          </center>
        </div>
        </div>


                        <Cards />
                        <Cards />
                        <Cards />       
                        <Cards />
                        <Footer />
            
                </>
            )

}


export default Whislist;
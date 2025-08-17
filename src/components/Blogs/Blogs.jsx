import BlogsCart from "../Home-page/BlogCart";
import Footer from "../Home-page/Footer";
import Navbar from "../Home-page/Navbar";
import TestimonialCard from "../Home-page/TestimonialCard";





function Blog(){
        return(


            <>

            <Navbar />
            <img className="blogs_image" src="/BlogPage_images/Blog.png" alt="Blogs Banner" />
                  <div className="blogs">
        <div>
          <center>
            <p id="para1"><b>Our Blogs</b></p>
          </center>
          <center>
            <p id="para2">Ideas That Inspire Learning</p>
          </center>
          <center>
            <p id="blogs_para3">
              Stay updated with the latest insights, tips, and trends from our expert blog posts.
            </p>
          </center>
        </div>
        </div>
        <BlogsCart />
        <BlogsCart />
        <Footer />
            </>
        )



}

export default Blog;
import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
    
      <header className="navbar">
        <ul>
            <li className="logo" ><img src="/Navbar_images/logo.png"/></li>
            <li > <Link className="color_black" to="/">Home</Link></li>
            <Link className="color_black" to="/course">Course</Link>
              <Link className="color_black" to="/about">About Us</Link>
                <Link className="color_black" to="/contact">Contact Us</Link>
                  <Link className="color_black" to="/blogs/:id">Blogs</Link>
           
           
            <li className="like_logo"><Link to="/wishlist"><img className="heart" src="/Navbar_images/heart.png"/></Link></li>
            <li className="Shopping_logo"><Link to="/cart"><img  className="heart" src="/Navbar_images/Shopping Cart.png"/></Link></li>

            <li><button className="navbar_btn1">Sign up</button></li>
            <li><button className="navbar_btn1">Log in</button></li>

            
            
        </ul>
        <hr/>
    </header>

    
     
    </>
  );   

}
export default Navbar;

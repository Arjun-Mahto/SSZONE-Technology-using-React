import React from "react";
function Navbar() {
  return (
    <>
    
      <header className="navbar">
        <ul>
            <li className="logo" ><img src="/Navbar_images/logo.png"/></li>
            <li>Home</li>
            <li>Course</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Blogs</li>
            <li className="like_logo"><img className="heart" src="/Navbar_images/heart.png"/></li>
            <li className="Shopping_logo"><img  className="heart" src="/Navbar_images/Shopping Cart.png"/></li>

            <li><button className="navbar_btn1">Sign up</button></li>
            <li><button>Log in</button></li>

            
            
        </ul>
        <hr/>
    </header>

    
     
    </>
  );   

}
export default Navbar;

import Cards from "../Home-page/Cards";
import Footer from "../Home-page/Footer";
import Navbar from "../Home-page/Navbar";









function Cart() {
    return(
        <>
        <Navbar />
        <div className="shopping-container">
      <h2>Shopping Cart</h2>
      <p className="courses-count">2 Courses in Cart</p>

      <div className="cart-layout">
        {/* Left Section - Cart Items */}
        <div className="cart-items">
          <div className="cart-card">
            <img
              src="\public\Cart_images\Image.png"
              alt="Course Thumbnail"
              className="course-img"
            />
            <div className="course-details">
              <h3>Full Stack Web Development</h3>
              <p className="author">By Dylan Meringue</p>
              <p className="rating">⭐⭐⭐⭐⭐ 4.5 (8 ratings)</p>
              <p className="meta">10.5 total hours • 30 lectures • All Levels</p>
            </div>
            <div className="course-price">₹4,999</div>
            <button className="remove-btn">Remove</button>
          </div>

          <div className="cart-card">
            <img
              src="\public\Cart_images\Image.png"
              alt="Course Thumbnail"   
              className="course-img"
            />
            <div className="course-details">
              <h3>Full Stack Web Development</h3>
              <p className="author">By Dylan Meringue</p>
              <p className="rating">⭐⭐⭐⭐⭐ 4.5 (8 ratings)</p>
              <p className="meta">10.5 total hours • 30 lectures • All Levels</p>
            </div>
            <div className="course-price">₹4,999</div>
            <button className="remove-btn">Remove</button>
          </div>
        </div>



        {/* Right Section - Summary */}
        <div className="cart-summary">
          <div className="order-box">
            <h3>Order Summary</h3>
            <p>
              SUBTOTAL <span>₹9,998</span>
            </p>
            <p>
              TOTAL PROMO <span>-₹500</span>
            </p>
            <hr />
            <p className="total">
              TOTAL <span>₹9,498</span>
            </p>
            <button className="checkout-btn">CHECKOUT</button>
          </div>

          <div className="promo-box">
            <h3>Promotions</h3>
            <div className="applied-coupon">
              <p>2588JYLUYNAA771 is applied</p>
              <button className="remove-coupon">X</button>
            </div>
            <input type="text" placeholder="Enter Coupon" />
            <button className="apply-btn">Apply</button>
          </div>
        </div>
      </div>
    </div>

 <div>
          <center>
            <p id="para1"><b>Explore Recommended Course</b></p>
          </center>
          <center>
            <p id="para2">You Might Also Like</p>
          </center>
          <center>
            <p id="blogs_para3">
              Stay updated with the latest insights, tips, and trends from our expert blog posts.
            </p>
          </center>
        </div>
        <Cards />
    <Footer />
        </>
    )
}


export default Cart;



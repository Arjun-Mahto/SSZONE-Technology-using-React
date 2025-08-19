import React from "react";
import Navbar from "../Home-page/Navbar";
import Footer from "../Home-page/Footer";

function Billing() {
  return (
    <>
        <Navbar />
      <div className="billing-container">
      <h1>Billing Details</h1>
      <div className="billing-sections">
        {/* Left Section - Your Details */}
        <div className="billing-details">
          <h3>Your Details</h3>
          <form>
            <div className="form-row">
              <div className="form-group">
                <label>First Name*</label>
                <input type="text" placeholder="First Name" />
              </div>
              <div className="form-group">
                <label>Last Name*</label>
                <input type="text" placeholder="Last Name" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Phone Number*</label>
                <input type="text" placeholder="Phone Number" />
              </div>
              <div className="form-group">
                <label>Email Address*</label>
                <input type="email" placeholder="Email Address" />
              </div>
            </div>

            <div className="form-group full-width">
              <label>Street Address*</label>
              <input type="text" placeholder="Street Address" />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>State*</label>
                <input type="text" placeholder="State" />
              </div>
              <div className="form-group">
                <label>Town / City*</label>
                <input type="text" placeholder="Town / City" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Pin Code*</label>
                <input type="text" placeholder="Pin Code" />
              </div>
              <div className="form-group">
                <label>Country / Region*</label>
                <input type="text" placeholder="Country / Region" />
              </div>
            </div>
          </form>
        </div>

        {/* Right Section - Order Summary & Payment */}
        <div className="billing-order">
          <div className="order-summary">
            <h3>Your Order</h3>
            <div className="order-item">
              <p>Full Stack Web Development</p>
              <p>₹90,000</p>
            </div>
            <div className="order-total">
              <strong>TOTAL</strong>
              <strong>₹91,500</strong>
            </div>
          </div>

          <div className="payment-method">
            <h3>Payment Method</h3>
            <label>
              <input type="radio" name="payment" /> Card Payment
            </label>
            <label>
              <input type="radio" name="payment" /> UPI Payment
            </label>
            <p className="privacy-text">
              Your personal data will be used to process your order, support
              your experience throughout this website, and for other purposes
              described in our <a href="#">Privacy policy</a>.
            </p>
            <label className="terms">
              <input type="checkbox" /> I have read and agree to the website
              Terms and conditions
            </label>
            <button className="place-order">PLACE ORDER</button>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default Billing;

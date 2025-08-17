import React from "react";

function Testimonials() {
  return (
    <>
      <div>
        <center>
          <button className="explore_courses">
            Explore All Blogs &#8594;
          </button>
        </center>
      </div>

      <div className="testinonialss">
        <center>
          <p id="para1">
            <b>Testimonials</b>
          </p>
        </center>
        <center>
          <p id="para2">
            <b>What our students say about us</b>
          </p>
        </center>
        <center>
          <p id="blogs_para3">
            Hear real stories and experiences from students who’ve transformed
            their careers with our courses.
          </p>
        </center>
      </div>

     
      <div className="qna">
        <div className="testinonialss">
          <center>
            <p id="para1">
              <b>Quick Answers</b>
            </p>
          </center>
          <center>
            <p id="para2">
              <b>Frequently Asked Questions</b>
            </p>
          </center>
          <center>
            <p id="blogs_para3">
              Find clear answers to common questions about our courses,
              platform, and learning experience.
            </p>
          </center>
        </div>

        <div className="questions">
          <div className="question1">
            <p>What course do you offer?</p>
            <p>+</p>
          </div>
          <hr className="hr1" />

          <div className="question1">
            <p>How can I join your course?</p>
            <p className="plus_symbol">+</p>
          </div>
          <hr className="hr1" />

          <div className="question1">
            <p>Do I get a certificate after completion?</p>
            <p className="plus_symbol">+</p>
          </div>
          <hr className="hr1" />

          <div className="question1">
            <p>Can I access the course on mobile?</p>
            <p className="plus_symbol">+</p>
          </div>
          <hr className="hr1" />

          <div className="question1">
            <p>How long do I have access to the course?</p>
            <p className="plus_symbol">+</p>
          </div>
          <hr className="hr1" />

          <div className="question1">
            <p>Do I need any prior knowledge?</p>
            <p className="plus_symbol">+</p>
          </div>
          <hr className="hr1" />
        </div>
      </div>
    </>
  );
}

export default Testimonials;

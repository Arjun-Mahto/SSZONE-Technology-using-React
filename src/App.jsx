import React from 'react'
import './App.css'
import Navbar from './components/Home-page/Navbar'
import HeroSection from './components/Home-page/HeroSection.jsx'
import Company from './components/Home-page/Company.jsx'
import Courses from './Courses.jsx'
import AboutUs from './components/Home-page/AboutUs.jsx'
import Blogs from './components/Home-page/Blogs.jsx'
import Testimonials from './components/Home-page/Testimonials.jsx'
import Footer from './components/Home-page/Footer.jsx'
import CourseNavbar from './components/Course-page/Navbar.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CourseOverview from './components/Course-page/CourseDetails.jsx'
import CourseCurriculum from './components/Course-page/CourseCurriculum.jsx'
import CourseInsturctor from './components/Course-page/CourseInstructor.jsx'
import CourseReview from './components/Course-page/CourseReview.jsx'
import AboutUsPage from './components/About-us/About-us.jsx'
import Contact_us from './components/Contact-us/Contact_Us.jsx'
import Whislist from './components/Wishlist._page/Wishlist.jsx'
import Blog from './components/Blogs/Blogs.jsx'
import BlogsDetail from './components/BlogsDetails/BlogsDetail.jsx'
import Cart from './components/Cart/Cart.jsx'
import Billing from './components/Billing page/Billing.jsx'

function App() {
  return (
    <Router>
      {/* Common Navbar */}

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
            <Navbar /> 
              <HeroSection />
              <Company />
              <Courses />
              <AboutUs />
              <Blogs />
              <Testimonials />
              <Footer />
            </>
          }
        />

        {/* Courses Pages */}
        <Route path="/course" element={<CourseNavbar />} />
        <Route path="/course/overview" element={<CourseOverview />} />
        <Route path="/course/curriculum" element={<CourseCurriculum />} />
        <Route path="/course/instructor" element={<CourseInsturctor />} />
        <Route path="/course/review" element={<CourseReview />} />

        {/* Other Pages */}
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/contact" element={<Contact_us />} />
        <Route path="/wishlist" element={<Whislist />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/blogs/:id" element={<BlogsDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/billing" element={<Billing />} />
        
      </Routes>
    </Router>
  )
}

export default App



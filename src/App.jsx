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
import { BrowserRouter as Router } from 'react-router-dom'
import { Route } from 'react-router-dom'
function App() {
  return (
    <>
      {/* <Navbar />
      <HeroSection />
      <Company />
      <Courses />
      <AboutUs />
      <Blogs />
      <Testimonials />
      <Footer /> */}
      <CourseNavbar />
       
    </>
  )
}

export default App

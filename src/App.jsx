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

function App() {
  return (
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
  )
}

export default App

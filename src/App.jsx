import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import Signup from './components/Signup/Signup'
import Contact from './components/Contact/Contact'
import Testimonials from './components/Testimonials/Testimonials'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Testimonials/>
      <Signup/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App

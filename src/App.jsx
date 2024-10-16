import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import Signup from './components/Signup/Signup'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Signup/>
      <Footer/>
    </div>
  )
}

export default App

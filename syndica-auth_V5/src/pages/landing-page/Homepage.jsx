import React from 'react'
import Navbar from '../../components/landing-page/Navbar'
import Hero from '../../components/landing-page/home/Hero'
import About from '../../components/landing-page/home/About'
import Footer from '../../components/landing-page/Footer'

import '../../css/landing-page/home/responsive.css'

const Homepage = () => {
  return (
    <>
        {/* <Animatedcursor/> */}
        <Navbar/>
        <Hero/>
        <About/>
        <Footer/>
    </> 
  )
}

export default Homepage;
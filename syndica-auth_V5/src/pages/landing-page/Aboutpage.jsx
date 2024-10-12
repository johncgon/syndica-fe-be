import React from 'react'
import Navbar from '../../components/landing-page/Navbar'
import Footer from '../../components/landing-page/Footer'
import About from '../../components/landing-page/about/About'

import '../../css/landing-page/home/responsive.css'

const Aboutpage = () => {
  return (
    <>
        <Navbar/>
        <About/>
        <Footer/>
    </> 
  )
}

export default Aboutpage
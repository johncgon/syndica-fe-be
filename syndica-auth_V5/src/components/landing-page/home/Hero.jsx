import React from 'react'
import Form from './Form'

import '../../../css/landing-page/home/hero.css'

const Hero = () => {
  return (
    <div className="hero-container relative">
        <h1><span>Seamless</span><br/>Document Tracking</h1>
        <Form/>
        <div className="hero-background"></div>
    </div>
  )
}

export default Hero
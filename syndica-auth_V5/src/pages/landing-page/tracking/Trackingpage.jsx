import React from 'react'
import Form from '../../../components/landing-page/home/Form'
import '../../../css/landing-page/tracking/tracking.css'
import '../../../css/landing-page/tracking/responsive.css'
import Navbar from '../../../components/landing-page/Navbar'
import Footer from '../../../components/landing-page/Footer'

const Trackingpage = () => {
  return (
    <>
    <Navbar/>
    <div className="tracking__tracking-form-container">
        <h2>Enter Tracking Number</h2>
        <Form/>
    </div>
    <Footer/>
    </>
  )
}

export default Trackingpage;
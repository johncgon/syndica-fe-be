import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Homepage from './pages/landing-page/Homepage'
import Aboutpage from './pages/landing-page/Aboutpage'
import Trackingpage from './pages/landing-page/Trackingpage';
import ScrollToTop from './components/ScrollToTop'
import Loginpage from './pages/auth/Loginpage';
import Forgotpasswordpage from './pages/auth/Forgotpasswordpage';
import Adminpage from './pages/admin/Adminpage';
import Issuerpage from './pages/issuer/Issuerpage';
import AuthorizerPage from './pages/authorizer/AuthorizerPage'
import Privateroute from './Privateroute'; 
import Resetpassword from './pages/auth/Resetpassword';

import './index.css'

const App = () => {
    return (
        <>
            <Router>
                <ScrollToTop/>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/about" element={<Aboutpage />} />
                    <Route path="/tracking" element={<Trackingpage />} />

                    <Route path="/login" element={<Loginpage />} />
                    <Route path="/forgot-password" element={<Forgotpasswordpage />} />
                    <Route path="/reset-password/:token" element={<Resetpassword/>} />

                    <Route path="/admin" element={<Privateroute allowedRoles={['Admin']}><Adminpage/></Privateroute>} />
                    <Route path="/authorizer" element={<Privateroute allowedRoles={['Authorizer']}><AuthorizerPage/></Privateroute>} />
                    <Route path="/home" element={<Privateroute allowedRoles={['Issuer']}><Issuerpage/></Privateroute>} />
                </Routes>
            </Router>
        </>
    )
}

export default App
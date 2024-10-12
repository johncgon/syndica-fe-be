import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Homepage from './pages/landing-page/Homepage'
import Aboutpage from './pages/landing-page/Aboutpage'
import Trackingpage from './pages/landing-page/Trackingpage';
import ScrollToTop from './components/ScrollToTop'
import Loginpage from './pages/auth/Loginpage';
import Forgotpasswordpage from './pages/auth/Forgotpasswordpage';

import './index.css'
import App from './App';
import AppProvider from './context/Appcontext';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <Router>
            <ScrollToTop/>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/about" element={<Aboutpage />} />
                <Route path="/tracking" element={<Trackingpage />} />
                <Route path="/login" element={<Loginpage />} />
                <Route path="/forgot-password" element={<Forgotpasswordpage />} />
            </Routes>
        </Router> Test*/}

        <AppProvider>
            <App/>
        </AppProvider>
    </React.StrictMode>
)

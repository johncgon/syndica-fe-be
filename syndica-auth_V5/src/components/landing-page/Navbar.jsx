import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import logo from '../../assets/res/Homepage/logo.png';
import bjmplogo from '../../assets/res/bjmp/bjmp_logo.png'
import bjmp3logo from '../../assets/res/bjmp/bjmpro3_logo.png'

import '../../css/main/style.css';
import '../../css/main/nav-responsive.css';

const Navbar = () => {
    const [navVisible, setNavVisible] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const toggleNav = () => {
        setNavVisible(!navVisible);
    };

    const handleServicesClick = (e) => {
        e.preventDefault();
        if (location.pathname === '/') {
            document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
        } else {
            navigate('/');
            setTimeout(() => {
                document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
    };

    return (
        <nav>
            <div className="brand-container" id="top">
                <img src={bjmplogo} alt="BJMP Logo"/>
                <img src={bjmp3logo} alt="BJMPRO3 Logo"/>
                <img src={logo} alt="Syndica Logo"/>
                <div className="expand-button" onClick={toggleNav}>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path d="M5 12H20" stroke="#ffab2e" strokeWidth="2" strokeLinecap="round"></path>
                            <path d="M5 17H20" stroke="#ffab2e" strokeWidth="2" strokeLinecap="round"></path>
                            <path d="M5 7H20" stroke="#ffab2e" strokeWidth="2" strokeLinecap="round"></path>
                        </g>
                    </svg>
                </div>
            </div>
            <div className={`navigation-container ${navVisible ? 'nav-visible' : ''}`} id="navigation-container">
                <ul>
                    <Link to="/" className={location.pathname === '/' ? 'nav-a-active' : ''}>
                        Home
                    </Link>
                </ul>
                <ul>
                    <Link to="/about" className={location.pathname === '/about' ? 'nav-a-active' : ''}>
                        About
                    </Link>
                </ul>
                <ul>
                    <Link to="/tracking" className={location.pathname === '/tracking' ? 'nav-a-active' : ''}>
                        Tracking
                    </Link>
                </ul>
                <ul>
                    <a href="#features" onClick={handleServicesClick} className={location.hash === '#features' ? 'nav-a-active' : ''}>
                        Services
                    </a>
                </ul>
                <ul>
                    <Link to="" className="login-button mobile-loginButton">Login</Link>
                    {/* not sure if the mobile navigation bar login button should be set as active so ill be removing the path*/}
                </ul>
            </div>
            
            <Link to="/login" className="login-button desktop-loginButton button-hover">Login</Link>
        </nav>
    );
};

export default Navbar;

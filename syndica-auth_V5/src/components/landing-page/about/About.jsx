import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

import '../../../css/landing-page/about/about.css'
import '../../../css/landing-page/about/collab.css'
import '../../../css/landing-page/about/cta.css'
import '../../../css/landing-page/about/features.css'
import '../../../css/landing-page/about/hero.css'
import '../../../css/landing-page/about/responsive.css'
import '../../../css/landing-page/about/team.css'

import bjmplogo from '../../../assets/res/Homepage/bjmp-logo.png'
import syndicalogo from '../../../assets/res/Homepage/logo-image.png'
import sample from '../../../assets/res/Homepage/sample.png'

gsap.registerPlugin(ScrollTrigger);

const About = () => {

    const textAnimateRef = useRef(null);
    const animateLeftRef = useRef(null);
    const textWrapperRefs = useRef([]);

    useEffect(() => {
        gsap.to(textAnimateRef.current, {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.inOut",
            scrollTrigger: {
                trigger: textAnimateRef.current,
            },
        }, 0.25);

        gsap.to(animateLeftRef.current, {
            x: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power4.out",
            scrollTrigger: {
                trigger: animateLeftRef.current,
            },
        });

        gsap.to(textWrapperRefs.current, {
            x: 0,
            opacity: 1,
            duration: 0.75,
            ease: "power4.inOut",
            stagger: 0.25,
            scrollTrigger: {
                trigger: textWrapperRefs.current[0], 
            },
        });
    }, []);



  return (
    <>
        <div className="about__hero-container">
            <h1><span>Seamless</span><br/>Document Tracking</h1>
            <div className="about__hero-background"></div>
        </div>
        <div className="about__about-container">
            <div className="about__header-wrapper">
                <h1 className="about__animate-left" ref={animateLeftRef}>What is <span>SYN</span>DICA?</h1>
            </div>
            <div className="about__content-wrapper">
                <p className="about__text-animate" ref={textAnimateRef}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, deserunt, dolor nam provident commodi labore nulla eveniet amet veniam placeat nemo possimus. Reprehenderit possimus eveniet nisi dolorem totam autem sunt. <br/><br/>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, deserunt, dolor nam provident commodi labore nulla eveniet amet veniam placeat nemo possimus. Reprehenderit possimus eveniet nisi dolorem totam autem sunt.</p>
            </div>
        </div>

        <div className="about__features-container">
            <div className="about__image-section"></div>
            <div className="about__text-section">
                <div className="about__text-wrapper about__online-tracking" ref={el => textWrapperRefs.current[0] = el}>
                    <div className="about__feature-icon">
                        <svg fill="#0d3255" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g> <path d="M90,42H83.3936A35.9331,35.9331,0,0,0,54,12.6064V6A6,6,0,0,0,42,6v6.6064A35.9331,35.9331,0,0,0,12.6064,42H6A6,6,0,0,0,6,54h6.6064A35.9331,35.9331,0,0,0,42,83.3936V90a6,6,0,0,0,12,0V83.3936A35.9331,35.9331,0,0,0,83.3936,54H90a6,6,0,0,0,0-12ZM48,72A24,24,0,1,1,72,48,24.0238,24.0238,0,0,1,48,72Z"></path> <path d="M48,36A12,12,0,1,0,60,48,12.0157,12.0157,0,0,0,48,36Z"></path> </g> </g></svg>
                    </div>
                    <div className="about__text-inner">
                        <h2>Online Tracking</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa sit quia nihil cupiditate quibusdam reiciendis itaque dignissimos, quasi molestias corrupti, maiores debitis veritatis, obcaecati voluptas cum optio assumenda porro mollitia!</p>
                    </div>
                </div>
                <div className="about__text-wrapper about__dv-maker" ref={el => textWrapperRefs.current[1] = el}>
                    <div className="about__feature-icon">
                        <svg fill="#0d3255" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M18,1H6A3,3,0,0,0,3,4V22a1,1,0,0,0,1.707.707L6.845,20.57l1.323,1.984A1,1,0,0,0,8.9,23a.986.986,0,0,0,.806-.288L12,20.414l2.293,2.293a1,1,0,0,0,1.539-.153l1.323-1.984,2.138,2.137A1,1,0,0,0,21,22V4A3,3,0,0,0,18,1Zm1,18.586-1.293-1.293a.984.984,0,0,0-.806-.288,1,1,0,0,0-.733.44L14.845,20.43l-2.138-2.137a1,1,0,0,0-1.414,0L9.155,20.43,7.832,18.445a1,1,0,0,0-1.539-.152L5,19.586V4A1,1,0,0,1,6,3H18a1,1,0,0,1,1,1ZM13,11a1,1,0,0,1-1,1H8a1,1,0,0,1,0-2h4A1,1,0,0,1,13,11Zm0,4a1,1,0,0,1-1,1H8a1,1,0,0,1,0-2h4A1,1,0,0,1,13,15Zm4-4a1,1,0,0,1-1,1H15a1,1,0,0,1,0-2h1A1,1,0,0,1,17,11Zm0,4a1,1,0,0,1-1,1H15a1,1,0,0,1,0-2h1A1,1,0,0,1,17,15Zm0-9a1,1,0,0,1-1,1H8A1,1,0,0,1,8,5h8A1,1,0,0,1,17,6Z"></path></g></svg>  
                    </div>
                    <div className="about__text-inner">
                        <h2>DV Maker</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa sit quia nihil cupiditate quibusdam reiciendis itaque dignissimos, quasi molestias corrupti, maiores debitis veritatis, obcaecati voluptas cum optio assumenda porro mollitia!</p>
                    </div>
                </div>
                <div className="about__text-wrapper about__requirement-validation" ref={el => textWrapperRefs.current[2] = el}>
                    <div className="about__feature-icon">
                        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#f4f4f4" fillRule="evenodd" d="M3 10a7 7 0 019.307-6.611 1 1 0 00.658-1.889 9 9 0 105.98 7.501 1 1 0 00-1.988.22A7 7 0 113 10zm14.75-5.338a1 1 0 00-1.5-1.324l-6.435 7.28-3.183-2.593a1 1 0 00-1.264 1.55l3.929 3.2a1 1 0 001.38-.113l7.072-8z"></path> </g></svg>
                    </div>
                    <div className="about__text-inner ">
                        <h2>Requirements Validation</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa sit quia nihil cupiditate quibusdam reiciendis itaque dignissimos, quasi molestias corrupti, maiores debitis veritatis, obcaecati voluptas cum optio assumenda porro mollitia!</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="about__collaboration-container">
            <h1>BJMP X <span>SYNDICA</span></h1>
            <div className="about__logo-inner">
                <img src={bjmplogo} alt="bjmp logo"/>
                <img src={syndicalogo} alt="syndica logo"/>
            </div>
        </div>

        <div className="about__our-team">
            <h1>Meet the team</h1>
            <div className="about__card-container">
                <div className="about__card">
                    <div className="about__card-image">
                        <img src={sample} alt=""/>
                    </div>
                    <h3>Name Goes Here</h3>
                    <p>Roles goes here</p>
                </div>
                <div className="about__card">
                    <div className="about__card-image">
                        <img src={sample} alt=""/>
                    </div>
                    <h3>Name Goes Here</h3>
                    <p>Roles goes here</p>
                </div>
                <div className="about__card">
                    <div className="about__card-image">
                        <img src={sample} alt=""/>
                    </div>
                    <h3>Name Goes Here</h3>
                    <p>Roles goes here</p>
                </div>
                <div className="about__card">
                    <div className="about__card-image">
                        <img src={sample} alt=""/>
                    </div>
                    <h3>Name Goes Here</h3>
                    <p>Roles goes here</p>
                </div>
                <div className="about__card">
                    <div className="about__card-image">
                        <img src={sample} alt=""/>
                    </div>
                    <h3>Name Goes Here</h3>
                    <p>Roles goes here</p>
                </div>
            </div>
        </div>

        <div className="about__cta-container">
            <h1>SYN<span>DICA</span></h1>
            <p>Track your Document Safely & <span>Quickly</span></p>
            <Link to="/tracking">Start Tracking</Link>
        </div>
    </>
  )
}

export default About
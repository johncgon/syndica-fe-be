import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import gsap from 'gsap';

import logo from '../../assets/res/Homepage/logo-tag.png'

import '../../css/main/footer.css';
import '../../css/main/footer-responsive.css';
import '../../css/main/marquee.css';

const Footer = () => {
    useEffect(() => {
        let currentScroll = 0;
        let isScrollingDown = true;

        let tween = gsap.to(".marquee__part", {
            xPercent: -100, 
            repeat: -1, 
            duration: 30, 
            ease: "linear"
        }).totalProgress(0.5);

        gsap.set(".marquee__inner", {
            xPercent: -50
        });

        const handleScroll = () => {
            if (window.scrollY > currentScroll) {
                isScrollingDown = true;
            } else {
                isScrollingDown = false;
            }

            gsap.to(tween, {
                timeScale: isScrollingDown ? 1 : -1
            });

            currentScroll = window.scrollY;
        };

            window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []); 

  return (
    <>
      <section className="marquee_container">
        <div className="marquee__inner" aria-hidden="true">
          <div className="marquee__part">
            <p>&nbsp;SYNDICA <span>SYNDICA</span> SYNDICA <span>SYNDICA</span> SYNDICA</p>
          </div>
          <div className="marquee__part">
            <p><span>SYNDICA</span> SYNDICA <span>SYNDICA</span> SYNDICA <span>SYNDICA</span></p>
          </div>
        </div>
      </section>
      <footer>
        <div className="upper-footer">
          <h3>We Understand The Importance<br />Approaching Each Work!</h3>
          <h3>+123456789</h3>
        </div>
        <hr />
        <div className="lower-footer">
          <div className="left-lower-footer">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/tracking">Tracking</Link>
          </div>
          <div className="right-lower-footer">
            <img src={logo} alt="" />
            <div className="socials">
              {/* Add social media icons or links here */}
            </div>
          </div>
        </div>
        <p>Copyright ©2024 All rights reserved | This prototype is made with by Chewear.</p>
      </footer>
    </>
  );
};

export default Footer;

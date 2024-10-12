import React from 'react';
import '../../css/authorizer/sidebar.css';
import bjmplogo from '../../assets/res/logo/bjmpro3_logo.png';

const Sidebar = ({ setCurrentPage }) => {
    return (
        <div className="authorizer__sidebar-container flex flex-col w-56 h-full px-6 items-center shrink-0">
            <div className="authorizer__sidebar-top-wrapper flex w-full h-16 mt-4 justify-between">
                <img className="authorizer__sidebar-top-logo" src={bjmplogo} alt="BJMP Logo" />
                <div className="authorizer__sidebar-top-label flex flex-col justify-center">
                    <h3>BJMPROIII</h3>
                    <p>Authorizer</p>
                </div>
            </div>
            <hr className="authorizer__sidebar-breakline w-full my-4"/>
            <div className="authorizer__sidebar-navigation-wrapper flex flex-col w-full h-full gap-2">
                <div className="authorizer__sidebar-nav flex w-full h-12 items-center p-2 gap-4 rounded-md" onClick={() => setCurrentPage('Dashboard')}>
                    <svg width="2rem" height="2rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12.999V20C22 20.5523 21.5523 21 21 21H13V12.999H22ZM11 12.999V21H3C2.44772 21 2 20.5523 2 20V12.999H11ZM11 3V10.999H2V4C2 3.44772 2.44772 3 3 3H11ZM21 3C21.5523 3 22 3.44772 22 4V10.999H13V3H21Z"></path></svg>
                    <p className="select-none">Dashboard</p>
                </div>
                <div className="authorizer__sidebar-nav flex w-full h-12 items-center p-2 gap-4 rounded-md" onClick={() => setCurrentPage('Processing')}>
                    <svg width="2rem" height="2rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M10.007 2.10377C8.60544 1.65006 7.08181 2.28116 6.41156 3.59306L5.60578 5.17023C5.51004 5.35763 5.35763 5.51004 5.17023 5.60578L3.59306 6.41156C2.28116 7.08181 1.65006 8.60544 2.10377 10.007L2.64923 11.692C2.71404 11.8922 2.71404 12.1078 2.64923 12.308L2.10377 13.993C1.65006 15.3946 2.28116 16.9182 3.59306 17.5885L5.17023 18.3942C5.35763 18.49 5.51004 18.6424 5.60578 18.8298L6.41156 20.407C7.08181 21.7189 8.60544 22.35 10.007 21.8963L11.692 21.3508C11.8922 21.286 12.1078 21.286 12.308 21.3508L13.993 21.8963C15.3946 22.35 16.9182 21.7189 17.5885 20.407L18.3942 18.8298C18.49 18.6424 18.6424 18.49 18.8298 18.3942L20.407 17.5885C21.7189 16.9182 22.35 15.3946 21.8963 13.993L21.3508 12.308C21.286 12.1078 21.286 11.8922 21.3508 11.692L21.8963 10.007C22.35 8.60544 21.7189 7.08181 20.407 6.41156L18.8298 5.60578C18.6424 5.51004 18.49 5.35763 18.3942 5.17023L17.5885 3.59306C16.9182 2.28116 15.3946 1.65006 13.993 2.10377L12.308 2.64923C12.1078 2.71403 11.8922 2.71404 11.692 2.64923L10.007 2.10377ZM6.75977 11.7573L8.17399 10.343L11.0024 13.1715L16.6593 7.51465L18.0735 8.92886L11.0024 15.9999L6.75977 11.7573Z"></path></svg>
                    <p className="select-none">Processing</p>
                </div>
                <div className="authorizer__sidebar-nav flex w-full h-12 items-center p-2 gap-4 rounded-md" onClick={() => setCurrentPage('Tracking')}>
                    <svg width="2rem" height="2rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.364 17.364L12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364ZM12 15C14.2091 15 16 13.2091 16 11C16 8.79086 14.2091 7 12 7C9.79086 7 8 8.79086 8 11C8 13.2091 9.79086 15 12 15ZM12 13C10.8954 13 10 12.1046 10 11C10 9.89543 10.8954 9 12 9C13.1046 9 14 9.89543 14 11C14 12.1046 13.1046 13 12 13Z"></path></svg>
                    <p className="select-none">Tracking</p>
                </div>
                <div className="authorizer__sidebar-nav flex w-full h-12 items-center p-2 gap-4 rounded-md" onClick={() => setCurrentPage('History')}>
                    <svg width="2rem" height="2rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22ZM7 6V10H11V6H7ZM7 12V14H17V12H7ZM7 16V18H17V16H7ZM13 7V9H17V7H13Z"></path></svg>
                    <p className="select-none">History</p>
                </div>
                <div className="authorizer__sidebar-nav flex w-full h-12 items-center p-2 gap-4 rounded-md" onClick={() => setCurrentPage('Reports')}>
                    <svg width="2rem" height="2rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M21 9V20.9925C21 21.5511 20.5552 22 20.0066 22H3.9934C3.44495 22 3 21.556 3 21.0082V2.9918C3 2.45531 3.44694 2 3.99826 2H14V8C14 8.55228 14.4477 9 15 9H21ZM21 7H16V2.00318L21 7Z"></path></svg>
                    <p className="select-none">Reports</p>
                </div>
                <div className="authorizer__sidebar-nav flex w-full h-12 items-center p-2 gap-4 rounded-md" onClick={() => setCurrentPage('Help')}>
                    <svg width="2rem" height="2rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M21.0049 2.99966C21.5572 2.99966 22.0049 3.44738 22.0049 3.99966V9.49966C20.6242 9.49966 19.5049 10.619 19.5049 11.9997C19.5049 13.3804 20.6242 14.4997 22.0049 14.4997V19.9997C22.0049 20.5519 21.5572 20.9997 21.0049 20.9997H3.00488C2.4526 20.9997 2.00488 20.5519 2.00488 19.9997V14.4997C3.38559 14.4997 4.50488 13.3804 4.50488 11.9997C4.50488 10.619 3.38559 9.49966 2.00488 9.49966V3.99966C2.00488 3.44738 2.4526 2.99966 3.00488 2.99966H21.0049Z"></path></svg>
                    <p className="select-none">Help</p>
                </div>
            </div>
            
            {/* Add the logo background overlay here before pushing */}

            <div className="authorizer_sidebar-bottom flex items-center mb-4">
                <p> &copy; Copyright - SynDICA</p>
            </div>
        </div>
    );
}

export default Sidebar;
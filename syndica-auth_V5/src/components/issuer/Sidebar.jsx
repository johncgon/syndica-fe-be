import React from 'react'
import sidebarlogo from '../../assets/svg/logo-tag.svg'
import '../../css/user/sidebar.css'
import fadedlogo from '../../assets/svg/logo.svg'

const Sidebar = ({ setCurrentPage }) => {
    return (
        <>
        <div className="userpage__sideBar w-56 h-screen p-4 fixed overflow-hidden">
            <img className="w-full" src={sidebarlogo} alt="Logo" />
            <hr className="w-full my-2" />
            <div className="userpage__sideBar-inner w-full h-full flex flex-col gap-2">
                <div className="userpage__sideBar-item w-full h-12 rounded-md flex gap-4 items-center p-4" onClick={() => setCurrentPage('Dashboard')}>
                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className="userpage__sideBar-vector" d="M20 9.999V17C20 17.5523 19.5523 18 19 18H11V9.999H20ZM9 9.999V18H1C0.44772 18 0 17.5523 0 17V9.999H9ZM9 0V7.999H0V1C0 0.44772 0.44772 0 1 0H9ZM19 0C19.5523 0 20 0.44772 20 1V7.999H11V0H19Z"/>
                    </svg>
                    <p className="select-none">Dashboard</p>
                </div>
                <div className="userpage__sideBar-item w-full h-12 rounded-md flex gap-4 items-center p-4" onClick={() => setCurrentPage('Issue DV')}>
                    <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className="userpage__sideBar-vector" d="M18 7V18.9925C18 19.5511 17.5552 20 17.0066 20H0.9934C0.44495 20 0 19.556 0 19.0082V0.9918C0 0.45531 0.44694 0 0.99826 0H11V6C11 6.55228 11.4477 7 12 7H18ZM18 5H13V0.00318003L18 5ZM5 5V7H8V5H5ZM5 9V11H13V9H5ZM5 13V15H13V13H5Z"/>
                    </svg>
                    <p className="select-none">Issue DV</p>
                </div>
                <div className="userpage__sideBar-item w-full h-12 rounded-md flex gap-4 items-center p-4" onClick={() => setCurrentPage('Tracking')}>
                    <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className="userpage__sideBar-vector" d="M15.364 15.364L9 21.7279L2.63604 15.364C-0.87868 11.8492 -0.87868 6.15076 2.63604 2.63604C6.15076 -0.87868 11.8492 -0.87868 15.364 2.63604C18.8787 6.15076 18.8787 11.8492 15.364 15.364ZM9 13C11.2091 13 13 11.2091 13 9C13 6.79086 11.2091 5 9 5C6.79086 5 5 6.79086 5 9C5 11.2091 6.79086 13 9 13ZM9 11C7.8954 11 7 10.1046 7 9C7 7.89543 7.8954 7 9 7C10.1046 7 11 7.89543 11 9C11 10.1046 10.1046 11 9 11Z"/>
                    </svg>
                    <p className="select-none">Tracking</p>
                </div>
                <div className="userpage__sideBar-item w-full h-12 rounded-md flex gap-4 items-center p-4" onClick={() => setCurrentPage('History')}>
                    <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className="userpage__sideBar-vector" d="M17 20H1C0.44772 20 0 19.5523 0 19V1C0 0.44772 0.44772 0 1 0H17C17.5523 0 18 0.44772 18 1V19C18 19.5523 17.5523 20 17 20ZM4 4V8H8V4H4ZM4 10V12H14V10H4ZM4 14V16H14V14H4ZM10 5V7H14V5H10Z" />
                    </svg>
                    <p className="select-none">History</p>
                </div>
                <div className="userpage__sideBar-item w-full h-12 rounded-md flex gap-4 items-center p-4">
                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className="userpage__sideBar-vector" d="M19.0049 0C19.5572 0 20.0049 0.44772 20.0049 1V6.5C18.6242 6.5 17.5049 7.61934 17.5049 9.00004C17.5049 10.3807 18.6242 11.5 20.0049 11.5V17C20.0049 17.5522 19.5572 18 19.0049 18H1.00488C0.452603 18 0.00488281 17.5522 0.00488281 17V11.5C1.38559 11.5 2.50488 10.3807 2.50488 9.00004C2.50488 7.61934 1.38559 6.5 0.00488281 6.5V1C0.00488281 0.44772 0.452603 0 1.00488 0H19.0049Z" />
                    </svg>
                    <p className="select-none">Tickets</p>
                </div>
            </div>
            <div className="userpage__sideBar-background-image absolute -bottom-20 -left-6 overflow-hidden select-none flex justify-center items-center">
                <svg viewBox="0 0 205 286" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M202.114 118.538H152.621H149.96C146.583 128.587 140.157 137.333 131.577 143.56C122.997 149.787 112.69 153.185 102.089 153.281C95.3924 153.282 88.7614 151.964 82.5744 149.401C76.3875 146.839 70.7659 143.083 66.0305 138.348C61.2951 133.614 57.5386 127.992 54.9756 121.806C52.4127 115.619 51.0934 108.988 51.0932 102.292C51.1132 90.9008 54.9469 79.8447 61.9824 70.8864C69.018 61.9281 78.8503 55.5834 89.9118 52.8642V51.2959V1.05469C39.3316 7.07566 0.103516 50.0907 0.103516 102.292C0.103516 158.615 78.537 245.065 102.089 285.858C123.478 248.811 190.059 174.132 202.114 118.538Z" fill="#FAFAFA"/>
                    <path d="M102.09 0.306152V51.2959V106.366H152.616H203.897C203.989 104.998 204.069 103.628 204.069 102.292C204.069 45.9704 158.41 0.309365 102.09 0.306152Z" fill="#FFAB2E"/>
                </svg>
            </div>
        </div>
        </>
    )
}

export default Sidebar


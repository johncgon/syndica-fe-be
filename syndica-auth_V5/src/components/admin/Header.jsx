import React from 'react';
import Datetimedisplay from './Datetimedisplay';
import '../../css/admin/dashboard/header.css';

const Header = ({ currentPage, setCurrentPage }) => {
    const viewUserProfile = () => {
        setCurrentPage('User Profile');
    };

    const backToDashboard = () => {
        setCurrentPage('Dashboard');
    };

    return (
        <div className="header w-screen h-16 flex items-center justify-between pl-56 pr-6 fixed">
            <div className="header__title w-fit flex items-center gap-6">
                {currentPage === 'User Profile' ? (
                    <div className="flex">
                    <button onClick={backToDashboard} className="flex items-center justify-center h-full">
                        <svg width="16" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.46173 8.58694C4.68067 9.36799 4.68068 10.6343 5.46174 11.4154L11.1186 17.0722C11.7695 17.723 11.7695 18.7783 11.1187 19.4292V19.4292C10.4678 20.08 9.41253 20.08 8.76167 19.4292L0.747735 11.4154C-0.0333253 10.6343 -0.0333295 9.36799 0.747726 8.58694L8.76166 0.573035C9.41253 -0.0778339 10.4678 -0.0778316 11.1187 0.573041V0.573041C11.7695 1.22391 11.7695 2.27918 11.1187 2.93005L5.46173 8.58694Z" fill="#0d3255"/>
                        </svg>
                        
                    </button>
                    <h1 className="header__text ml-6 text-2xl">{currentPage}</h1>
                    </div>
                ) : (
                    <h1 className="header__text ml-6 text-2xl">{currentPage}</h1>
                )}
        
            </div>
            <div className="header__actions w-fit flex items-center gap-6">
                <div className="header__date-time">
                    <Datetimedisplay />
                </div>
                <button type="button" className="header__notification w-8 h-8 flex items-center justify-center">
                    <svg fill="#151515" height="24" width="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                        <path d="M26.8,25H5.2c-0.8,0-1.5-0.4-1.9-1.1c-0.4-0.7-0.3-1.5,0.1-2.2L4.5,20c1.8-2.7,2.7-5.8,2.7-9c0-3.7,2.4-7.1,5.9-8.3 C13.7,1.6,14.8,1,16,1s2.3,0.6,2.9,1.7c3.5,1.2,5.9,4.6,5.9,8.3c0,3.2,0.9,6.3,2.7,9l1.1,1.7c0.4,0.7,0.5,1.5,0.1,2.2 C28.4,24.6,27.6,25,26.8,25z"></path>
                        <path d="M11.1,27c0.5,2.3,2.5,4,4.9,4s4.4-1.7,4.9-4H11.1z"></path>
                    </svg>
                </button>
                <img onClick={viewUserProfile} className="header__profile-icon w-9 h-9 rounded-full" src="" alt="Profile Icon" />
            </div>
        </div>
    );
};

export default Header;

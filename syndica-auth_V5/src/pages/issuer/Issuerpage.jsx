import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/issuer/Sidebar';
import Userdashboard from '../../components/issuer/Userdashboard';
import Header from '../../components/issuer/Header';
import Issuedv from '../../components/issuer/issue-dv/Issuedv';
import Tracking from '../../components/issuer/tracking/Tracking';
import History from '../../components/issuer/history/History';
import Userprofile from '../../components/user-profile/Userprofile';

import '../../css/user/issuerpage.css';
import '../../css/user/issuer-responsive.css';

const Issuerpage = () => {
    // usertype will come from the data that will be fetched from database
    const [userType, setUserType] = useState('authorizer');

    const [currentPage, setCurrentPage] = useState(() => {
        return sessionStorage.getItem('currentPage') || 'Dashboard';
    });

    useEffect(() => {
        sessionStorage.setItem('currentPage', currentPage);
    }, [currentPage]);

    const renderContent = () => {
        switch (currentPage) {
            case 'Dashboard':
                return <Userdashboard/>;
            case 'Issue DV':
                return <Issuedv/>;
            case 'Tracking':
                return <Tracking/>;
            case 'History':
                return <History/>;
            default:
                return <Userdashboard/>;
        }
    };

    return (
        <>
            <div className="userpage__main-container w-screen h-screen flex overflow-hidden">
                {currentPage === 'User Profile' && <>
                    <Header currentPage={currentPage} setCurrentPage={setCurrentPage}/>
                    <Userprofile 
                        userType={userType}
                    />
                </>}
                {currentPage !== 'User Profile' && <>
                    <Sidebar setCurrentPage={setCurrentPage} />
                    <Header currentPage={currentPage} setCurrentPage={setCurrentPage}/>
                    <div className="userpage__content-container w-full p-6 overflow-hidden">
                        {renderContent()}
                    </div>
                </>}
            </div>
        </>
    );
}

export default Issuerpage;

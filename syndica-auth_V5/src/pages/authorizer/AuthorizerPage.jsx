import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/authorizer/Sidebar';
import Header from '../../components/authorizer/Header';
import AuthorizerDashboard from './AuthorizerDashboard';
import AuthorizerProcessing from './AuthorizerProcessing';
import AuthorizerTracking from './AuthorizerTracking';
import AuthorizerHistory from './AuthorizerHistory';
import AuthorizerReports from './AuthorizerReports';
import AuthorizerHelp from './AuthorizerHelp';

const AuthorizerPage = () => {

    const [currentPage, setCurrentPage] = useState(() => {
        return localStorage.getItem('currentPage') || 'Dashboard';
    });

    useEffect(() => {
        localStorage.setItem('currentPage', currentPage);
    }, [currentPage]);

    const renderContent = () => {
        switch (currentPage) {
            case 'Dashboard':
                return <AuthorizerDashboard/>;
            case 'Processing':
                return <AuthorizerProcessing/>;
            case 'Tracking':
                return <AuthorizerTracking/>;
            case 'History':
                return <AuthorizerHistory/>;
            case 'Reports':
                return <AuthorizerReports/>;
            case 'Help':
                return <AuthorizerHelp/>;
        }
    };

    return (
        <div className="authorizer__dashboard-main-container flex w-screen h-screen">
            <Sidebar setCurrentPage={setCurrentPage}/>
            <div className="flex flex-col grow">
                <Header currentPage={currentPage}/>
                {renderContent()}
            </div>
        </div>
    );
}

export default AuthorizerPage;
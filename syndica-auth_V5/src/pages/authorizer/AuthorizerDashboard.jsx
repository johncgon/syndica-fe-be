import React from 'react';
import Metric from '../../components/authorizer/dashboard/Metric';
import QuickSearch from '../../components/authorizer/QuickSearch';
import AuthorizedVoucher from '../../components/authorizer/dashboard/AuthorizedVoucher';
import RecentUpdate from '../../components/authorizer/dashboard/RecentUpdate';

const AuthorizerDashboard = () => {
    return (
        <div className="authorizer__dashboard-main-container flex h-full m-6 gap-4">
            <div className="authorizer__dashboard-left-container flex flex-col w-full h-full gap-4">
                <Metric/>
                <AuthorizedVoucher/>
            </div>
            <div className="authorizer__dashboard-right-container flex flex-col w-1/3 h-full gap-4">
                <QuickSearch/>
                <RecentUpdate/>
            </div>
        </div>
    );
}

export default AuthorizerDashboard;
import React from 'react';
import '../../css/authorizer/authorizertracking.css';
import TrackingList from '../../components/authorizer/tracking/TrackingList';
import TrackingDetailPane from '../../components/authorizer/tracking/TrackingDetailPane';

const AuthorizerTracking = () => {
    return (
        <div className="authorizer__tracking-main-container flex h-full m-6 gap-4 overflow-hidden">
            <TrackingList/>
            <TrackingDetailPane/>
        </div>
    );
}

export default AuthorizerTracking;
import React from 'react';
import '../../css/authorizer/authorizerreports.css'
import '../../css/authorizer/history.css' /** Change this later JC - JC **/
import ReportBuilder from '../../components/authorizer/reports/ReportBuilder';
import ReportPreview from '../../components/authorizer/reports/ReportPreview';

const AuthorizerReports = () => {
    return (
        <div className="authorizer__reports-main-container flex h-full m-6 gap-4">
            <ReportBuilder/>
            <ReportPreview/>
            <div>
            </div>
        </div>
    );
}

export default AuthorizerReports;
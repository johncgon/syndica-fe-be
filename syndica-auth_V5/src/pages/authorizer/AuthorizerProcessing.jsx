import React from 'react';
import '../../css/authorizer/authorizerprocessing.css'
import VoucherReceiver from '../../components/authorizer/processing/VoucherReceiver';
import VoucherList from '../../components/authorizer/processing/VoucherList';
import DetailPane from '../../components/authorizer/processing/DetailPane';
import DocumentChecklist from '../../components/authorizer/processing/DocumentChecklist';

const AuthorizerProcessing = () => {
    return (
        <div className="authorizer__processing-main-container flex h-full m-6 gap-4">
            <div className="authorizer__processing-first-col flex flex-col gap-4 w-1/3">
                <VoucherReceiver/>
                <VoucherList/>
            </div>
            <DetailPane/>
            <DocumentChecklist/>
        </div>
    );
}

export default AuthorizerProcessing;
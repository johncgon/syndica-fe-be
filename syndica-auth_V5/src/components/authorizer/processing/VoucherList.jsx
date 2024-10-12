import React from 'react';
import IconButton from '../../buttons/IconButton';

const FilterIcon = "M10 14L4 5V3H20V5L14 14V20L10 22V14Z"

const VoucherList = () => {
    return (
        <div className="authorizer__processing-list-container flex flex-col h-full p-4">
            <div className="authorizer__processing-list-header flex w-full justify-between">
                <h3>Voucher List</h3>
                <IconButton icon={FilterIcon}/>
            </div>
            <div className="authorizer__processing-list-result-wrapper flex flex-col py-4">
                <div>
                    <div className="authorizer__processing-receiver-result-detail flex flex-col w-full p-2 bg-blue-100 rounded-md">
                        <h4>RO2024-01-001</h4>
                        <p>1 min ago</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VoucherList;
import React from 'react';

const VoucherReceiver = () => {
    return (
        <div className="authorizer__processing-receiver-container flex flex-col h-1/3 p-4">
            <div className="authorizer__processing-receiver-header">
                <h3>Voucher Receiver</h3>
            </div>
            <div className="authorizer__processing-receiver-search flex py-4">
                <form className="authorizer__quicksearch-form w-full h-8 flex gap-2" action="">
                    <input className="w-3/4 p-2 font-ligh rounded-md text-ellipsis" type="text" name="" id="" placeholder="Enter tracking number" />
                    <input className="search-button w-1/4 font-semibold" type="submit" value="Search" />
                </form>
            </div>
            <div className="authorizer__processing-receiver-result flex bg-blue-100 rounded-md p-2 justify-between items-center">
                <div className="authorizer__processing-receiver-result-detail flex flex-col">
                    <h4>RO2024-01-001</h4>
                    <p>1 min ago</p>
                </div>
                <input className=" receive-button w-1/4 h-8 font-semibold" type="submit" value="Receive" />
            </div>
        </div>
    );
}

export default VoucherReceiver;
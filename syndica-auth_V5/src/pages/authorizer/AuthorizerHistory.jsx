import React from 'react';
import '../../css/authorizer/authorizerhistory.css'
import HistoryTable from '../../components/authorizer/history/HistoryTable'
import IconButton from '../../components/buttons/IconButton';

const FilterIcon = "M10 14L4 5V3H20V5L14 14V20L10 22V14Z";

const AuthorizerHistory = () => {
    return (
        <div className="authorizer__history-main-container flex flex-col h-full m-6 p-4">
            <div className="authorizer__history-header flex w-full justify-between">
                <h3>History List</h3>
                <div className="authorizer__history-header-searchfilter flex gap-2">
                    <IconButton icon={FilterIcon}/>
                    <form className="authorizer__quicksearch-form w-full h-8 flex" action="">
                        <input className="w-full p-2 font-ligh rounded-md text-ellipsis" type="text" name="" id="" placeholder="Enter tracking number" />
                    </form>
                </div>
            </div>
            <div className="authorizer__history-table-wrapper py-4">
                <HistoryTable/>
            </div>
        </div>
    );
}

export default AuthorizerHistory;
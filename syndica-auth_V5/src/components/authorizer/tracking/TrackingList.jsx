import React from 'react';
import TrackingListItem from './TrackingListItem'
import IconButton from '../../buttons/IconButton';

const FilterIcon = "M10 14L4 5V3H20V5L14 14V20L10 22V14Z";

const tracklistData = [
    {
        dvnumber: 'DV-001',
        date_created: '2024-08-01',
        status: 'ongoing'
    },
    {
        dvnumber: 'DV-002',
        date_created: '2024-08-02',
        status: 'completed'
    },
    {
        dvnumber: 'DV-003',
        date_created: '2024-08-03',
        status: 'ongoing'
    },
    {
        dvnumber: 'DV-004',
        date_created: '2024-08-04',
        status: 'onhold'
    },
    {
        dvnumber: 'DV-005',
        date_created: '2024-08-04',
        status: 'onhold'
    },
    {
        dvnumber: 'DV-006',
        date_created: '2024-08-04',
        status: 'return'
    }
];


const TrackingList = () => {
    return (
        <div className="authorizer__tracking-list-container flex flex-col w-1/4 p-4 gap-2">
            <div className="authorizer__tracking-list-header flex">
                <h3>Tracking List</h3>
            </div>
            <div className="authorizer__processing-receiver-search flex w-full py-4 gap-4">
                <form className="authorizer__quicksearch-form w-full h-8 flex gap-2" action="">
                    <input className="w-full p-2 font-ligh rounded-md text-ellipsis" type="text" name="" id="" placeholder="Enter tracking number" />
                </form>
                <IconButton icon={FilterIcon}/>
            </div>
            <div className="tracklist__result w-full h-full overflow-y-auto">
                {tracklistData.map((item, index) => (
                    <TrackingListItem
                        key = {index}
                        dvnumber = {item.dvnumber}
                        date_created = {item.date_created}
                        status = {item.status}
                    />
                ))}
            </div>
        </div>
    );
}

export default TrackingList;
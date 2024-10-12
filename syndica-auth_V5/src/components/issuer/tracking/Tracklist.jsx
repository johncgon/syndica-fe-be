import React from 'react'
import Tracklistitem from './Tracklistitem'

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
        status: 'pending'
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

const Tracklist = () => {
    return (
        <>
            <div className="tracklist__container w-1/3 h-full flex flex-col gap-4 p-4 rounded-lg overflow-hidden">
                <h4 className="w-full">Tracking List</h4>
                <div className="tracklist__searchfilter flex justify-center items-center gap-2">
                    <input type="text" name="" id="" placeholder="Search" className="w-full p-2 font-ligh rounded-md text-ellipsis" />
                    <button className="voucherSummary__filter-button w-10 h-9 p-1 rounded-md" type="button">
                        <svg viewBox="0 0 24 24" fill="none">
                            <g strokeWidth="0"></g>
                            <g strokeLinecap="round" strokeLinejoin="round"></g>
                            <g> 
                                <path className="filter__svg" d="M4.22657 2C2.50087 2 1.58526 4.03892 2.73175 5.32873L8.99972 12.3802V19C8.99972 19.3788 9.21373 19.725 9.55251 19.8944L13.5525 21.8944C13.8625 22.0494 14.2306 22.0329 14.5255 21.8507C14.8203 21.6684 14.9997 21.3466 14.9997 21V12.3802L21.2677 5.32873C22.4142 4.03893 21.4986 2 19.7729 2H4.22657Z"></path> 
                            </g>
                        </svg>
                    </button>
                </div>
                <div className="tracklist__result w-full h-full overflow-y-auto">
                    {tracklistData.map((item, index) => (
                        <Tracklistitem
                            key = {index}
                            dvnumber = {item.dvnumber}
                            date_created = {item.date_created}
                            status = {item.status}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Tracklist
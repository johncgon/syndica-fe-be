import React from 'react'
import BadgeStatus from './BadgeStatus'

const TrackListItem = ( {dvnumber, date_created, status} ) => {
    return (
        <>
            <div className="tracklistitem__container w-full h-16 flex justify-between items-center p-2 rounded-md">
                <div className="trackbrief flex flex-col">
                    <h4>{dvnumber}</h4>
                    <p className="text-xs opacity-40">{date_created}</p>
                </div>
                <BadgeStatus 
                    status={status}
                />
            </div>
        </>
    )
}

export default TrackListItem
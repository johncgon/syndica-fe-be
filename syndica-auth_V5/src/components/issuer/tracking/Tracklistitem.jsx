import React from 'react'
import Badgestatus from './Badgestatus'

const Tracklistitem = ( {dvnumber, date_created, status} ) => {
    return (
        <>
            <div className="tracklistitem__container w-full h-16 flex justify-between items-center p-2 rounded-md">
                <span>
                    <h4>{dvnumber}</h4>
                    <p className="text-xs opacity-40">{date_created}</p>
                </span>
                <Badgestatus 
                    status={status}
                />
            </div>
        </>
    )
}

export default Tracklistitem
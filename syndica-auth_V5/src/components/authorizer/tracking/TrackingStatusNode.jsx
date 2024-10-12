import React from 'react'
import '../../../css/authorizer/tracking.css'

const TrackingStatusNode = ({ date, time, action, location, description }) => {
    return (
        <li className="trackingstatus__node flex">
            <div className="trackingstatus__circle"></div>
            <div className="trackingstatus__node-inner w-1/4 flex flex-col">
                <p className="font-semibold text-sm">{date}</p>
                <p className="text-xs">{time}</p>
            </div>
            <div className="trackingstatus__node-inner w-1/4 flex flex-col">
            <p className="font-semibold text-sm">{action}</p>
            <p className="text-xs">{location}</p>
            </div>
            <div className="trackingstatus__node-inner w-2/4">
            <p className="text-xs">{description}</p>
            </div>
        </li>
    )
}

export default TrackingStatusNode
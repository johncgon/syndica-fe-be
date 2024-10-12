import React from 'react'

const TrackingFigureNode = ({ status, office }) => {

    let nodeStatus = "trackingfigure__node w-36 flex justify-center items-center relative pt-4";

    switch(status) {
        case 'done':
            nodeStatus += " trackingfigure__node-finished";
            break;
        case 'current':
            nodeStatus += " trackingfigure__node-current";
            break;
        case 'next':
        default:
            break;
    }

    return (  
        <>
            <li className={nodeStatus}>
                <p className="font-semibold text-sm">{office}</p>
            </li>
        </>
    )
}

export default TrackingFigureNode
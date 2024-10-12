import React from 'react'
import Tracklist from './Tracklist'
import Trackinformation from './Trackinformation'
import '../../../css/user/tracking.css'

const Tracking = () => {
    return (
        <div className="tracking__container w-full h-full flex gap-4">
            <Tracklist/>
            <Trackinformation/>
        </div>
    )
}

export default Tracking
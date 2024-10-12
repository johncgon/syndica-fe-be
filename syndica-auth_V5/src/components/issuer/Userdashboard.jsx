import React from 'react'
import Statuscard from './Statuscard'
import Quicktrack from './Quicktrack'
import Vouchersummary from './Vouchersummary'
import '../../css/user/userdashboard.css'



const Userdashboard = () => {
    return (
        <>
            <div className="userpage__dashboard-container w-full min-h-full flex gap-6">
                <div className="userpage__col w-3/4 flex flex-col gap-6">
                    <div className="userpage__status-container w-full flex gap-6">
                        <Statuscard/>
                    </div>
                    <div className="userpage__vouchersummary-container w-full h-full rounded-lg shadow-md p-4 flex flex-col gap-4">
                        <Vouchersummary/>
                    </div>
                </div>
                <div className="userpage__col w-1/4">
                    <Quicktrack/> 
                </div>
                
            </div>
        </>
    )
}

export default Userdashboard
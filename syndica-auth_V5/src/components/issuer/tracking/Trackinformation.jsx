import React from 'react'
import Trackingstatus from './Trackingstatus'
import Trackingfigure from './Trackingfigure'

const result = "R02024-01-001"

const Trackinformation = () => {
    return (
        <div className="trackinformation__container w-2/3 rounded-lg p-4 flex flex-col gap-4">
            <div className="trackinformation__header flex gap-1 w-full">
                <h4 className="opacity-40 select-none">Tracking ID:</h4>
                <h4>{result}</h4>
            </div>
            <hr />
            <div className="trackinformation__figure w-full h-40 pt-6 px-4 overflow-x-auto">
                <Trackingfigure/>
            </div>
            <hr />
            <div className="trackinformation__dvinformation flex w-full gap-4 overflow-hidden">
                <div className="trackinformation__details w-1/4 h-full flex flex-col gap-2 overflow-y-auto">
                    <h4>Voucher Details</h4>
                    <div className="trackinformation__details-info">
                        <h4 className="opacity-40">Expense Type</h4>
                        <p className="trackinformation__details-content h-9 flex items-center p-2 text-sm rounded-md">Electricity</p>
                    </div>
                    <div className="trackinformation__details-info">
                        <h4 className="opacity-40">Date Issued</h4>
                        <p className="trackinformation__details-content h-9 flex items-center p-2 text-sm rounded-md">21/07/2024</p>
                    </div>
                    <div className="trackinformation__details-info">
                        <h4 className="opacity-40">Jail Unit</h4>
                        <p className="trackinformation__details-content h-9 flex items-center p-2 text-sm rounded-md">Calumpit</p>
                    </div>
                </div>
                <div className="trackinformation__vl h-full"></div>
                <div className="trackinformation__tracking w-3/4 h-full p-2 overflow-x-auto">
                    <Trackingstatus/>
                </div>
            </div>
        </div>
    )
}

export default Trackinformation
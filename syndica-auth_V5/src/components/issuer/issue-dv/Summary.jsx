import React from 'react'
import Print from './Print'

const Summary = () => {
    return (
        <>
            <div className="dvsummary__container w-full h-full max-h-full flex gap-6 overflow-hidden">
                <div className="dvsummary__information w-3/5 rounded-lg">

                </div>
                <div className="dvsummary__print w-2/5 p-4 rounded-lg">
                    <Print/>
                </div>
            </div>
        </>
    )
}

export default Summary
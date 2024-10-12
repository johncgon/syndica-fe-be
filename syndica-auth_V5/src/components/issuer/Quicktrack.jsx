import React from 'react'

var f__trackingNumber = "RO2024-01-001";
var f__status = "On Going";
var f__destination = "Logistics";
var f__previous = "--"

const Resultcontainer = ({ trackingNumber, status, destination, previousLocation }) => {
    return (
        <>
            <div className="userpage__results-container w-full h-fit">
                <h3 className="font-normal text-base">{trackingNumber}</h3>
                <p className="font-extralight text-sm opacity-80">Status: {status}</p>
                <p className="font-extralight text-sm opacity-80">Destination: {destination}</p>
                <p className="font-extralight text-sm opacity-80">Previous: {previousLocation}</p>
                <a className="text-xs underline font-medium" href="">View Details</a>
            </div>
        </>
    )
}

const Quicktrack = () => {
    return (
        <>
            <div className="userpage__quicktrack-container w-full p-4 rounded-lg flex flex-col gap-4">
                <div className="userpage__quicktrack-inner flex flex-col gap-2">
                    <h4>Quick Track</h4>
                    <form className="userpage__quicktrack-form w-full h-8 flex gap-2" action="">
                        <input className="w-3/4 p-2 font-ligh rounded-md text-ellipsis" type="text" name="" id="" placeholder="Enter tracking number" />
                        <input className="w-1/4 font-semibold rounded-sm" type="submit" value="Track" />
                    </form>
                </div>
                <hr></hr>
                <Resultcontainer
                    trackingNumber = {f__trackingNumber}
                    status = {f__status}
                    destination = {f__destination}
                    previousLocation = {f__previous}
                />
            </div>
        </>
    )
}

export default Quicktrack
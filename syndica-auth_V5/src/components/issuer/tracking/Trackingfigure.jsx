import React from 'react'
import '../../../css/user/tracking.css'
import Trackingfigurenode from './Trackingfigurenode'

const data = [
    {
        office: "Issuer",
        status: "done"
    },
    {
        office: "Logistics",
        status: "done"
    },
    {
        office: "Budget",
        status: "current"
    },
    {
        office: "Accounting",
        status: "next"
    },
    {
        office: "Director",
        status: "next"
    },
    {
        office: "Finance",
        status: "next"
    },
    {
        office: "Legal",
        status: "next"
    },
    {
        office: "Legalasdad",
        status: "next"
    },
]


const Trackingfigure = () => {
    return (
        <>
            <ul className="trackingfigure__container flex items-center w-fit h-full">
                    {data.map((item, index) => (
                        <Trackingfigurenode
                            key = {index}
                            office = {item.office}
                            status = {item.status}
                        />
                    ))}
            </ul>
        </>
    )
}

export default Trackingfigure
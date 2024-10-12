import React from 'react'

const Card = ({title, count}) => {
    return (
        <div className="adminpage__totalcard-container w-1/4 h-full flex flex-col justify-center rounded-lg p-4 shadow">
            <div className="adminpage__card-title w-full h-full flex justify-between items-center">
                <h3 className="font-normal text-base">{title}</h3>
                <div></div>
            </div>
            <h2 className="font-semibold">{count}</h2>
            <p className="font-light text-xs italic opacity-65">Overall</p>
        </div>
    )
}

const Totalcard = () => {
    return (
        <>
            <Card 
                title="Active Accounts"
                count="7"
            />
            <Card 
                title="Total Dispatches"
                count="60"
            />
            <Card 
                title="Unresolved Tickets"
                count="12"
            />
            <Card 
                title="Generated Reports"
                count="1"
            />
        </>
    )
}

export default Totalcard
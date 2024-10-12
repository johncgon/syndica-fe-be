import React from 'react'

const Card = ({title, count, lastUpdate}) => {
    return (
        <div className="userpage__card-container w-1/4 h-auto flex flex-col justify-start rounded-lg p-4 shadow">
            <div className="userpage__card-title w-full flex justify-between items-center">
                <h3 className="font-normal text-ellipsis">{title}</h3>
                <div></div>
            </div>
            <h2 className="font-semibold">{count}</h2>
            <p className="font-light text-xs italic opacity-65">Last update: {lastUpdate}</p>
        </div>
    )
}

const Statuscard = () => {
    return (
        <>
            <Card 
                title="On Going"
                count="7"
                lastUpdate="07/07/2024"
            />
            <Card 
                title="Completed"
                count="60"
                lastUpdate="07/07/2024"
            />
            <Card 
                title="Returned"
                count="12"
                lastUpdate="07/07/2024"
            />
            <Card 
                title="Total"
                count="79"
                lastUpdate="07/07/2024"
            />
        </>
    )
}

export default Statuscard
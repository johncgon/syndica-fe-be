import React from 'react';
import Card from './Card';

const data = [
    {
        title: "Received",
        value: "0",
        bottom: "Overall"
    },
    {
        title: "Pending",
        value: "0",
        bottom: "Overall"
    },
    {
        title: "Authorized",
        value: "0",
        bottom: "Overall"
    },
    {
        title: "Total",
        value: "0",
        bottom: "Overall"
    }
]

const Metric = () => {
    return (
        <div className="authorizer__dashboard-metric-summary flex h-auto gap-4">
            {data.map((input, index) => (
                <Card key={index} title={input.title} value={input.value} bottom={input.bottom}/>
            ))}
        </div>
    );
}

export default Metric;
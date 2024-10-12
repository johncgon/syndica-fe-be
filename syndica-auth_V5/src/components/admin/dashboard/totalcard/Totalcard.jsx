import React from 'react';

const Card = ({ title, count }) => (
    <div className="totalcard__container w-1/4 h-full flex flex-col justify-center rounded-lg p-4 shadow">
        <div className="totalcard__header w-full h-full flex justify-between items-center">
            <h3 className="totalcard__title font-normal text-sm">{title}</h3>
            <div></div>
        </div>
        <h2 className="totalcard__count font-semibold">{count}</h2>
        <p className="totalcard__subtext font-light text-xs italic opacity-65">Overall</p>
    </div>
);

const TotalCard = () => (
    <>
        <Card title="Active Accounts" count="7" />
        <Card title="Total Dispatches" count="60" />
        <Card title="Unresolved Tickets" count="12" />
        <Card title="Generated Reports" count="1" />
    </>
);

export default TotalCard;

import React from 'react';
import "../../../css/authorizer/card.css"

const Card = ({title, value, bottom}) => {
    return (
        <div className="bg-white flex h-fit rounded-lg p-4 grow">
            <div className="flex flex-col">
                <p className="card-title-text">{title}</p>
                <h3 className="card-value-text pt-3 pb-2">{value}</h3>
                <p className="card-update-text">{bottom}</p>
            </div>
        </div>
    );
}

export default Card;
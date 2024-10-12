import React from 'react';
import Requirementitem from './Requirementitem';
import '../../../css/user/issuedv.css';

const data = [
    {
        requirement_name: "Sample data 1",
        requirement_count: 1
    },
    {
        requirement_name: "Sample data 2",
        requirement_count: 2
    },
    {
        requirement_name: "Sample data 3",
        requirement_count: 3
    },
];

const Requirement = () => {
    return (
        <ul className="issuer__checklist-container w-full h-full flex flex-col items-start justify-start overflow-y-scroll">
            {data.map((requirement, index) => (
                <Requirementitem 
                    key={index} 
                    name={requirement.requirement_name} 
                    count={requirement.requirement_count} 
                />
            ))}
        </ul>
    );
};

export default Requirement;

import React, { useState } from "react";
import OfficeCard from "./OfficeCard";
import AddOfficeButton from "./AddOfficeButton";

const OfficeRequirements = () => {
  // State to store offices and their requirements
  const [offices, setOffices] = useState([
  
  ]);

  // Function to add a new office
  const addOffice = () => {
    setOffices([
      ...offices,
      {
        name: `New Office ${offices.length + 1}`,
        editable: false,
        requirements: [],
      },
    ]);
  };

  // Function to remove an office
  const removeOffice = (officeIndex) => {
    const newOffices = [...offices];
    newOffices.splice(officeIndex, 1); // Remove the office by index
    setOffices(newOffices);
  };

  return (
    <div className="w-full h-full flex flex-col">
      <h3 className="h-10 w-full p-3">Voucher Route</h3>
      <div className="h-full w-full flex space-x-3 p-4 items-start overflow-auto">
        {/* Loop through all offices and render OfficeCard for each */}
        {offices.map((office, officeIndex) => (
          <React.Fragment key={officeIndex}>
            <OfficeCard
              office={office}
              officeIndex={officeIndex}
              offices={offices}
              setOffices={setOffices}
              removeOffice={removeOffice}
            />
            {/* Arrow between offices, except the last one */}
            {officeIndex < offices.length - 1 && (
              <div className="h-full w-8 flex items-center">
                <svg
                  width="33"
                  height="16"
                  viewBox="0 0 33 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M32.7071 8.70711C33.0976 8.31658 33.0976 7.68342 32.7071 7.29289L26.3431 0.928932C25.9526 0.538408 25.3195 0.538408 24.9289 0.928932C24.5384 1.31946 24.5384 1.95262 24.9289 2.34315L30.5858 8L24.9289 13.6569C24.5384 14.0474 24.5384 14.6805 24.9289 15.0711C25.3195 15.4616 25.9526 15.4616 26.3431 15.0711L32.7071 8.70711ZM0 9H32V7H0V9Z"
                    fill="#B5B5B5"
                  />
                </svg>
              </div>
            )}
          </React.Fragment>
        ))}

        {/* Button to add a new office */}
        <AddOfficeButton addOffice={addOffice} />
      </div>
    </div>
  );
};

export default OfficeRequirements;

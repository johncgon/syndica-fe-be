import React from "react";
import Filter from "../../../components/admin/dashboard/Filter";
import '../../../css/admin/dashboard/frequentcard.css'

const FrequentSummaryCard = ({ label, icon }) => {
  return (
    <div className="h-full w-1/3 flex justify-center bg-white">
    <div className="adminpage__frequent-summary-card h-full w-full flex flex-col justify-evenly items-center">
      <div className="adminpage__card-summary">{icon}</div>
      <p className="adminpage__card-label font-normal">{label}</p>
    </div>
    </div>
  );
};

const Frequentcard = () => {
  const data = [
    {
      label: "Electricity",
      icon: (
        <svg width="26" height="34" viewBox="0 0 26 34" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.959 13.978H25.334L9.70898 33.6663V20.0359H0.333984L15.959 0.333008V13.978Z" fill="#151515"/>
        </svg>
      ),
    },
    {
      label: "Water",
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.3934 11.0548L20 0.448242L30.6067 11.0548C36.4645 16.9127 36.4645 26.4102 30.6067 32.268C24.7487 38.1259 15.2513 38.1259 9.3934 32.268C3.53553 26.4102 3.53553 16.9127 9.3934 11.0548Z" fill="#151515"/>
        </svg>
      ),
    },
    {
      label: "RCA",
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.6628 6.66667V18.3333L19.996 14.1667L28.3293 18.3333V6.66667H33.3293C34.2498 6.66667 34.996 7.41287 34.996 8.33333V35C34.996 35.9205 34.2498 36.6667 33.3293 36.6667H6.66276C5.74228 36.6667 4.99609 35.9205 4.99609 35V8.33333C4.99609 7.41287 5.74228 6.66667 6.66276 6.66667H11.6628ZM19.996 13.3333L12.4961 5H27.496L19.996 13.3333ZM21.6627 18.7268L19.996 17.8935L18.3293 18.7268V33.3333H21.6627V18.7268ZM24.996 23.3333V26.6667H31.6627V23.3333H24.996Z" fill="#151515"/>
        </svg>

      ),
    },
  ];

  return (
    <div className="adminpage__summarycard-container w-1/2 h-full flex flex-col justify-center rounded-lg p-4 shadow gap-1">
      <div className="adminpage__card-top w-full h-[1.875rem] flex items-center justify-between">
        <h3>Frequent Voucher</h3>
        <Filter />
      </div>

      <div className="adminpage__card-bot w-full h-full">
        <div className="adminpage__card-bot-container w-full h-full flex gap-1  ">
          {data.map((item, index) => (
            <FrequentSummaryCard 
              key={index} 
              label={item.label} 
              icon={item.icon}  
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Frequentcard;

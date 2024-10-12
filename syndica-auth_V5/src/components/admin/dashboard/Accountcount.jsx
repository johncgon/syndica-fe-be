import React from "react";
import '../../../css/admin/dashboard/accountcount.css'

const FrequentSummaryCard = ({ accounttype, count }) => {
  return (
    <div className="adminpage__accountcard-status min-h-[4.063rem] w-[19.63%] flex justify-around items-center bg-white">
      <p className="adminpage__card-label font-medium">{accounttype}</p>
      <p className="adminpage__card-label font-bold text-xl">{count}</p>
    </div>
  );
};

const Accountcount = () => {
  const data = [
    {
      accounttype: "Logistics",
      count: "10",
    },
    {
      accounttype: "Operations",
      count: "12",
    },
    {
      accounttype: "Regional",
      count: "5",
    },
    {
      accounttype: "PRM",
      count: "9",
    },
    {
      accounttype: "HRM",
      count: "6",
    },
    {
      accounttype: "N/A",
      count: "0",
    },
    {
        accounttype: "N/A",
        count: "0",
      },
      {
        accounttype: "N/A",
        count: "0",
      },
      {
        accounttype: "N/A",
        count: "0",
      },
      {
        accounttype: "N/A",
        count: "0",
      },
      {
        accounttype: "N/A",
        count: "0",
      },
      {
        accounttype: "N/A",
        count: "0",
      },
      {
        accounttype: "N/A",
        count: "0",
      },
      {
        accounttype: "N/A",
        count: "0",
      },
      
  ];

  return (
    <div className="adminpage__accounttotal-status w-full min-h-full flex flex-wrap gap-1">
      {data.map((item, index) => (
        <FrequentSummaryCard
          key={index}
          accounttype={item.accounttype}
          count={item.count}
        />
      ))}
    </div>
  );
};

export default Accountcount;

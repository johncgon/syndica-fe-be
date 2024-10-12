import React from "react";
import AccountCountSummary from "./AccountCountSummary";
import "../../../../../css/admin/dashboard/accountcount.css";

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
    <div className="accountcount__cards w-full min-h-full flex flex-wrap justify-between gap-1">
      {data.map((item, index) => (
        <AccountCountSummary
          key={index}
          accounttype={item.accounttype}
          count={item.count}
        />
      ))}
    </div>
  );
};

export default Accountcount;

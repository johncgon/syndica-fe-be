import React from "react";
import "../../../css/admin/dashboard/accountcardstatus.css";

const FrequentSummaryCard = ({ label, count }) => {
  return (
    <div className="h-full w-1/6 flex justify-center bg-white">
    <div className="adminpage__accountcard-status h-full w-full flex flex-col justify-evenly items-center bg-white">
      <p className="adminpage__card-label font-medium text-base">{label}</p>
      <p className="adminpage__card-label font-bold text-2xl">{count}</p>
    </div>
    </div>
  );
};

const AccountStatuscard = () => {
  const data = [
    {
      label: "Total",
      count: "60",
    },
    {
      label: "New",
      count: "32",
    },
    {
      label: "Active",
      count: "28",
    },
    {
      label: "Suspended",
      count: "2",
    },
    {
      label: "N/A",
      count: "0",
    },
    {
      label: "N/A",
      count: "0",
    },
  ];

  return (
    <div className="adminpage__accounttotal-status w-full h-24 flex gap-1">
      {data.map((item, index) => (
        <FrequentSummaryCard
          key={index}
          label={item.label}
          count={item.count}
        />
      ))}
    </div>
  );
};

export default AccountStatuscard;

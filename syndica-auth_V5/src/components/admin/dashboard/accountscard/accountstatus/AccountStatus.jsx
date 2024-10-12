import React from "react";
import AccountStatusSummary from "./AccountStatusSummary";
import "../../../../../css/admin/dashboard/accountcardstatus.css";

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
      label: "N/O",
      count: "0",
    },
  ];

  return (
    <div className="accountstatus_cards w-full h-24 flex gap-1 bg-gray-100">
      {data.map((item, index) => (
        <AccountStatusSummary
          key={index}
          label={item.label}
          count={item.count}
        />
      ))}
    </div>
  );
};

export default AccountStatuscard;

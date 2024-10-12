import React from "react";

const AccountStatusSummary = ({label, count}) => {
  return (
    <div className="accountstatus_card h-full w-1/6 flex flex-col justify-evenly items-center bg-white">
      <p className="accountstatus_card-label font-medium text-base"> {label} </p>
      <p className="accountstatus_card-count font-bold text-2xl">{count}</p>
    </div>
  );
};

export default AccountStatusSummary;

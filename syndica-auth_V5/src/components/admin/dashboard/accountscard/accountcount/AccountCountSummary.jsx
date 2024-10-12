import React from "react";

const AccountCountSummary = ({accounttype,count}) => {
  return (
    <div className="accountcount__card h-16 flex justify-around items-center bg-white">
      <p className="accountcount__card-label font-medium">{accounttype}</p>
      <p className="accountcount__card-count font-bold text-xl">{count}</p>
    </div>
  );
};

export default AccountCountSummary;

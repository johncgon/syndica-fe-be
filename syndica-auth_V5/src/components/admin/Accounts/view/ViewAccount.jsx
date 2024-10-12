import React from "react";
import ViewProfile from "./ViewProfile";
import ViewDetails from "./ViewDetails";

const ViewAccount = ({ isOpen, toggleView, account }) => {
  if (!isOpen || !account) return null;

  return (
    <div className="fixed flex items-center justify-center inset-0 z-10 bg-gray-900 bg-opacity-50">
      <div className="w-4/6 h-5/6 flex flex-col p-4 w rounded-lg shadow-lg bg-white">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">View Account</h3>
        <div className="w-full h-full flex p-1 overflow-hidden">
          <ViewProfile />
          <div className="w-4/6 h-full overflow-hidden">
            <ViewDetails 
                toggleView={toggleView} 
                account={account} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAccount;

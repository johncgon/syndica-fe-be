import React from 'react';

const ViewDetails = ({ toggleView, account }) => {
    console.log(account.employee_id); // Debugging line
  if (!account) return <div>Loading...</div>;

  return (
    <div className="w-full h-full flex flex-col gap-2 overflow-y-auto">
      <h4>Employee Detail</h4>
      <div className="w-full flex mb-4">
        <span className="w-2/5">
          <label className="text-sm text-black opacity-35">
            <h4>Employee ID</h4>
          </label>
          <p className="text-sm font-semibold">{account.employee_id || "N/A"}</p>
        </span>
      </div>

      <h4>Personal Details</h4>
      <div className="w-full flex gap-6 mb-4">
        <span className="w-2/5">
          <label className="text-sm text-black opacity-35">
            <h4>First Name</h4>
          </label>
          <p className="text-sm font-semibold">{account.first_name || "N/A"}</p>
        </span>
        <span className="w-2/5">
          <label className="text-sm text-black opacity-35">
            <h4>Last Name</h4>
          </label>
          <p className="text-sm font-semibold">{account.last_name || "N/A"}</p>
        </span>
      </div>

      <h4>Login Details</h4>
      <div className="w-full flex gap-6 mb-4">
        <span className="w-2/5">
          <label className="text-sm text-black opacity-35">
            <h4>Email</h4>
          </label>
          <p className="text-sm font-semibold">{account.email || "N/A"}</p>
        </span>
        <span className="w-2/5">
          <label className="text-sm text-black opacity-35">
            <h4>Mobile Number</h4>
          </label>
          <p className="text-sm font-semibold">{account.contact_number || "N/A"}</p>
        </span>
      </div>

      <h4>Permission Details</h4>
      <div className="w-full flex gap-6 mb-4">
        <span className="w-2/5">
          <label className="text-sm text-black opacity-35">
            <h4>Role</h4>
          </label>
          <p className="text-sm font-semibold">{account.role || "N/A"}</p>
        </span>

        <span className="w-2/5">
          <label className="text-sm text-black opacity-35">
            <h4>Division</h4>
          </label>
          <p className="text-sm font-semibold">{account.division || "N/A"}</p>
        </span>

        <span className="w-2/5">
          <label className="text-sm text-black opacity-35">
            <h4>Account Status</h4>
          </label>
          <p className="text-sm font-semibold">{account.account_status || "N/A"}</p>
        </span>
      </div>

      <div className="w-full flex justify-end p-2 gap-3 mt-auto ml-auto">
        <button type="button" className="w-20 p-2  font-semibold cursor-pointer text-gray-700 bg-[#FFAB2E]" onClick={toggleView}>Close</button>
      </div>
    </div>
  );
};

export default ViewDetails;

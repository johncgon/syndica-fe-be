import React, { useState } from "react";

const EditDetails = ({ account, employeeDetails, handleInputChange }) => {
  return (
    <div className="w-4/6 h-full flex flex-col gap-2 overflow-y-auto">
      <h4>Employee Detail</h4>
      <div className="w-full flex">
        <span className="w-2/5">
          <label className="text-sm text-black opacity-35">
            <h4>Employee ID</h4>
          </label>
          <input disabled className="w-full p-2 rounded font-semibold text-black" type="text" value={account.employee_id}/>
        </span>
      </div>

      <h4>Personal Details</h4>
      <div className="w-full flex gap-6">
        <span className="w-2/5">
          <label className="text-sm text-black opacity-35">
            <h4>First Name</h4>
          </label>
          <input name="firstname" className="w-full p-2 rounded" type="text" value={account.first_name} onChange={handleInputChange}/>
        </span>
        <span className="w-2/5">
          <label className="text-sm text-black opacity-35">
            <h4>Last Name</h4>
          </label>
          <input name="lastname" className="w-full p-2 rounded" type="text" value={account.last_name} onChange={handleInputChange}/>
        </span>
      </div>

      <h4>Login Details</h4>
      <div className="w-full flex gap-6">
        <span className="w-2/5">
          <label className="text-sm text-black opacity-35">
            <h4>Email</h4>
          </label>
          <input name="email" className="w-full p-2 rounded" type="email" value={account.email} onChange={handleInputChange}/>
        </span>
        <span className="w-2/5">
          <label className="text-sm text-black opacity-35">
            <h4>Mobile Number</h4>
          </label>
          <input name="mobile" className="w-full p-2 rounded" type="tel" value={account.contact_number} onChange={handleInputChange} placeholder="Leave blank (Default)"/>
        </span>
      </div>

      <div className="w-full flex gap-6">
        <span className="w-2/5">
          <label className="text-sm text-black opacity-35">
            <h4>Password</h4>
          </label>
          <input name="password" className="w-full p-2 rounded" type="password" value={employeeDetails.password} onChange={handleInputChange}/>
        </span>
      </div>

      <h4>Permission Details</h4>
      <div className="w-full flex gap-6">
        <span className="w-2/5">
          <label className="text-sm text-black opacity-35">
            <h4>Role</h4>
          </label>
          <select name="role" className="w-full h-10 p-2 rounded" value={account.role} onChange={handleInputChange}>
            <option value="Authorizer">Authorizer</option>
            <option value="Issuer">Issuer</option>
          </select>
        </span>
        <span className="w-2/5">
          <label className="text-sm text-black opacity-35">
            <h4>Division</h4>
          </label>
          <select name="division" className="w-full h-10 p-2 rounded" value={account.division} onChange={handleInputChange}>
            <option value="Logistic Office">Logistic Office</option>
            <option value="Test">Test</option>
          </select>
        </span>
      </div>
    </div>
  );
};

export default EditDetails;

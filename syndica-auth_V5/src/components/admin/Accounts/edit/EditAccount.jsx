import React, { useState } from "react";
import EditProfile from "./EditProfile";
import EditDetails from "./EditDetails";
import EditActions from "./EditActions";

const EditAccount = ({ isOpen, toggleView, account }) => {
  if (!isOpen || !account) return null;

  const [employeeDetails, setEmployeeDetails] = useState({
    firstname: account.first_name || '',
    lastname: account.last_name || '',
    email: account.email || '',
    mobile: account.contact_number || '',
    password: account.password || '',
    role: account.role || '',
    division: account.division || '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployeeDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSave = () => {
    console.log("Updated account details:", employeeDetails);
    toggleView();
  };

  return (
    <div className="fixed flex items-center justify-center inset-0 z-10 bg-gray-900 bg-opacity-50">
      <div className="w-4/6 h-5/6 flex flex-col p-4 rounded-lg shadow-lg bg-white">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Edit Account</h3>
        <div className="w-full h-full flex p-1 overflow-hidden">
          <EditProfile />
          <EditDetails account={account} employeeDetails={employeeDetails}handleInputChange={handleInputChange}/>
        </div>
        <EditActions toggleView={toggleView} handleSave={handleSave} />
      </div>
    </div>
  );
};

export default EditAccount;

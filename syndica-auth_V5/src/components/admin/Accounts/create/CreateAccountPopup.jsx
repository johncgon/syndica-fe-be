import React from "react";
import ProfileUpload from "./ProfileUpload";
import AddAccountForm from "./AddAccountForm";

const AddAccountPopup = ({ isOpen, togglePopup }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed flex items-center justify-center inset-0 z-10 bg-gray-900 bg-opacity-50">
      <div className="w-4/6 h-5/6 flex flex-col p-4 w rounded-lg shadow-lg bg-white">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Add Account</h3>
        <div className="w-full h-full flex p-1 overflow-hidden">
          <ProfileUpload />
          <div className="w-4/6 h-full overflow-hidden">
            <AddAccountForm togglePopup={togglePopup} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAccountPopup;

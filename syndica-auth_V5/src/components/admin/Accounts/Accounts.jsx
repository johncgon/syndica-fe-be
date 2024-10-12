import React, { useState } from "react";
import Accounts_list from "./Accounts_list";
import Tryfilter from "./Tryfilter";
import filterIcon from '../../../assets/res/icons/admin/adminfilterIcon.svg';
import CreateAccountPopup from "./create/CreateAccountPopup";
import ViewAccount from "./view/ViewAccount";
import EditAccount from "./edit/EditAccount"

const Accounts = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isViewOpen, setIsViewOpen] = useState(false); // Add state for ViewAccount popup
  const [viewingAccount, setViewingAccount] = useState(null); // Track the account being viewed
  const [isEditOpen, setIsEditOpen] = useState(false); // Add state for ViewAccount popup
  const [editingAccount, setEditingAccount] = useState(null); // Track the account being viewed


  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const toggleView = (account = null) => {
    setViewingAccount(account); // Set the account to view
    setIsViewOpen(!isViewOpen);
  };

  const toggleEdit = (account = null) => {
    setEditingAccount(account); // Set the account to edit
    setIsEditOpen(!isEditOpen);
  };


  return (
    <div className="w-full h-full flex flex-col rounded-xl bg-gray-100">
      <div className="w-full h-15 p-4 flex justify-between items-center bg-white shadow-md">
        <h3 className="text-lg font-semibold">Account List</h3>
        <div className="flex items-center gap-3">
          <div className="relative">
            <button className="w-9 h-9 flex justify-center items-center rounded-md border-none bg-gray-200" onClick={toggleFilter}>
              <img className="w-5 h-5" src={filterIcon} alt="Filter Icon"/>
            </button>
            {isFilterOpen && <Tryfilter />}
          </div>
          <button className="w-32 h-9 flex justify-center items-center rounded-md border-none bg-[#FFAB2E]" onClick={togglePopup}>
            <p className="font-semibold">Add Account</p>
          </button>
          
        </div>
      </div>
      <div className="w-full h-full p-4 overflow-hidden bg-white rounded-lg shadow-sm">
        <Accounts_list toggleView={toggleView} toggleEdit={toggleEdit}/>
      </div>

      {/*Actions popup*/}
      <CreateAccountPopup isOpen={isPopupOpen} togglePopup={togglePopup} />

      <ViewAccount 
        isOpen={isViewOpen} 
        toggleView={toggleView} 
        account={viewingAccount} 
      />
      
      <EditAccount 
        isOpen={isEditOpen} 
        toggleView={toggleEdit}
        account={editingAccount} 
       />

    </div>
  );
};

export default Accounts;

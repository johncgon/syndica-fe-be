import React from "react";
import Tabledata from "./Tabledata";
import '../../../css/admin/accounts/account_list.css'

const Accounts_list = ({ toggleView, toggleEdit }) => { // Accept toggleView as a prop

  return (
    <div className="adminpage_accounts-table-container w-full h-full pr-4 overflow-y-auto">
      <div className="adminpage_accounts-table w-full h-full">
        <table className="w-full divide-y divide-gray-200 border-collapse">
          <thead className="adminpage__accounts-tablehead bg-white">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th scope="col" className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">First Name</th>
              <th scope="col" className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Name</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <Tabledata toggleView={toggleView} toggleEdit={toggleEdit}/>  {/* Pass toggleView to Tabledata */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Accounts_list;

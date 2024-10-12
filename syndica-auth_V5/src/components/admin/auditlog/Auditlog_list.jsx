import React from "react";
import Auditlog_tabledata from "./Auditlog_tabledata";
import '../../../css/admin/auditlogs/auditlog_list.css'

const Auditlog_list = () => {
  return (
    <div className="adminpage_auditlog-table-container w-full h-full pr-4 overflow-y-auto">
      <div className="adminpage_auditlog-table w-full h-full p-2">
      <table className="w-full divide-y divide-gray-200 border-collapse">
            <thead className="adminpage__auditlog-tablehead bg-white">
            <tr>
                <th scope="col" className="w-2/12 px-3 py-3 text-left text-sm font-medium text-gray-400 tracking-wider">Log ID</th>
                <th scope="col" className="w-4/12 px-6 py-3 text-left text-sm font-medium text-gray-400 tracking-wider">Action Token</th>
                <th scope="col" className="w-4/12 px-6 py-3 text-left text-sm font-medium text-gray-400 tracking-wider">User</th>
                <th scope="col" className="w-2/12 px-3 py-3 text-left text-sm font-medium text-gray-400 tracking-wider">Date & Time</th>
            </tr>
            </thead>
            <Auditlog_tabledata/>
        </table>
      </div>
    </div>
  );
};

export default Auditlog_list;

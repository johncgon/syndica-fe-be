import React from "react";
import filterIcon from '../../../assets/res/icons/admin/adminfilterIcon.svg';
import Auditlog_list from "./Auditlog_list";
import "../../../css/admin/auditlogs/auditlog.css";

const Auditlog = () => {
  return (
    <div className="adminpage__auditlog-container w-full h-full flex flex-col rounded-xl">
      <div className="adminpage__auditlog-top w-full h-15 p-4 flex justify-between items-center">
        <h3>Logs</h3>
        <div className="w-46 flex justify-center items-center gap-3">
          <button className="w-9 h-9 flex justify-center items-center rounded-md border-none bg-gray-200 ">
          <img className="w-5 h-5" src={filterIcon} alt="Filter Icon"/>
          </button>

          <div className="adminpage__auditlog-search w-full h-full flex justify-between items-center rounded-md ">
            <input type="text" className="adminpage__auditlog-search-box w-full h-8 px-2 rounded-md text-sm placeholder-gray-400" placeholder="Search" />
          </div>
        </div>
      </div>

      <div className="adminpage__auditlog-data w-full h-full pl-4 pr-8 pb-5 overflow-hidden">
        <Auditlog_list/>
      </div>
    </div>
  );
};

export default Auditlog;

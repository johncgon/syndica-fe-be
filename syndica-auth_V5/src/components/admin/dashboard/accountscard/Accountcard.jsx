import React from "react";
import Filter from "../../../../components/admin/dashboard/Filter";
import AccountStatuscard from "./accountstatus/AccountStatus";
import Accountcount from "./accountcount/AccountCount";
import '../../../../css/admin/dashboard/accountcard.css'

const Accountcard = () => {
  return (
    <div className="accountcard__container w-full h-full flex flex-col rounded-lg p-4 gap-4 shadow bg-white">
      <div className="accountcard__header w-full h-8 flex items-center justify-between">
        <h3>Account Summary</h3>
        <Filter />
      </div>

      <div className="accountcard__body w-full h-full overflow-y-auto overflow-x-hidden">
        <div className="accountcard__accountstatus-container w-full flex flex-col gap-2">
          <AccountStatuscard />

          <hr className="border-2 opacity-20" />

          <div className="accountcard__accountcount-container w-full min-h-full flex gap-1">
            <Accountcount/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accountcard;

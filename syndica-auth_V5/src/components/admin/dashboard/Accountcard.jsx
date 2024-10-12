import React from "react";
import Filter from "../../../components/admin/dashboard/Filter";
import AccountStatuscard from "./AccountcardStatus";
import Accountcount from "./Accountcount";
import '../../../css/admin/dashboard/accountcard.css'

const Accountcard = () => {
  return (
    <div className="adminpage__accountcard-container w-full h-full flex flex-col rounded-lg p-4 shadow gap-4">
      <div className="adminpage__card-top w-full h-[1.875] flex items-center justify-between">
        <h3>Account Summary</h3>
        <Filter />
      </div>

      <div className="adminpage__accountcard-bot w-full h-full overflow-y-scroll">
        <div className="adminpage__accountsummary-container w-full flex flex-col gap-2">
          <AccountStatuscard />

          <hr className="border-2" />

          <div className="adminpage__accountsum-status w-full min-h-full flex gap-1">
            <Accountcount/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accountcard;

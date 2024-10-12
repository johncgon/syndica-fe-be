import React from "react";
import Totalcard from "../../../components/admin/dashboard/totalcard/Totalcard";
import Vouchercard from "./vouchercard/Vouchercard";
import Frequentcard from "./vouchercard/Frequentcard";
import Accountcard from "../../../components/admin/dashboard/accountscard/Accountcard";
import Ticket from "./ticket/Ticket";
import Calendar from "./calendar/Calendar";
import "../../../css/admin/dashboard/admindashboard.css";

const AdminDashboard = () => {
  return (
    <div className="admindashboard__container w-full h-full flex gap-6">
      <div className="admindashboard__main-col w-9/12 h-full flex flex-col gap-6">
        <div className="admindashboard__totals-section w-full h-[20%] flex gap-6 py-2">
          <Totalcard />
        </div>
        <div className="admindashboard__vouchers-section w-full h-[35%] flex gap-6">
          <Vouchercard />
          <Frequentcard />
        </div>
        <div className="admindashboard__accounts-section w-full h-[45%] flex py-2">
          <Accountcard />
        </div>
      </div>

      <div className="admindashboard__side-col w-3/12 h-full flex flex-col gap-6">
        <div className="admindashboard__calendar-section w-full h-[53.5%] pt-2">
          <Calendar />
        </div>
        <div className="admindashboard__tickets-section w-full h-[46.5%] py-2">
          <Ticket />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

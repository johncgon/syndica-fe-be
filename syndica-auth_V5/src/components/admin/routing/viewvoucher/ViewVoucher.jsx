import React from "react";
import "./viewVoucher.css";
import VoucherDetails from "./VoucherDetails";
import OfficeRequirements from "./OfficeRequirements";

const ViewVoucher = ({ onCancel }) => {
  return (
    <div className="fixed flex items-center justify-center inset-0 z-10 bg-gray-900 bg-opacity-50">
      <div className="w-5/6 h-5/6 flex flex-col rounded-lg shadow-lg bg-white">
        <div className="ViewVoucher_header w-full h-20 flex justify-start items-center px-6">
          <h3 className="text-black">Voucher Builder</h3>
        </div>
        
        <div className="w-full h-5/6 flex p-6 gap-4">
          <div className="ViewVoucher__Details w-3/12 h-full flex flex-col p-2 gap-4">
            <VoucherDetails />
          </div>
          <div className="ViewVoucher__Route w-9/12 h-full">
            <OfficeRequirements />
          </div>
        </div>
        <div className="ViewVoucher__Buttons w-full h-20 flex justify-end items-center px-6 py-2 gap-2">
          <button type="button" className="p-2 rounded font-semibold cursor-pointer text-gray-700" onClick={onCancel}>
            Cancel
          </button>
          <button className="p-2 rounded font-semibold cursor-pointer border-none bg-[#FFAB2E]">
            Create Voucher
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewVoucher;

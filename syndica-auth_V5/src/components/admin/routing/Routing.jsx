import React, { useState } from "react";
import Category from "./Category";
import filterIcon from '../../../assets/res/icons/admin/adminfilterIcon.svg';
import "../../../css/admin/routing/routing.css";
import AddVoucher from "./addvoucher/ViewVoucher";
import ViewVoucher from "./viewvoucher/ViewVoucher";


const data = [
  {
    title: "Utility Expenses",
    items: [
      { icon: "path/to/electricity-icon.png", label: "Electricity" },
      { icon: "path/to/water-icon.png", label: "Water" },
      { icon: "path/to/telephone-icon.png", label: "Telephone" },
      { icon: "path/to/internet-icon.png", label: "Internet" },
    ],
  },
  {
    title: "Personnel Services",
    items: [
      { icon: "path/to/rca-icon.png", label: "RCA" },
      { icon: "path/to/tev-tran-icon.png", label: "TEV - Transportation" },
      { icon: "path/to/tev-inspect-icon.png", label: "TEV - Inspection" },
    ],
  },
  {
    title: "Seminars And Training",
    items: [
      { icon: "path/to/ca-seminar-icon.png", label: "CA - Seminar" },
      { icon: "path/to/re-seminar-icon.png", label: "Re - Seminar" },
    ],
  },
  {
    title: "Testing And Maintenance",
    items: [
      { icon: "path/to/ca-seminar-icon.png", label: "CA - Testing" },
      { icon: "path/to/re-seminar-icon.png", label: "Re - Maintenance" },
    ],
  },
];

const Routing = () => {
  const [isVoucherViewVisible, setVoucherViewVisible] = useState(false);
  const [isAddVoucherVisible, setAddVoucherVisible] = useState(false);

  // Function to handle item click
  const handleItemClick = () => {
    setVoucherViewVisible(true);
  };

  // Function to handle Add Voucher button click
  const handleAddVoucherClick = () => {
    setAddVoucherVisible(true);
  };

  // Function to handle popup close
  const handleCancel = () => {
    setVoucherViewVisible(false);
    setAddVoucherVisible(false);
  };

  return (
    <div className="adminpage__routing-container w-full h-full flex flex-col rounded-xl">
      <div className="adminpage__routing-top w-full h-15 p-4 flex justify-between items-center">
        <h3>Voucher List</h3>
        <div className="w-[10.938rem] flex justify-center items-center gap-3">
          <button className="w-9 h-9 flex justify-center items-center rounded-md border-none bg-gray-200">
            <img className="w-5 h-5" src={filterIcon} alt="Filter Icon" />
          </button>

          {/* Add Voucher button */}
          <button className="w-32 h-9 flex justify-center items-center rounded-md border-none bg-[#FFAB2E]" onClick={handleAddVoucherClick}>
            <p className="font-semibold">Add Voucher</p>
          </button>
        </div>
      </div>

      <div className="w-full h-full pl-4 pr-8 pb-4 overflow-hidden">
        <div className="adminpage__routing-vouchers w-full h-full pl-1 pr-4 overflow-y-auto">
          {data.map((category, index) => (
            <Category
              key={index}
              categoryName={category.title}
              items={category.items}
              onItemClick={handleItemClick} // Pass click handler to Category
            />
          ))}
        </div>
      </div>

      {/* Conditionally render the ViewVoucher component */}
      {isVoucherViewVisible && <ViewVoucher onCancel={handleCancel} />}
      
      {/* Conditionally render the AddVoucher component */}
      {isAddVoucherVisible && <AddVoucher onCancel={handleCancel} />}
    </div>
  );
};

export default Routing;

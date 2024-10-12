import React from "react";
import '../../../css/admin/routing/categoryitem.css'

const Categoryitem = ({ icon, label, onClick }) => {
  return (
    <div
      className="adminpage__categoryitem-container min-w-36 max-w-36 min-h-24 max-h-24 flex flex-col gap-4 justify-center items-center cursor-pointer"
      onClick={onClick} // Handle click to show popup
    >
      <div className="adminpage__categoryitem-icon w-10 h-10 overflow-hidden">
        <img className="w-full h-full" src={icon} alt={label} />
      </div>
      <p className="adminpage__categoryitem-text w-full text-ellipsis text-nowrap text-center overflow-hidden">
        {label}
      </p>
    </div>
  );
};

export default Categoryitem;

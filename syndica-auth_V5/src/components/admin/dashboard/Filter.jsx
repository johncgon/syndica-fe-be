import React, { useState } from "react";
import '../../../css/admin/dashboard/filter.css';
import filterIcon from '../../../assets/res/icons/admin/admindashboard_FilterIcon.svg';

const FilterDropdown = () => {
  return (
    <div className="filter__dropdown">
      <button className="text-base">Today</button>
      <button className="text-base">Yesterday</button>
      <button className="text-base">Last Month</button>
      <button className="text-base">Custom</button>
    </div>
  );
};

const Filter = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative">
      <button
        className="filter__container w-24 h-full flex items-center justify-evenly" onClick={toggleDropdown}>
        <div className="filter__icon flex justify-center items-center">
          <img src={filterIcon} alt="Filter Icon" />
        </div>
        <p className="filter__text text-base">Today</p>
      </button>
      {isDropdownOpen && <FilterDropdown />}
    </div>
  );
};

export default Filter;

import React from "react";
import Categoryitem from "./Categoryitem";
import "../../../css/admin/routing/category.css";

const Category = ({ categoryName, items, onItemClick }) => {
  return (
    <div className="adminpage__routing-category-container w-full h-auto flex flex-col gap-2 overflow-hidden">
      <div className="w-full h-8 flex justify-between items-center">
        <h4 className="adminpage__category-name font-semibold">{categoryName}</h4>
        <svg
          width="20px"
          height="20px"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
          className="bi bi-three-dots-vertical"
        >
          <path
            d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
            fill="#D9D9D9"
          />
        </svg>
      </div>
      <hr className="custom-hr" />
      <div className="adminpage__routing-category-items min-w-full h-fit flex gap-4 overflow-x-auto pb-2">
        {items.map((item, index) => (
          <Categoryitem key={index} icon={item.icon} label={item.label} onClick={onItemClick} />
        ))}
      </div>
    </div>
  );
};

export default Category;

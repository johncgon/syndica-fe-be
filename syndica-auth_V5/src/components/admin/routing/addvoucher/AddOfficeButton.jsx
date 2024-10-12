import React from "react";

const AddOfficeButton = ({ addOffice }) => {
  return (
    <div className="min-w-36 max-w-36 h-full flex items-center justify-center rounded-md border-dashed border-2 bg-gray-100 border-gray-400">
      <button
        onClick={addOffice} // Add a new office when clicked
        className="w-full h-full flex flex-col justify-center items-center text-base font-semibold border-none"
      >
        <span>
          <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.832 23.8331V4.33401L28.1654 4.33398V23.8331L47.6656 23.8327L47.6658 28.166L28.1654 28.1665L28.1656 47.6663H23.8322V28.1665L4.33212 28.1669L4.33203 23.8336L23.832 23.8331Z" fill="#151515"/>
          </svg>
        </span> Add Office
      </button>
    </div>
  );
};

export default AddOfficeButton;

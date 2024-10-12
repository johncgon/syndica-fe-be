import React from "react";

const EditActions = ({ toggleView, handleSave }) => {
  return (
    <div className="w-full flex justify-end p-2 gap-3 mt-auto ml-auto">
      <button
        type="button"
        className="w-20 p-2 rounded font-semibold text-gray-700 bg-gray-300"
        onClick={toggleView}
      >
        Cancel
      </button>
      <button
        type="button"
        className="w-20 p-2 rounded font-semibold text-white bg-[#FFAB2E]"
        onClick={handleSave}
      >
        Save
      </button>
    </div>
  );
};

export default EditActions;

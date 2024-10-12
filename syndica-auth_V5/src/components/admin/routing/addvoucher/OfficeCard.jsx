import React from "react";
import RequirementList from "./RequirementList";

const OfficeCard = ({ office, officeIndex, offices, setOffices, removeOffice }) => {
  // Toggle between editable and non-editable states for office name
  const toggleOfficeEdit = () => {
    const newOffices = [...offices];
    newOffices[officeIndex].editable = !newOffices[officeIndex].editable;
    setOffices(newOffices);
  };

  // Handle office name change
  const handleOfficeNameChange = (e) => {
    const newOffices = [...offices];
    newOffices[officeIndex].name = e.target.value;
    setOffices(newOffices);
  };

  // Validate office name on blur
  const handleBlur = () => {
    const office = offices[officeIndex];
    if (office.name.trim() === "") {
      alert("Office name cannot be empty.");
    } else {
      toggleOfficeEdit();
    }
  };

  // Save office name on Enter key press
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleBlur();
    }
  };

  return (
    <div className="relative h-full min-w-72 max-w-72 flex flex-col rounded-md border-2 border-gray-300 border-solid">
      {/* Remove office button */}
      <button
        onClick={() => removeOffice(officeIndex)}
        className="absolute top-2 right-2 p-1 border-none bg-transparent rounded-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div className="h-1/6 w-full flex justify-center items-center border-2 border-solid border-gray-200">
        {office.editable ? (
          <input
            type="text"
            value={office.name}
            onChange={handleOfficeNameChange}
            onBlur={handleBlur}
            onKeyDown={handleKeyPress}
            className="border p-2 text-center"
            autoFocus
          />
        ) : (
          <h2 className="font-semibold text-xl cursor-pointer" onClick={toggleOfficeEdit}>
            {office.name}
          </h2>
        )}
      </div>
      {/* Requirement list component */}
      <RequirementList officeIndex={officeIndex} offices={offices} setOffices={setOffices} />
    </div>
  );
};

export default OfficeCard;

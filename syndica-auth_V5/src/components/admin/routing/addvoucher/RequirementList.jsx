import React from "react";

const RequirementList = ({ officeIndex, offices, setOffices }) => {
  // Function to add a new requirement
  const addRequirement = () => {
    const newOffices = [...offices];
    newOffices[officeIndex].requirements.push({ name: "", count: null });
    setOffices(newOffices);
  };

  // Handle requirement name change
  const handleNameChange = (requirementIndex, event) => {
    const newOffices = [...offices];
    newOffices[officeIndex].requirements[requirementIndex].name = event.target.value;
    setOffices(newOffices);
  };

  // Handle requirement count change
  const handleCountChange = (requirementIndex, event) => {
    const newOffices = [...offices];
    const value = event.target.value;
    if (value === "" || (!isNaN(value) && value >= 1)) {
      newOffices[officeIndex].requirements[requirementIndex].count =
        value === "" ? null : parseInt(value, 10);
      setOffices(newOffices);
    }
  };

  // Remove a specific requirement
  const removeRequirement = (requirementIndex) => {
    const newOffices = [...offices];
    newOffices[officeIndex].requirements.splice(requirementIndex, 1);
    setOffices(newOffices);
  };

  return (
    <div className="w-full h-5/6 flex flex-col gap-1 px px-3 py-1">
      <h3 className="h-1/6 w-full flex justify-start items-center font-semibold text-base">Requirements</h3>
      <div className="w-full h-full pr-2 py-2 gap-3 overflow-y-auto">
        <ul>
          {offices[officeIndex].requirements.map((requirement, requirementIndex) => (
            <li key={requirementIndex} className="flex items-center justify-between mb-2">
              <input
                type="text"
                value={requirement.name}
                onChange={(e) => handleNameChange(requirementIndex, e)}
                className="border p-1 w-2/3"
                placeholder="Requirement Name"
              />
              <input
                type="number"
                value={requirement.count === null ? "" : requirement.count}
                onChange={(e) => handleCountChange(requirementIndex, e)}
                className="border p-1 w-1/5 text-center"
                min="1"
                placeholder="0"
              />
              <button onClick={() => removeRequirement(requirementIndex)} className="ml-2 text-red-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </li>
          ))}
        </ul>
        <div className="w-full h-1/6 flex justify-center items-center">
          <button onClick={() => addRequirement(officeIndex)} className="w-full p-2 text-black font-semibold rounded border-solid bg-transparent border-gray-400">
            Add Requirement
          </button>
        </div>
      </div>
    </div>
  );
};

export default RequirementList;

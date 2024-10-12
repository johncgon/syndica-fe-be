import React from "react";

const Vouchersummary = ({ label, summary }) => {
  return (
    <div className="vouchersummary__container h-full w-1/3 flex flex-col justify-evenly items-center  bg-white">
      <p className="vouchersummary__label font-medium">{label}</p>
      <h3 className="vouchersummary__subtext text-2xl">{summary}</h3>
    </div>
  );
};

export default Vouchersummary;

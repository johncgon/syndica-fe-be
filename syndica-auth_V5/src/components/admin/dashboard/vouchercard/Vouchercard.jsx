import React from "react";
import Filter from "../Filter";
import VoucherSummaryCard from "./Vouchersummary";

const Vouchercard = () => {
  const data = [
    { label: "Total", summary: "10" },
    { label: "Completed", summary: "1" },
    { label: "On Going", summary: "20" },
  ];

  return (
    <div className="vouchercard__container w-1/2 h-full flex flex-col justify-center rounded-lg p-4 gap-2 shadow">
      <div className="vouchercard__head w-full h-8 flex items-center justify-between">
        <h3>Voucher Summary</h3>
        <Filter/>
      </div>

      <div className="vouchercard__body w-full h-full">
        <div className="vouchercard__summary-container w-full h-full flex gap-1 bg-gray-100">
          {data.map((item, index) => (
            <VoucherSummaryCard
              key={index}
              label={item.label}
              summary={item.summary}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Vouchercard;

import React from "react";
import Filter from '../../../components/admin/dashboard/Filter'
import '../../../css/admin/dashboard/vouchercard.css'

const VoucherSummaryCard = ({ label, summary}) => {
  return (
      <div className="adminpage__voucher-summary-card h-full w-1/3 flex bg-white flex-col justify-evenly items-center">
        <p className="adminpage__card-label font-medium">{label}</p>
        <h3 className="adminpage__card-summary text-[1.563rem]">{summary}</h3>
      </div>
  );  
};

const  Vouchercard = () => {
  const data = [
    { label: "Total", summary: "10" },
    { label: "Completed", summary: "1" },
    { label: "On Going", summary: "20" }
  ];

  return (
    <div className="adminpage__summarycard-container w-1/2 h-full flex flex-col justify-center rounded-lg p-4 shadow gap-2">
      <div className="adminpage__card-top w-full h-[1.875rem] flex items-center justify-between">
        <h3>Voucher Summary</h3>
        <Filter/>
      </div>   

      <div className="adminpage__card-bot w-full h-full">
        <div className="adminpage__card-bot-container w-full h-full flex gap-1">
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

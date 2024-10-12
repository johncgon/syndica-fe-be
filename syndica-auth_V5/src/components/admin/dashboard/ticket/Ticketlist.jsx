import React from "react";

// Utility function to truncate text
const truncateText = (text, maxLength) => {
  return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
};

// FrequentSummaryCard Component
const Ticketlist = ({ ticket, issue, time }) => {
  return (
    <div className="ticketlist__card w-full h-1/3 flex justify-between rounded-md overflow-hidden">
      <div className="ticketlist__details w-full h-full flex flex-col justify-center p-2">
        <div className="w-full h-5 overflow-hidden">
          <p className="ticketlist__issue font-normal text-sm">
            <span className="ticket-id font-bold">{ticket}</span> -{" "}
            {truncateText(issue, 20)}
          </p>
        </div>
        <p className="ticketlist__time font-normal text-sm">{time}</p>
      </div>
      <div className="ticketlist__notification w-1/12 flex items-center justify-center">
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="6" cy="6" r="6" fill="#FF5630" />
        </svg>
      </div>
    </div>
  );
};

export default Ticketlist;

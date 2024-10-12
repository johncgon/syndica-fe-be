import React from "react";
import "../../../css/admin/dashboard/ticket.css";

const FrequentSummaryCard = ({ ticket, issue, time }) => {
  const truncateText = (text, length) => {
    return text.length > length ? text.substring(0, 17) + "..." : text;
  };

  return (
    <div className="adminpage__ticket-holder w-full h-1/3 flex justify-between rounded-[0.625rem]">
      <div className="adminpage_ticket-details h-full w-11/12 flex flex-col justify-center p-2">
        <p className="adminpage_ticket-issue">
          <span className="span-ticket font-bold">{ticket}</span> - {truncateText(issue, 20)}
        </p>
        <p className="adminpage_ticket-time font-normal text-sm">{time}</p>
      </div>
      <div className="adminpage_ticketnotif  h-full w-1/12 flex items-center justify-center">
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

const Ticket = () => {
  const data = [
    {
      ticket: "T6009",
      issue: "I can't access my account",
      time: "2 hrs ago",
    },
    {
      ticket: "T6010",
      issue: "Forgot password",
      time: "1 day ago",
    },
    {
      ticket: "T6011",
      issue: "Missing UI",
      time: "7 days ago",
    },
  ];

  return (
      <div className="adminpage__ticket-wrapper flex flex-col w-full h-full rounded-[0.625rem] shadow-lg bg-white p-2">
        <div className="adminpage_ticket-top w-full h-[3.125rem] flex justify-between items-center">
          <h3>Recent Tickets</h3>
          <a href="#" className="adminpage__view-all text-black">
            {" "}
            View All{" "}
          </a>
        </div>
        <div className="adminpage__tickets-container w-full h-full flex flex-col">
          {data.map((item, index) => (
            <FrequentSummaryCard
              key={index}
              ticket={item.ticket}
              issue={item.issue}
              time={item.time}
            />
          ))}
        </div>
      </div>
  );
};

export default Ticket;

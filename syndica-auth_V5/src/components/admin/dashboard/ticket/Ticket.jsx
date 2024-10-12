import React from "react";
import Ticketlist from "./Ticketlist";
import "../../../../css/admin/dashboard/ticket.css";

const Ticket = () => {
  const ticketData = [
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
    <div className="ticket__wrapper w-full h-full flex flex-col p-2 rounded-md shadow-lg bg-white">
      <div className="ticket__header w-full h-12 flex justify-between items-center">
        <h3>Recent Tickets</h3>
        <a href="#" className="view-all-link text-black"> View All </a>
      </div>

      <div className="ticket__list w-full h-full flex flex-col">
        {ticketData.map((ticket, index) => (
          <Ticketlist
            key={index}
            ticket={ticket.ticket}
            issue={ticket.issue}
            time={ticket.time}
          />
        ))}
      </div>
    </div>
  );
};

export default Ticket;

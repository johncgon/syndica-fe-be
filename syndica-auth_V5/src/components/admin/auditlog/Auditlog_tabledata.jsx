import React from "react";
import Auditlog_tabledatarow from "./Auditlog_tabledatarow";

const Auditlog_tabledata = () => {
  const data = [
    {
      id: "L240701",
      actiontoken: "Voucher Created",
      user: "Random Person",
      date: "2024-07-20 10:39 AM",
    },
    {
      id: "L240702",
      actiontoken: "Voucher Route Changed",
      user: "Justine James Medina",
      date: "2024-07-20 11:39 AM",
    },
    {
      id: "L240703",
      actiontoken: "Voucher Created",
      user: "John Carlo Gonzales",
      date: "2024-07-20 12:39 AM",
    },
    {
      id: "L240704",
      actiontoken: "Voucher Route Changed",
      user: "Allan Iverson Reyes",
      date: "2024-07-20 7:39 AM",
    },
    {
      id: "L240704",
      actiontoken: "Voucher Route Changed",
      user: "Allan Iverson Reyes",
      date: "2024-07-20 7:39 AM",
    },
    {
      id: "L240704",
      actiontoken: "Voucher Route Changed",
      user: "Allan Iverson Reyes",
      date: "2024-07-20 7:39 AM",
    },
    {
      id: "L240704",
      actiontoken: "Voucher Route Changed",
      user: "Allan Iverson Reyes",
      date: "2024-07-20 7:39 AM",
    },
    {
      id: "L240704",
      actiontoken: "Voucher Route Changed",
      user: "Allan Iverson Reyes",
      date: "2024-07-20 7:39 AM",
    },
    {
      id: "L240704",
      actiontoken: "Voucher Route Changed",
      user: "Allan Iverson Reyes",
      date: "2024-07-20 7:39 AM",
    },
    {
      id: "L240704",
      actiontoken: "Voucher Route Changed",
      user: "Allan Iverson Reyes",
      date: "2024-07-20 7:39 AM",
    },
    {
      id: "L240704",
      actiontoken: "Voucher Route Changed",
      user: "Allan Iverson Reyes",
      date: "2024-07-20 7:39 AM",
    },
    {
      id: "L240704",
      actiontoken: "Voucher Route Changed",
      user: "Allan Iverson Reyes",
      date: "2024-07-20 7:39 AM",
    },
    {
      id: "L240704",
      actiontoken: "Voucher Route Changed",
      user: "Allan Iverson Reyes",
      date: "2024-07-20 7:39 AM",
    },{
      id: "L240704",
      actiontoken: "Voucher Route Changed",
      user: "Allan Iverson Reyes",
      date: "2024-07-20 7:39 AM",
    },
    {
      id: "L240704",
      actiontoken: "Voucher Route Changed",
      user: "Allan Iverson Reyes",
      date: "2024-07-20 7:39 AM",
    },
    {
      id: "L240704",
      actiontoken: "Voucher Route Changed",
      user: "Allan Iverson Reyes",
      date: "2024-07-20 7:39 AM",
    },
    {
      id: "L240704",
      actiontoken: "Voucher Route Changed",
      user: "Allan Iverson Reyes",
      date: "2024-07-20 7:39 AM",
    },
    
  ];

  return (
    <tbody className="bg-white divide-y divide-gray-200">
      {data.map((item, index) => (
        <Auditlog_tabledatarow
          key={index}
          id={item.id}
          actiontoken={item.actiontoken}
          user={item.user}
          date={item.date}
        />
      ))}
    </tbody>
  );
};

export default Auditlog_tabledata;

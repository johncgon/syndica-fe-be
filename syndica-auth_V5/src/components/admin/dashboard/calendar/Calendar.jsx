import React, { useState } from 'react';
import CalendarHeader from './CalendarHeader';
import CalendarDays from './CalendarDays';
import '../../../../css/admin/dashboard/calendar.css';

const Calendar = () => {
  const [date, setDate] = useState(new Date());
  const [currYear, setCurrYear] = useState(date.getFullYear());
  const [currMonth, setCurrMonth] = useState(date.getMonth());

  const handlePrevNext = (direction) => {
    let newMonth = currMonth + direction;
    let newYear = currYear;

    if (newMonth < 0) {
      newMonth = 11;
      newYear -= 1;
    } else if (newMonth > 11) {
      newMonth = 0;
      newYear += 1;
    }

    setCurrMonth(newMonth);
    setCurrYear(newYear);
  };

  return (
    <div className="adminpage__calendar-wrapper flex flex-col w-full h-full rounded-xl shadow-lg overflow-hidden overflow-y-scroll">
      <CalendarHeader
        currMonth={currMonth}
        currYear={currYear}
        handlePrevNext={handlePrevNext}
      />
      <CalendarDays currMonth={currMonth} currYear={currYear} date={date} />
    </div>
  );
};

export default Calendar;

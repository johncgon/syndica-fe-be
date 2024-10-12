import React from 'react';

const CalendarDays = ({ currMonth, currYear, date }) => {
  const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();
  const getLastDayOfMonth = (year, month) => new Date(year, month + 1, 0).getDay();

  const generateCalendarDays = () => {
    const days = [];
    const firstDayOfMonth = getFirstDayOfMonth(currYear, currMonth);
    const daysInCurrentMonth = getDaysInMonth(currYear, currMonth);
    const daysInLastMonth = getDaysInMonth(currYear, currMonth - 1);
    const lastDayOfMonth = getLastDayOfMonth(currYear, currMonth);

    // Days from the previous month
    for (let i = firstDayOfMonth; i > 0; i--) {
      days.push({
        day: daysInLastMonth - i + 1,
        isCurrentMonth: false,
      });
    }

    // Days of the current month
    for (let i = 1; i <= daysInCurrentMonth; i++) {
      days.push({
        day: i,
        isCurrentMonth: true,
        isToday: i === date.getDate() && currMonth === new Date().getMonth() && currYear === new Date().getFullYear(),
      });
    }

    // Days from the next month
    for (let i = lastDayOfMonth + 1; i <= 6; i++) {
      days.push({
        day: i - lastDayOfMonth,
        isCurrentMonth: false,
      });
    }

    return days;
  };

  const days = generateCalendarDays();

  return (
    <div className="adminpage__calendar">
      <ul className="adminpage__weeks flex flex-wrap list-none text-center">
        {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day, index) => (
          <li key={index} className="font-medium text-[1rem] min-w-[14.28%] cursor-default">
            {day}
          </li>
        ))}
      </ul>
      <ul className="adminpage__days h-full flex flex-wrap list-none text-center">
        {days.map((dayObj, index) => (
          <li
            key={index}
            className={`min-w-[14.28%] cursor-default ${dayObj.isCurrentMonth ? '' : 'inactive'} ${dayObj.isToday ? 'active' : ''}`}
          >
            {dayObj.day}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CalendarDays;

import React from 'react';

const CalendarHeader = ({ currMonth, currYear, handlePrevNext }) => {
  const months = ["January", "February", "March", "April", "May", "June", "July",
                  "August", "September", "October", "November", "December"];

  return (
    <header className="adminpage__calendar-top flex items-center pt-[10px] pb-[5px] justify-center">
      <div className="adminpage__icons flex">
        <span
          id="prev"
          className="material-symbols-rounded h-[38px] w-[38px] mx-[1px] cursor-pointer text-center leading-[38px] text-2xl select-none rounded-full hover:bg-gray-200"
          onClick={() => handlePrevNext(-1)}
        >
          chevron_left
        </span>
      </div>
      <p className="adminpage__current-date text-lg font-bold">
        {months[currMonth]} {currYear}
      </p>
      <div className="adminpage__icons flex">
        <span
          id="next"
          className="material-symbols-rounded h-[38px] w-[38px] mx-[1px] cursor-pointer text-center leading-[38px] text-2xl select-none rounded-full hover:bg-gray-200"
          onClick={() => handlePrevNext(1)}
        >
          chevron_right
        </span>
      </div>
    </header>
  );
};

export default CalendarHeader;

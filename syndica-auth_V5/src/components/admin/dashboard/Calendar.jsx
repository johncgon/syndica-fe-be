import React, { useEffect, useState } from 'react';
import '../../../css/admin/dashboard/calendar.css'; // You can remove this import if the CSS is no longer needed

const Calendar = () => {
  const [date, setDate] = useState(new Date());
  const [currYear, setCurrYear] = useState(date.getFullYear());
  const [currMonth, setCurrMonth] = useState(date.getMonth());

  const months = ["January", "February", "March", "April", "May", "June", "July",
                  "August", "September", "October", "November", "December"];

  useEffect(() => {
    const daysTag = document.querySelector(".adminpage__days");
    const currentDate = document.querySelector(".adminpage__current-date");

    const renderCalendar = () => {
      let firstDayofMonth = new Date(currYear, currMonth, 1).getDay();
      let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();
      let lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay();
      let lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();
      let liTag = "";

      for (let i = firstDayofMonth; i > 0; i--) {
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
      }

      for (let i = 1; i <= lastDateofMonth; i++) {
        let isToday = i === date.getDate() && currMonth === new Date().getMonth()
                     && currYear === new Date().getFullYear() ? "active" : "";
        liTag += `<li class="${isToday}">${i}</li>`;
      }

      for (let i = lastDayofMonth; i < 6; i++) {
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
      }
      currentDate.innerText = `${months[currMonth]} ${currYear}`;
      daysTag.innerHTML = liTag;
    };

    renderCalendar();

  }, [currMonth, currYear, date]);

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
    <div className="adminpage__calendar-wrapper flex flex-col w-full h-full rounded-[10px] shadow-lg overflow-hidden overflow-y-scroll">
      <header className="adminpage__calendar-top flex items-center pt-[10px] pb-[5px] justify-center">
        <div className="adminpage__icons flex">
          <span id="prev" className="material-symbols-rounded h-[38px] w-[38px] mx-[1px] cursor-pointer text-center leading-[38px] text-2xl select-none rounded-full hover:bg-gray-200" onClick={() => handlePrevNext(-1)}>chevron_left</span>
        </div>
        <p className="adminpage__current-date text-lg font-bold"></p>
        <div className="adminpage__icons flex">
          <span id="next" className="material-symbols-rounded h-[38px] w-[38px] mx-[1px] cursor-pointer text-center leading-[38px] text-2xl select-none rounded-full hover:bg-gray-200" onClick={() => handlePrevNext(1)}>chevron_right</span>
        </div>
      </header>

      <div className="adminpage__calendar">
        <ul className="adminpage__weeks flex flex-wrap list-none text-center">
          <li className="font-medium text-[1rem] min-w-[14.28%] cursor-default">Su</li>
          <li className="font-medium text-[1rem] min-w-[14.28%] cursor-default">Mo</li>
          <li className="font-medium text-[1rem] min-w-[14.28%] cursor-default">Tu</li>
          <li className="font-medium text-[1rem] min-w-[14.28%] cursor-default">We</li>
          <li className="font-medium text-[1rem] min-w-[14.28%] cursor-default">Th</li>
          <li className="font-medium text-[1rem] min-w-[14.28%] cursor-default">Fr</li>
          <li className="font-medium text-[1rem] min-w-[14.28%] cursor-default">Sa</li>
        </ul>
        <ul className="adminpage__days h-full flex flex-wrap list-none text-center"></ul>
      </div>
    </div>
  );
};

export default Calendar;

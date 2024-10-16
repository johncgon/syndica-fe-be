import React from 'react';
import '../../css/authorizer/button.css'

const DateFilterButton = () => {
    return (
        <button type="button" className="date-filter-button flex h-9 items-center rounded gap-2 p-2">
            <svg width="1.25rem" height="1.25rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9V3H15V1H17V3ZM4 9V19H20V9H4ZM6 11H8V13H6V11ZM11 11H13V13H11V11ZM16 11H18V13H16V11Z"></path></svg>
            <p>Today</p>
        </button>
    );
}

export default DateFilterButton;
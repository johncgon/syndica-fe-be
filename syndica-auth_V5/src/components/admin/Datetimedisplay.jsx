import React, { useState, useEffect } from 'react';

// Utility function to format a date
function formatDate(date) {
    const options = { day: '2-digit', month: 'long', year: 'numeric', timeZone: 'Asia/Manila' };
    return date.toLocaleDateString('en-GB', options);
}

// Utility function to get the day of the week
function formatDay(date) {
    const options = { weekday: 'long', timeZone: 'Asia/Manila' };
    return date.toLocaleDateString('en-GB', options);
}

// Utility function to format time
function formatTime(date) {
    const options = { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Manila', hour12: true };
    return date.toLocaleTimeString('en-GB', options);
}

// Main Datetimedisplay component
function Datetimedisplay() {
    const [currentTime, setCurrentTime] = useState(new Date());

    // Update the time every minute
    useEffect(() => {
        const timerId = setInterval(() => setCurrentTime(new Date()), 60000);
        return () => clearInterval(timerId);
    }, []);

    return (
        <>
            <h3 className="adminpage_date text-base">{formatDate(currentTime)}</h3>
            <p className="adminpage_daytime text-sm">{`${formatDay(currentTime)}, ${formatTime(currentTime)}`}</p>
        </>
    );
}

export default Datetimedisplay;

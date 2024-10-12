import React, { useState, useEffect } from 'react';

function Datetimedisplay() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timerId = setInterval(() => {
        setCurrentTime(new Date());
        }, 60000);

        return () => clearInterval(timerId);
    }, []);

    function formatDate(date) {
        const options = { day: '2-digit', month: 'long', year: 'numeric', timeZone: 'Asia/Manila' };
        return date.toLocaleDateString('en-GB', options);
    }

    function formatDay(date) {
        const options = { weekday: 'long', timeZone: 'Asia/Manila' };
        return date.toLocaleDateString('en-GB', options);
    }

    function formatTime(date) {
        const options = { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Manila', hour12: true };
        return date.toLocaleTimeString('en-GB', options);
    }

    const formattedDate = formatDate(currentTime);
    const formattedDay = formatDay(currentTime);
    const formattedTime = formatTime(currentTime);

    return (
        <>
            <h3 className="text-base">{formattedDate}</h3>
            <p className="text-sm">{`${formattedDay}, ${formattedTime}`}</p>
        </>
    );
}

export default Datetimedisplay;

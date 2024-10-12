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

const date = new Date();

const formattedDate = formatDate(date);
const formattedDay = formatDay(date);
const formattedTime = formatTime(date);

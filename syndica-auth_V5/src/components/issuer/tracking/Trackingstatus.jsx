import React from 'react'
import Trackingstatusnode from './Trackingstatusnode'
import '../../../css/user/tracking.css'

const dummyData = [
    {
        date: '20/07/2024',
        time: '12:00 PM',
        action: 'Authorized',
        location: 'Budget',
        description: 'Voucher has been authorized by Budget Office.',
    },
    {
        date: '21/07/2024',
        time: '09:30 AM',
        action: 'Submitted',
        location: 'Finance',
        description: 'Voucher has been submitted to Finance Office.',
    },
    {
        date: '22/07/2024',
        time: '03:45 PM',
        action: 'Reviewed',
        location: 'Auditing',
        description: 'Voucher has been reviewed by Auditing Office.',
    },
    {
        date: '23/07/2024',
        time: '01:00 PM',
        action: 'Processed',
        location: 'Accounting',
        description: 'Voucher has been processed by Accounting Office.',
    },
    {
        date: '24/07/2024',
        time: '11:15 AM',
        action: 'Approved',
        location: 'Management',
        description: 'Voucher has been approved by Management Office.',
    },
    {
        date: '25/07/2024',
        time: '02:30 PM',
        action: 'Completed',
        location: 'Treasury',
        description: 'Voucher has been completed by Treasury Office.',
    },
    {
        date: '26/07/2024',
        time: '04:00 PM',
        action: 'Finalized',
        location: 'Compliance',
        description: 'Voucher has been finalized by Compliance Office.',
    },
    {
        date: '27/07/2024',
        time: '10:45 AM',
        action: 'Confirmed',
        location: 'Admin',
        description: 'Voucher has been confirmed by Admin Office.',
    },
];

const sortedData = dummyData.sort((a, b) => {
    const dateA = new Date(a.date.split('/').reverse().join('-'));
    const dateB = new Date(b.date.split('/').reverse().join('-'));
    return dateB - dateA;
});

const Trackingstatus = () => {
    return (
        <>
            <ul className="trackingstatus__container w-full h-full mx-auto overflow-y-auto flex flex-col pl-4 pt-2">
                {sortedData.map((item, index) => (
                    <Trackingstatusnode 
                    key={index}
                    date={item.date}
                    time={item.time}
                    action={item.action}
                    location={item.location}
                    description={item.description}
                />
                ))}
            </ul>
        </>
    )
}

export default Trackingstatus
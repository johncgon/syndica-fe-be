import React from 'react'
import Historyitem from './Historyitem';

const historyData = [
    {
        date: '2024-07-01',
        category: 'Incident',
        type: 'Assault',
        jailunit: 'Unit A',
        datetime: '2024-07-01 10:30 AM'
    },
    {
        date: '2024-07-02',
        category: 'Transfer',
        type: 'Inter-facility',
        jailunit: 'Unit B',
        datetime: '2024-07-02 02:00 PM'
    },
    {
        date: '2024-07-03',
        category: 'Medical',
        type: 'Checkup',
        jailunit: 'Unit C',
        datetime: '2024-07-03 09:15 AM'
    },
    {
        date: '2024-07-04',
        category: 'Visit',
        type: 'Family',
        jailunit: 'Unit A',
        datetime: '2024-07-04 03:45 PM'
    },
    {
        date: '2024-07-05',
        category: 'Incident',
        type: 'Contraband',
        jailunit: 'Unit D',
        datetime: '2024-07-05 11:00 AM'
    }
];


const Historytable = () => {
    return (
        <table className="historytable gap-2">
            <tr>
                <th className="text-sm font-normal opacity-50 pb-1">Voucher ID</th>
                <th className="text-sm font-normal opacity-50 pb-1">Category</th>
                <th className="text-sm font-normal opacity-50 pb-1">Type</th>
                <th className="text-sm font-normal opacity-50 pb-1">Jail Unit</th>
                <th className="text-sm font-normal opacity-50 pb-1">Date & Time Issued</th>
            </tr>
            <tr>
                <td className="select-none pointer-events-none"></td>
            </tr>
            {historyData.map((item, index) => (
                <Historyitem
                    key={index}
                    date={item.date}
                    category={item.category}
                    type={item.type}
                    jailunit={item.jailunit}
                    datetime={item.datetime}
                />
            ))}
        </table>
    )
}

export default Historytable
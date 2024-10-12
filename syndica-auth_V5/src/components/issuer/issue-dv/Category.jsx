import React from 'react';
import Categoryitem from './Categoryitem';
import '../../../css/user/issuedv.css'

const data = [
    {
        title: 'Utility Expenses',
        items: [
            { icon: 'path/to/electricity-icon.png', label: 'Electricity' },
            { icon: 'path/to/water-icon.png', label: 'Water' },
            { icon: 'path/to/telephone-icon.png', label: 'Telephone' },
            { icon: 'path/to/internet-icon.png', label: 'Internet' },
            { icon: 'path/to/internet-icon.png', label: 'Internet' },
            { icon: 'path/to/internet-icon.png', label: 'Internet' },
            { icon: 'path/to/internet-icon.png', label: 'Internet' },
            { icon: 'path/to/internet-icon.png', label: 'Internet' },
            { icon: 'path/to/internet-icon.png', label: 'Internet' },
            { icon: 'path/to/internet-icon.png', label: 'Internet' },
            { icon: 'path/to/internet-icon.png', label: 'Echos' },
        ],
    },
    {
        title: 'Personnel Services',
        items: [
            { icon: 'path/to/rca-icon.png', label: 'RCA' },
            { icon: 'path/to/tev-tran-icon.png', label: 'TEV - Transportation' },
            { icon: 'path/to/tev-inspect-icon.png', label: 'TEV - Inspection' },
        ],
    },
    {
        title: 'Seminars And Training',
        items: [
            { icon: 'path/to/ca-seminar-icon.png', label: 'CA - Seminar' },
            { icon: 'path/to/re-seminar-icon.png', label: 'Re - Seminar' },
        ],
    },
    {
        title: 'Seminars And Training test',
        items: [
            { icon: 'path/to/ca-seminar-icon.png', label: 'CA - Seminar' },
            { icon: 'path/to/re-seminar-icon.png', label: 'Re - Seminar' },
        ],
    },
    {
        title: 'Seminars And Training test',
        items: [
            { icon: 'path/to/ca-seminar-icon.png', label: 'CA - Seminar' },
            { icon: 'path/to/re-seminar-icon.png', label: 'Re - Seminar' },
        ],
    },
];

const Category = ({ onCategoryItemClick  }) => {
    return (
        <div className="issuedv__container w-full h-full gap-4 rounded-lg p-4 overflow-y-auto">
            {data.map((category, categoryIndex) => (
                <div
                    key={categoryIndex}
                    className="issuedv__category-container w-full h-46 flex flex-col gap-2 overflow-hidden"
                >
                    <h4 className="opacity-60">{category.title}</h4>
                    <hr />
                    <div className="issuedv__category-item-container min-w-full flex gap-2 overflow-y-hidden overflow-x-auto pb-2">
                        {category.items.map((item, itemIndex) => (
                            <Categoryitem key={itemIndex} icon={item.icon} label={item.label} onClick={() => onCategoryItemClick(item)} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Category;

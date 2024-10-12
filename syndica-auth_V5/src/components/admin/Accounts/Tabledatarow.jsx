import React, { useState } from 'react';
import iconView from "../../../assets/res/icons/admin/actionView.svg";
import iconEdit from "../../../assets/res/icons/admin/actionEdit.svg";
import iconDelete from "../../../assets/res/icons/admin/actionDelete.svg";
import '../../../css/admin/accounts/accountdatarow.css';

const Tabledatarow = ({ account, toggleView, toggleEdit }) => {
    const getStatusClass = () => {
        if (account.account_status === 'Active') return 'adminpage__status-active';
        if (account.account_status === 'Inactive') return 'adminpage__status-inactive';
        if (account.account_status === 'Suspended') return 'adminpage__status-suspended';
        return 'bg-gray-400'; // Default color if no status matches
    };

    return (
        <tr className="adminpage__accountdata_tr">
            <td className="px-6 whitespace-nowrap">{account.employee_id}</td>
            <td className="px-5 whitespace-nowrap">{account.first_name}</td>
            <td className="px-5 whitespace-nowrap">{account.last_name}</td>
            <td className="px-6 whitespace-nowrap">{account.role}</td>
            <td className="px-6 whitespace-nowrap">
                <div className={`w-5 h-5 rounded-full ${getStatusClass()}`}></div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">{account.division}</td>
            <td className="pl-6 py-4 whitespace-nowrap">
                <div className="adminpage__action-container max-w-24 flex gap-1">
                    <button className="adminpage__action-view w-7 h-7 flex justify-center items-center rounded-sm border-none" onClick={() => toggleView(account)}>
                        <img src={iconView} alt=""/>
                    </button>
                    <button className="adminpage__action-edit w-7 h-7 flex justify-center items-center rounded-sm border-none" onClick={() => toggleEdit(account)}>
                        <img src={iconEdit} alt=""/>
                    </button>

                    <button className="adminpage__action-delete w-7 h-7 flex justify-center items-center rounded-sm border-none" onClick={null}>
                        <img src={iconDelete} alt=""/>
                    </button>
                </div>
            </td>   
        </tr>
    );
};

export default Tabledatarow;

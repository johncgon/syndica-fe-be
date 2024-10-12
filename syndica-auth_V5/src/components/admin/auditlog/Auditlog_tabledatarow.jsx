import React from 'react'

const Auditlog_tabledatarow = ({ id, actiontoken, user, date}) => {
  return (
    <tr className="adminpage__auditlog_tr">
        <td className="w-2/12 px-3 py-2 text-left whitespace-nowrap">{id}</td>
        <td className="w-4/12 px-6 py-2 text-left whitespace-nowrap">{actiontoken}</td>
        <td className="w-4/12 px-6 py-2 text-left whitespace-nowrap">{user}</td>
        <td className="w-2/12 px-3 py-2 text-left whitespace-nowrap">{date}</td>
    </tr>
  )
}

export default Auditlog_tabledatarow

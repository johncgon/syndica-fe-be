import React from 'react'

const Historyitem = ({ date, category, type, jailunit, datetime }) => {
    return (
        <tr>
            <td>{date}</td>
            <td>{category}</td>
            <td>{type}</td>
            <td>{jailunit}</td>
            <td>{datetime}</td>
        </tr>
    )
}

export default Historyitem
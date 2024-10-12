import React from 'react'

const Historyitem = ({ id, category, type, jailunit, datetime }) => {
    return (
        <tr>
            <td>{id}</td>
            <td>{category}</td>
            <td>{type}</td>
            <td>{jailunit}</td>
            <td>{datetime}</td>
        </tr>
    )
}

export default Historyitem
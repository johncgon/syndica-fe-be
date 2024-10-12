import React from 'react'
import '../../../css/user/issuedv.css'


const Requirementitem = ({name, count}) => {
    return (
        <>
            <div className="issuer__checklist-item-container flex gap-4 p-4 w-full rounded-md">
                <input type="checkbox" className="issuer__checklist-checkbox w-5" name={name} id={name} />
                <div className="checklist__info-container flex flex-col w-full">
                    <label htmlFor={name} className="font-normal select-none w-full">{name}</label>
                    <label htmlFor={name} className="text-xs opacity-60 select-none w-full">x{count}</label>
                </div>
            </div>
        </>
    )
}

export default Requirementitem
import React from 'react'

const Categoryitem = ({icon, label, onClick }) => {
    return (
        <>
            <div className="categoryitem__container min-w-32 max-w-32 min-h-32 max-h-32 flex flex-col gap-4 p-4 justify-center items-center rounded-md" onClick={onClick}>
                <div className="categoryitem__icon w-10 h-10 overflow-hidden">
                    <img className="w-full h-full" src={icon} alt={label} />
                </div>
                <p className="w-full text-ellipsis text-nowrap text-center overflow-hidden">{label}</p>
            </div>
        </>
    )
}

export default Categoryitem
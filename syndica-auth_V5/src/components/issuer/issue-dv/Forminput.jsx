import React from 'react'

const Forminput = ({name, type, placeholder}) => {
    return (
        <>
            <div className="forminput__container flex flex-col">
                <label htmlFor={name}>
                        <h5 className="opacity-50">{name}</h5>
                </label>
                <input className="forminput__textbox rounded-md p-2 h-8 w-56" type={type} name={name} id={name} placeholder={placeholder} />
            </div>
        </>
    )
}

export default Forminput
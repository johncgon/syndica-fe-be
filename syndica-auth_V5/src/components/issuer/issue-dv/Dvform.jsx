import React from 'react'
import Requirement from './Requirement'
import Form from './Form'

const Dvform = () => {
    return (
        <>
            <div className="issuerdvcreation__container w-full h-full max-h-full flex gap-6 overflow-hidden">
                <div className="issuerdvcreation__requirement-checklist w-2/6 min-h-full rounded-lg p-4 overflow-hidden flex flex-col gap-2">
                    <h4>Document Checklist</h4>
                    <Requirement/>
                </div>
                <div className="issuerdvcreation__form-container w-4/6 min-h-full rounded-lg p-4 overflow-hidden flex flex-col gap-2">
                    <h4>Document Details</h4>
                    <Form/>
                </div>
            </div>
        </>
    )
}

export default Dvform
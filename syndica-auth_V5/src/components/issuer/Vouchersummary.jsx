import React from 'react'
import '../../css/user/summaryscrollbar.css'

const Vouchercard = () => {
    return (
        <>
            <div className="voucherSummary__card w-32 h-32 rounded-lg flex flex-col items-center justify-center p-2 gap-3 relative overflow-hidden">
                <div className="voucherSummary__card-TopCounter absolute top-0 right-0 w-8 h-8 flex justify-center items-center">
                    <h4>12</h4>
                </div>
                <div className="voucherSummary__card-icon w-8 h-8">
                    
                </div>
                <p className="w-full text-ellipsis overflow-hidden text-center">Category</p>
            </div>
        </>
    )
}

const Vouchersummary = () => {
    return (
        <>
            <div className="voucherSummary__header w-full flex justify-between items-center">
                <h3>Dispatched Vouchers</h3>
                <div className="voucherSummary__filter-container w-4/12 flex justify-end gap-2">
                    <button className="voucherSummary__filter-button w-8 h-8 p-1 rounded-sm" type="button">
                        <svg viewBox="0 0 24 24" fill="none">
                            <g strokeWidth="0"></g>
                            <g strokeLinecap="round" strokeLinejoin="round"></g>
                            <g> 
                                <path d="M4.22657 2C2.50087 2 1.58526 4.03892 2.73175 5.32873L8.99972 12.3802V19C8.99972 19.3788 9.21373 19.725 9.55251 19.8944L13.5525 21.8944C13.8625 22.0494 14.2306 22.0329 14.5255 21.8507C14.8203 21.6684 14.9997 21.3466 14.9997 21V12.3802L21.2677 5.32873C22.4142 4.03893 21.4986 2 19.7729 2H4.22657Z" fill="#000000"></path> 
                            </g>
                        </svg>
                    </button>
                    <button className="voucherSummary__filterDay p-1 w-20 h-8 flex gap-2 items-center justify-center  font-medium rounded-sm " type="button">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M17.3327 8.8325V14.6667C17.3327 15.1269 16.9596 15.5 16.4993 15.5H9.83268V8.8325H17.3327ZM8.16602 8.8325V15.5H1.49935C1.03912 15.5 0.666016 15.1269 0.666016 14.6667V8.8325H8.16602ZM8.16602 0.5V7.16583H0.666016V1.33333C0.666016 0.8731 1.03912 0.5 1.49935 0.5H8.16602ZM16.4993 0.5C16.9596 0.5 17.3327 0.8731 17.3327 1.33333V7.16583H9.83268V0.5H16.4993Z" fill="#151515"/>
                        </svg>
                        Today
                    </button>
                </div>
            </div>
            <div className="voucherSummary__card-container w-full h-full flex flex-row flex-wrap content-start justify-start gap-5" id="voucherSummary__card-container">
                <Vouchercard/>
                <Vouchercard/>
                <Vouchercard/>
                <Vouchercard/>
                <Vouchercard/>
                <Vouchercard/>
                <Vouchercard/>
                
                
            </div>
        </>
    )
}

export default Vouchersummary
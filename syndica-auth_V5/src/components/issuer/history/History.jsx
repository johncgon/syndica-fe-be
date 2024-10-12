import React from 'react'
import '../../../css/user/history.css'
import Historytable from './Historytable'

const History = () => {
    return (
        <>
            <div className="issuerhistory__container w-full h-full flex flex-col gap-4 overflow-hidden rounded-lg p-4">
                <div className="historyheader__container flex justify-between">
                    <h4>History List</h4>
                    <span className="flex w-fit items-center gap-2">
                        <button className="issuerhistory__filter-button w-8 h-8 p-1 rounded-sm flex items-center" type="button">
                            <svg viewBox="0 0 24 24" fill="none">
                                <g strokeWidth="0"></g>
                                <g strokeLinecap="round" strokeLinejoin="round"></g>
                                <g> 
                                    <path d="M4.22657 2C2.50087 2 1.58526 4.03892 2.73175 5.32873L8.99972 12.3802V19C8.99972 19.3788 9.21373 19.725 9.55251 19.8944L13.5525 21.8944C13.8625 22.0494 14.2306 22.0329 14.5255 21.8507C14.8203 21.6684 14.9997 21.3466 14.9997 21V12.3802L21.2677 5.32873C22.4142 4.03893 21.4986 2 19.7729 2H4.22657Z"></path> 
                                </g>
                            </svg>
                        </button>
                        <form className="issuerhistory__form w-64 h-8 flex gap-2" action="">
                            <input className="w-full p-2 font-ligh rounded-md text-ellipsis" type="text" name="" id="" placeholder="Search..." />
                        </form>
                    </span>
                </div>
                <Historytable/>
            </div>
        </>
    )
}

export default History
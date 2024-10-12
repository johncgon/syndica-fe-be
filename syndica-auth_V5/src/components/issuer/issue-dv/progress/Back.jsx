import React from 'react'

const Back = ({ onClick }) => {
    return (
        <button onClick={onClick} className="progress__button">
            <div className="svg-container flex">
                <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.46173 8.58694C4.68067 9.36799 4.68068 10.6343 5.46174 11.4154L11.1186 17.0722C11.7695 17.723 11.7695 18.7783 11.1187 19.4292V19.4292C10.4678 20.08 9.41253 20.08 8.76167 19.4292L0.747735 11.4154C-0.0333253 10.6343 -0.0333295 9.36799 0.747726 8.58694L8.76166 0.573035C9.41253 -0.0778339 10.4678 -0.0778316 11.1187 0.573041V0.573041C11.7695 1.22391 11.7695 2.27918 11.1187 2.93005L5.46173 8.58694Z" fill="#0d3255"/>
                </svg>
            </div>
            <h4>Go Back</h4>
        </button>
    )
}

export default Back

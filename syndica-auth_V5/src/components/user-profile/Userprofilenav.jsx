import React from 'react'

const Userprofilenav = ({ userType, setProfileRender, profileRender }) => {
    const activeColor = userType === 'admin' ? 'adminprofile__nav' : 'issuerprofile__nav';

    return (
        <>
            <div className="userprofilenav__container w-1/5 h-full p-4 rounded-lg">
                <ul className="w-full h-full flex flex-col">
                    <li
                        onClick={() => setProfileRender(1)} 
                        className={`w-full p-2 h-12 flex items-center gap-2 rounded
                        ${profileRender === 1 && activeColor} cursor-pointer`}>
                        <svg width="22" height="22" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.99984 0.666992C13.6022 0.666992 17.3332 4.39795 17.3332 9.00033C17.3332 13.6027 13.6022 17.3337 8.99984 17.3337C4.39746 17.3337 0.666504 13.6027 0.666504 9.00033C0.666504 4.39795 4.39746 0.666992 8.99984 0.666992ZM8.99984 4.83366C8.5725 4.83366 8.16025 4.89798 7.77225 5.01695C8.496 5.34345 8.99984 6.07138 8.99984 6.91699C8.99984 8.06758 8.06709 9.00033 6.9165 9.00033C6.0709 9.00033 5.34296 8.49649 5.01698 7.77266C4.8975 8.16074 4.83317 8.57299 4.83317 9.00033C4.83317 11.3015 6.69865 13.167 8.99984 13.167C11.301 13.167 13.1665 11.3015 13.1665 9.00033C13.1665 6.69914 11.301 4.83366 8.99984 4.83366Z" fill="black"/>
                            </svg>
                        <p className="select-none">Overview</p>
                    </li>
                    <li
                        onClick={() => setProfileRender(2)} 
                        className={`w-full p-2 h-12 flex items-center gap-2 rounded
                        ${profileRender === 2 && activeColor} cursor-pointer`}>
                        <svg width="22" height="22" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.3333 0.666992L15.5 4.83366V16.5072C15.5 16.9637 15.1292 17.3337 14.6722 17.3337H1.32783C0.870633 17.3337 0.5 16.9542 0.5 16.5072V1.49349C0.5 1.03703 0.870792 0.666992 1.32783 0.666992H11.3333ZM8 8.58366C9.15058 8.58366 10.0833 7.65091 10.0833 6.50033C10.0833 5.34973 9.15058 4.41699 8 4.41699C6.84942 4.41699 5.91667 5.34973 5.91667 6.50033C5.91667 7.65091 6.84942 8.58366 8 8.58366ZM4.27288 13.167H11.7271C11.5198 11.292 9.93025 9.83366 8 9.83366C6.06977 9.83366 4.48016 11.292 4.27288 13.167Z" fill="black"/>
                            </svg>
                        <p className="select-none">Personal</p>
                    </li>
                    <li
                        onClick={() => setProfileRender(3)} 
                        className={`w-full p-2 h-12 flex items-center gap-2 rounded
                        ${profileRender === 3 && activeColor} cursor-pointer`}>
                        <svg width="22" height="22" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 6.66634H14.6667C15.1269 6.66634 15.5 7.03944 15.5 7.49967V17.4997C15.5 17.9599 15.1269 18.333 14.6667 18.333H1.33333C0.8731 18.333 0.5 17.9599 0.5 17.4997V7.49967C0.5 7.03944 0.8731 6.66634 1.33333 6.66634H3V5.83301C3 3.07158 5.23857 0.833008 8 0.833008C10.7614 0.833008 13 3.07158 13 5.83301V6.66634ZM11.3333 6.66634V5.83301C11.3333 3.99206 9.84092 2.49967 8 2.49967C6.15905 2.49967 4.66667 3.99206 4.66667 5.83301V6.66634H11.3333ZM7.16667 11.6663V13.333H8.83333V11.6663H7.16667ZM3.83333 11.6663V13.333H5.5V11.6663H3.83333ZM10.5 11.6663V13.333H12.1667V11.6663H10.5Z" fill="black"/>
                            </svg>
                        <p className="select-none">Security</p>
                    </li>
                </ul>
            </div> 
        </>
    )
}

export default Userprofilenav

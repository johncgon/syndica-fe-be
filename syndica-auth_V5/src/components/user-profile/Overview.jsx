import React, { useContext } from 'react'
import { AppContext } from '../../context/Appcontext'

const Overview = ({ setProfileRender }) => {
    const { user } = useContext(AppContext);

    return (
        <>
            <div className="profileoverview__container w-full h-full flex">
                <div className="test w-1/3 h-full flex flex-col items-center">
                    <img className="w-48 h-48 rounded-full" src="https://placehold.co/200x200" alt="" />
                    <span className="flex flex-col items-center">
                        <h3>{ user.first_name + " " + user.last_name }</h3>
                        <p>{ user.role }</p>
                    </span>
                    <span className="profileoverview__contacts w-full overflow-hidden">
                        <div className="profileoverview__contacts-row flex items-center gap-2">
                            <span className="w-8 h-8">
                                <svg width="100%" height="100%" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.708496 1.54134C0.708496 1.15014 1.02563 0.833008 1.41683 0.833008H15.5835C15.9747 0.833008 16.2918 1.15014 16.2918 1.54134V11.458C16.2918 11.8492 15.9747 12.1663 15.5835 12.1663H1.41683C1.02563 12.1663 0.708496 11.8492 0.708496 11.458V1.54134ZM9.2085 3.66634V5.08301H13.4585V3.66634H9.2085ZM12.7502 6.49967H9.2085V7.91634H12.7502V6.49967ZM7.43766 5.08301C7.43766 4.105 6.64483 3.31217 5.66683 3.31217C4.68883 3.31217 3.896 4.105 3.896 5.08301C3.896 6.061 4.68883 6.85384 5.66683 6.85384C6.64483 6.85384 7.43766 6.061 7.43766 5.08301ZM5.66683 7.56217C4.29762 7.56217 3.18766 8.67213 3.18766 10.0413H8.146C8.146 8.67213 7.03604 7.56217 5.66683 7.56217Z"/>
                                </svg>
                            </span>
                            <p className="opacity-60 w-11/12">{ user.employee_id}</p>
                        </div>
                        <div className="profileoverview__contacts-row flex items-center gap-2">
                            <span className="w-8 h-8 p-1">
                                <svg width="100%" height="100%" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.875 9.63083V12.1356C12.875 12.5074 12.5875 12.816 12.2166 12.8422C11.9068 12.8641 11.654 12.875 11.4583 12.875C5.19907 12.875 0.125 7.80092 0.125 1.54167C0.125 1.34596 0.135944 1.0932 0.157831 0.783396C0.184054 0.412498 0.492582 0.125 0.864401 0.125H3.36924C3.55105 0.125 3.70333 0.262714 3.72158 0.443608C3.73797 0.606008 3.75321 0.736391 3.7673 0.834764C3.91058 1.83543 4.20325 2.78788 4.622 3.66881C4.68921 3.81021 4.64538 3.97946 4.51798 4.07046L2.98918 5.16253C3.91991 7.33661 5.66339 9.0801 7.83747 10.0109L8.92753 8.48468C9.01968 8.35576 9.19096 8.31142 9.33404 8.37935C10.2149 8.79776 11.1673 9.09009 12.1678 9.23303C12.2655 9.24706 12.3951 9.26215 12.5564 9.27844C12.7373 9.29671 12.875 9.449 12.875 9.63083Z" fill="#8C8C8C"/>
                                </svg>
                            </span>
                            <p className="opacity-60 w-11/12">{ user.contact_number }</p>
                        </div>
                        <div className="profileoverview__contacts-row flex items-center gap-2">
                            <span className="w-8 h-8">
                                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7l8-5V6l-8 5l-8-5v2z"/></svg>
                            </span>
                            <p className="opacity-60 w-10/12 overflow-ellipsis">{ user.email }</p>
                        </div>
                    </span>
                </div>
                <div className="userprofile__verticalline h-full mx-4"></div>
                <div className="w-2/3 h-full flex gap-4">
                    <div onClick={() => setProfileRender(2)} className="userprofile__card w-48 h-52 rounded-lg flex flex-col p-2 items-center">
                        <span className="w-16 h-16 my-auto">
                            <svg width="100%" height="100%" viewBox="0 0 46 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M33 0L45.5 12.5V47.5205C45.5 48.89 44.3877 50 43.0165 50H2.9835C1.6119 50 0.5 48.8617 0.5 47.5205V2.4795C0.5 1.11013 1.61238 0 2.9835 0H33ZM23 23.75C26.4517 23.75 29.25 20.9517 29.25 17.5C29.25 14.0482 26.4517 11.25 23 11.25C19.5483 11.25 16.75 14.0482 16.75 17.5C16.75 20.9517 19.5483 23.75 23 23.75ZM11.8187 37.5H34.1813C33.5595 31.875 28.7908 27.5 23 27.5C17.2093 27.5 12.4405 31.875 11.8187 37.5Z" fill="black"/>
                            </svg>
                        </span>
                        <h3>Personal</h3>
                        <p className="text-sm text-center">Complete your account by inputting details</p>
                    </div>  
                    <div onClick={() => setProfileRender(3)} className="userprofile__card w-48 h-52 rounded-lg flex flex-col p-2 items-center">
                        <span className="w-16 h-16 my-auto">
                            <svg width="100%" height="100%" viewBox="0 0 46 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M38 18H43C44.3807 18 45.5 19.1193 45.5 20.5V50.5C45.5 51.8807 44.3807 53 43 53H3C1.6193 53 0.5 51.8807 0.5 50.5V20.5C0.5 19.1193 1.6193 18 3 18H8V15.5C8 7.21572 14.7157 0.5 23 0.5C31.2843 0.5 38 7.21572 38 15.5V18ZM33 18V15.5C33 9.97715 28.5228 5.5 23 5.5C17.4771 5.5 13 9.97715 13 15.5V18H33ZM20.5 33V38H25.5V33H20.5ZM10.5 33V38H15.5V33H10.5ZM30.5 33V38H35.5V33H30.5Z" fill="black"/>
                            </svg>
                        </span>
                        <h3>Security</h3>
                        <p className="text-sm text-center">Secure your account with strong password</p>
                    </div>  
                </div>
            </div> 
        </>
    )
}

export default Overview
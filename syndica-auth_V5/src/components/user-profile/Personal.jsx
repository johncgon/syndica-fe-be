import React, { useContext } from 'react'
import { AppContext } from '../../context/Appcontext'

const Personal = () => {
    const { user } = useContext(AppContext);
    
    return (
        <>
            <div className="profilepersonal__container w-full h-full flex gap-4">
                <div className="profilepersonal__col w-1/3 flex flex-col items-center gap-6">
                    <h4 className="w-full">Account Profile</h4>
                    <img className="w-48 h-48" src="https://placehold.co/200x200" alt="" />
                    <input name="profilePictureUpload" id="profilePictureUpload" type="file" accept="image/png, image/jpeg" hidden/>
                    <label className="cursor-pointer py-2 px-4 rounded text-sm" htmlFor="profilePictureUpload">Upload New Avatar</label>
                </div> 
                <div className="profilepersonal__col w-2/3 mt-12 flex flex-col gap-8">
                    <div className="profilepersonal__row w-full flex flex-col gap-4">
                        <h4 className="w-full">Personal Details</h4>
                        <div className="w-full flex gap-4">
                            <span className="profilepersonal__input">
                                <label className="opacity-45 text-sm w-full" htmlFor=""><h4>First Name</h4></label>
                                <input className="w-full p-2 rounded" value={ user.first_name } type="text" name="" id="" placeholder="Enter your first name"/>
                            </span>
                            <span className="profilepersonal__input">
                                <label className="opacity-45 text-sm w-full" htmlFor=""><h4>Last Name</h4></label>
                                <input className="w-full p-2 rounded" value={ user.last_name } type="text" name="" id="" placeholder="Enter your last name"/>
                            </span>
                        </div>
                        <div className="w-full flex gap-4">
                            <span className="profilepersonal__input">
                                <label className="opacity-45 text-sm w-full" htmlFor=""><h4>Email</h4></label>
                                <input className="w-full p-2 rounded" value={ user.email } type="text" name="" id="" placeholder="Enter your email address"/>
                            </span>
                            <span className="profilepersonal__input">
                                <label className="opacity-45 text-sm w-full" htmlFor=""><h4>Mobile Number</h4></label>
                                <input className="w-full p-2 rounded" value={ user.contact_number } type="text" name="" id="" placeholder="Enter your mobile number"/>
                            </span>
                        </div>
                    </div>
                    <div className="profilepersonal__row w-full flex flex-col gap-4">
                        <h4 className="w-full">Employee Detail</h4>
                        <div className="w-full flex gap-4">
                            <span className="profilepersonal__input">
                                <label className="opacity-45 text-sm w-full" htmlFor=""><h4>Employee ID</h4></label>
                                <input className="w-full p-2 rounded" disabled value={ user.employee_id } type="text" name="" id="" placeholder="Enter your employee ID"/>
                            </span>
                            <span className="profilepersonal__input">
                                <label className="opacity-45 text-sm w-full" htmlFor=""><h4>Date Created</h4></label>
                                <input className="w-full p-2 rounded" disabled value={ user.created_at ? new Date(user.created_at).toISOString().slice(0, 10) : '' }  type="text" name="" id="" placeholder="Enter account creation date"/>
                            </span>
                        </div>
                        <div className="w-full flex gap-4">
                            <span className="profilepersonal__input">
                                <label className="opacity-45 text-sm w-full" htmlFor=""><h4>Role</h4></label>
                                <input className="w-full p-2 rounded" disabled value={ user.role } type="text" name="" id="" placeholder="Enter your role"/>
                            </span>
                            <span className="profilepersonal__input">
                                <label className="opacity-45 text-sm w-full" htmlFor=""><h4>Division</h4></label>
                                <input className="w-full p-2 rounded" disabled value={ user.division } type="text" name="" id="" placeholder="Enter your division"/>
                            </span>
                        </div>
                    </div>
                    <span className="w-full flex justify-end pr-4 mt-auto mb-4">
                        <button className="py-2 px-4 text-sm rounded border-none cursor-pointer">
                            Save Changes
                        </button>
                    </span>
                </div> 
            </div>
        </>
    )
}

export default Personal
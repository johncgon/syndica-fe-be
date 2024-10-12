import React from 'react'

const Security = () => {
    return (
        <>
            <div className="profilesecurity__container w-full h-full flex flex-col gap-8">
                <h4 className="w-full">Security</h4>
                <div className="profilesecurity__row w-full flex flex-col gap-4">
                    <h4 className="w-full">Change Password</h4>
                    <div className="w-full flex gap-4">
                        <span className="profilesecurity__input w-1/3">
                            <label className="opacity-45 text-sm w-full" htmlFor=""><h4>Current Password</h4></label>
                            <input className="w-full p-2 rounded" type="password" name="" id="" placeholder="Enter your current password"/>
                        </span>
                    </div>
                    <div className="w-full flex gap-4">
                        <span className="profilesecurity__input w-1/3">
                            <label className="opacity-45 text-sm w-full" htmlFor=""><h4>New Password</h4></label>
                            <input className="w-full p-2 rounded" type="password" name="" id="" placeholder="Enter your new password"/>
                        </span>
                        <span className="profilesecurity__input w-1/3">
                            <label className="opacity-45 text-sm w-full" htmlFor=""><h4>Confirm New Password</h4></label>
                            <input className="w-full p-2 rounded" type="password" name="" id="" placeholder="Re-enter your password"/>
                        </span>
                    </div>
                </div>
                <div className="profilesecurity__tip w-full h-auto rounded p-2">
                    <p className="text-sm font-semibold opacity-70">Your password must be:</p>
                    <ul className="w-full list-inside pl-2">
                        <li className="text-sm opacity-50"><em>At least 8 characters long</em></li>
                        <li className="text-sm opacity-50"><em>Including at least one uppercase letter</em></li>
                        <li className="text-sm opacity-50"><em>Including at least one lowercase letter</em></li>
                        <li className="text-sm opacity-50"><em>Including at least one number</em></li>
                    </ul>
                </div>
                <button className="mt-auto ml-auto p-2 rounded cursor-pointer">Change Password</button>
            </div>
        </>
    )
}

export default Security
import React, { useState } from 'react'
import '../../css/user-profile/userprofile.css'
import Userprofilenav from './Userprofilenav'
import Userprofilerender from './Userprofilerender'

const Userprofile = ({ userType }) => {
    const [profileRender, setProfileRender] = useState(1);

    return (
        <>
            <div className="userprofile__container flex gap-6 px-40 py-6 mt-16 w-full">
                <Userprofilenav 
                    userType={userType}
                    setProfileRender={setProfileRender}
                    profileRender={profileRender}
                />
                <Userprofilerender 
                    profileRender={profileRender}
                    setProfileRender={setProfileRender}
                />
            </div>
        </>
    )
}

export default Userprofile
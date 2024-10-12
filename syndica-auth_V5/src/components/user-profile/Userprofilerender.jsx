import React from 'react'
import Overview from './Overview'
import Personal from './Personal'
import Security from './Security'

const Userprofilerender = ({ profileRender, setProfileRender }) => {
    return (
        <>
            <div className="userprofilerender__container w-4/5 h-full rounded-lg p-4">
                {profileRender === 1 && <>
                    <Overview 
                        setProfileRender={setProfileRender}
                    />
                </>}
                {profileRender === 2 && <>
                    <Personal/>
                </>}
                {profileRender === 3 && <>
                    <Security/>
                </>}
            </div>
        </>
    )
}

export default Userprofilerender
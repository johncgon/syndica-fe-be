import React from 'react'

const ProfileUpload = () => {
  return (
    <div className="w-2/6 h-full">
        <div className="w-full flex flex-col p-2 items-center gap-6">
            <img className="w-48 h-48 rounded-full" src="https://placehold.co/200x200" alt="" />
            <input name="profilePictureUpload" id="profilePictureUpload" type="file" accept="image/png, image/jpeg" hidden/>
            <label style={{ border: '1px solid #B5B5B5'}} className="cursor-pointer py-2 px-4 rounded-md text-base font-semibold" htmlFor="profilePictureUpload">Upload Avatar</label>
        {/*edit nalang css inline muna katamad*/}
        </div> 
    </div>
  )
}

export default ProfileUpload
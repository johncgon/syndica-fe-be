import React, { useState } from 'react';

const Tryfilter = () => {
    const [status , setStatus] = useState('All');
    const [department, setDepartment] = useState('All');
    const [role, setRole] = useState('All');

    return (
        <div className="absolute top-full mt-2 right-0 z-10">
            <div className="p-4 w-48 bg-white rounded-lg shadow-lg" style={{ border: '2px solid lightgray' }}> {/* Alisin yung inline nakakatamad pa gumawa ng css file */}
                <div className="mb-4">
                    <label className="block font-semibold mb-2">Status</label>
                    <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        className="w-full p-2 border rounded-md"
                    >
                        <option value="All">All</option>
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                        <option value="Suspended">Suspended</option>
                        
                    </select>
                </div>

                <div className="mb-4">
                    <label className="block font-semibold mb-2">Department</label>
                    <select
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                        className="w-full p-2 border rounded-md"
                    >
                        <option value="All">All</option>
                        <option value="Regional Office">Regional Office</option>
                        <option value="Try">Try</option>
                        <option value="Try">Try</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label className="block font-semibold mb-2">Role</label>
                    <select
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        className="w-full p-2 border rounded-md"
                    >
                        <option value="All">All</option>
                        <option value="Authorizer">Authorizer</option>
                        <option value="Issuer">Issuer</option>
                    </select>
                </div>
            </div>
        </div>
  )
}

export default Tryfilter
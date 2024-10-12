import React, { useState } from "react";
import axios from "axios";
import axiosInstance from '../../../../Axiosconfig'

const AddAccountForm = ({ togglePopup }) => {
    const [formData, setFormData] = useState({
        employee_id: "",
        first_name: "",
        last_name: "",
        email: "",
        contact_number: "",
        role: "",
        division: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
        ...prevData,
        [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axiosInstance.post('/api/register', formData, { withCredentials: true },);
            console.log(response);
            alert("Account created successfully");
            togglePopup();

            // Clear form data
            setFormData({
                employee_id: "",
                first_name: "",
                last_name: "",
                email: "",
                contact_number: "",
                role: "",
                division: "",
            });    
        } catch (error) {
            console.error("Error creating account:", error);
            alert("Failed to create account");
        }
    };

  return (
        <form className="w-full h-full flex flex-col gap-2 overflow-y-auto" onSubmit={handleSubmit}>
            <h4>Employee Detail</h4>
            <div className="w-full flex">
                <span className="w-2/5">
                <label className="text-sm text-black opacity-35" htmlFor="employee_id">
                    <h4>Employee ID</h4>
                </label>
                <input
                    className="w-full p-2 rounded"
                    type="text"
                    name="employee_id"
                    placeholder="XXXXXXXXXX"
                    value={formData.employee_id}
                    onChange={handleChange}
                    required
                />
                </span>
            </div>

            <h4>Personal Details</h4>
            <div className="w-full flex gap-6">
                <span className="w-2/5">
                <label className="text-sm text-black opacity-35" htmlFor="first_name">
                    <h4>First Name</h4>
                </label>
                <input
                    className="w-full p-2 rounded"
                    type="text"
                    name="first_name"
                    placeholder="First Name"
                    value={formData.first_name}
                    onChange={handleChange}
                    required
                />
                </span>
                <span className="w-2/5">
                <label className="text-sm text-black opacity-35" htmlFor="last_name">
                    <h4>Last Name</h4>
                </label>
                <input
                    className="w-full p-2 rounded"
                    type="text"
                    name="last_name"
                    placeholder="Last Name"
                    value={formData.last_name}
                    onChange={handleChange}
                    required
                />
                </span>
            </div>

            <h4>Login Details</h4>
            <div className="w-full flex gap-6">
                <span className="w-2/5">
                <label className="text-sm text-black opacity-35" htmlFor="email">
                    <h4>Email</h4>
                </label>
                <input
                    className="w-full p-2 rounded"
                    type="email"
                    name="email"
                    placeholder="Enter email address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                </span>
                <span className="w-2/5">
                <label className="text-sm text-black opacity-35" htmlFor="contact_number">
                    <h4>Mobile Number</h4>
                </label>
                <input
                    className="w-full p-2 rounded"
                    type="tel"
                    name="contact_number"
                    placeholder="Enter mobile number (Optional)"
                    value={formData.contact_number}
                    onChange={handleChange}
                />
                </span>
            </div>

            <h4>Permission Details</h4>
            <div className="w-full flex gap-6">
                <span className="w-2/5">
                <label className="text-sm text-black opacity-35" htmlFor="role">
                    <h4>Role</h4>
                </label>
                <select
                    className="w-full h-10 p-2 rounded"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    required
                >
                    <option value="" disabled>
                    Select Role
                    </option>
                    <option value="Authorizer">Authorizer</option>
                    <option value="Issuer">Issuer</option>
                </select>
                </span>

                <span className="w-2/5">
                <label className="text-sm text-black opacity-35" htmlFor="division">
                    <h4>Division</h4>
                </label>
                <select
                    className="w-full h-10 p-2 rounded"
                    name="division"
                    value={formData.division}
                    onChange={handleChange}
                    required
                >
                    <option value="" disabled>
                    Select Division
                    </option>
                    <option value="Logistic Office">Logistic Office</option>
                    <option value="Calumpit">Calumpit</option>
                </select>
                </span>
            </div>

            <div className="w-full flex justify-end p-2 gap-3 mt-auto ml-auto">
                <button
                type="button"
                className="p-2 rounded font-semibold cursor-pointer text-gray-700"
                onClick={togglePopup}
                >
                Cancel
                </button>
                <button type="submit" className="p-2 rounded font-semibold cursor-pointer bg-[#FFAB2E]">
                Create Account
                </button>
            </div>
        </form>
    );
};

export default AddAccountForm;

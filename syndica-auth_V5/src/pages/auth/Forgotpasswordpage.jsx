import React, { useState } from 'react'
import axios from 'axios';
import axiosInstance from '../../Axiosconfig';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import syndicalogo from '../../assets/res/auth/logo-var2.png'

const Forgotpasswordpage = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);
    const [status, setStatus] = useState(null);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError(null);
        setStatus(null);

        if(!email){
            setError('Email is required');
            return;
        }

        console.log(email);
        try {
            const response = await axiosInstance.post('/api/password/email', { email }, { withCredentials: true },);
            setStatus(response.data.status);
        } catch (error) {
            if(error.response.status === 422) {
                setError(error.response.data.errors);
            }
        }
    }

    return (
        <>
        <div className="login__container flex justify-center items-center w-screen h-screen overflow-hidden ">
            <div className="login__inner flex flex-wrap w-7/12 h-4/6 rounded-3xl overflow-hidden flex-row-reverse">
                <div className="login__card w-6/12 flex justify-center items-center flex-col gap-4">
                    
                </div>
                <div className="login__card w-6/12 p-16 flex items-center flex-col">
                    {status && <>
                        <div className="bg-green-200 w-full p-2 rounded-sm text-green-950 text-sm text-center">
                            {status}
                        </div>
                    </>}
                    <form className="login__form w-full h-full flex flex-col justify-start items-center gap-4" onSubmit={handleSubmit}>
                        <img className="w-40 pb-2" src={syndicalogo} alt=""/>
                        <div className="login__row w-full">
                            <h1 className="text-2xl w-full">FORGOTTEN PASSWORD?</h1>
                            <p className="text-sm w-full">Enter your email address below, and we'll send you a link to reset your password. Please check your inbox and follow the instructions to recover access to your account.</p>
                        </div>
                        <div className="login__row w-full">
                                <label className="w-full font-medium" htmlFor="login__emailField">Email Address</label>
                                <input 
                                    className="w-full p-2 rounded-lg h-10 bg-neutral-200" 
                                    type="email" 
                                    name="emailField" 
                                    id="login__emailField" 
                                    placeholder="example@gmail.com"
                                    onChange={handleEmailChange}
                                />
                                <p className="text-xs text-red-600">{error ? `* ${error}` : ''}</p>
                        </div>
                        <input className="login__submit w-full h-10 rounded-lg font-semibold button-hover" type="submit" value="Reset Password" />
                    </form>
                    <Link className="forgot-password__return text-xs font-regular" to="/login">Return to <span className="font-semibold">Login</span></Link>
                </div>
            </div>
        </div>
    </>
    )
    }

export default Forgotpasswordpage
import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import axiosInstance from '../../Axiosconfig';

import '../../css/auth/login.css';

import bjmplogo from '../../assets/res/bjmp/bjmp_logo.png'
import bjmp3logo from '../../assets/res/bjmp/bjmpro3_logo.png'
import syndicalogo from '../../assets/res/auth/logo-var2.png'

import Adminpage from '../admin/Adminpage';
import Issuerpage from '../issuer/Issuerpage';
import { AppContext } from '../../context/Appcontext';

const Loginpage = () => {
    const { setToken, setUser } = useContext(AppContext);
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    
    const [usernameError, setUsernameError] = useState(null);
    const [passwordError, setPasswordError] = useState(null)

    useEffect(() => {
        const token = localStorage.getItem('token') || sessionStorage.getItem('token');
        const userRole = localStorage.getItem('role') || sessionStorage.getItem('role');

        if (token && userRole) {

        let path;
        switch (userRole) {
            case 'Admin':
                path = '/admin';
                break;
            case 'Issuer':
                path = '/home';
                break;
            case 'Authorizer':
                path = '/authorizer'; 
                break;
            default:
                path = '/login'; 
        }

        navigate(path);

        }
    }, [navigate]);

    const handleLogin = async (e) => {
        e.preventDefault();

        setUsernameError(null);
        setPasswordError(null);

        // Form Validation
        if (!username || !password) {
            if (!username) setUsernameError('Email is required');
            if (!password) setPasswordError('Password is required');
            return; 
        }

        try {
            const response = await axiosInstance.post('/api/login', { email: username, password }, { withCredentials: true },);

            const { user, token } = response.data;

            console.log(user);
            // Determine storage based on 'rememberMe' checkbox
            const storage = rememberMe ? localStorage : sessionStorage;

            // Store the token and user role in the chosen storage
            storage.setItem('token', token);
            storage.setItem('user_info', JSON.stringify(user));
            storage.setItem('role', user.role);
            sessionStorage.setItem('currentPage', "Dashboard");
            
            // Store to context provider
            setToken(token);
            setUser(user);

            

            // Redirect based on user role
            navigate(user.role === 'Admin' ? '/admin' : '/home');
        } catch (error) {
            // Handle login error
            const errorMessage = error.response?.data?.message;
            console.error(error);
            alert(errorMessage);
        }
    };

    
    
    return (
        <div className="login__container flex justify-center items-center w-screen h-screen overflow-hidden">
            <div className="login__inner flex flex-wrap w-7/12 h-4/6 rounded-3xl overflow-hidden shadow-gray-500">
                <div className="login__card w-6/12 flex justify-center items-center flex-col gap-4">
                        <span className="flex gap-4">
                            <img className="w-24" src={bjmplogo} alt="" />
                            <img className="w-24" src={bjmp3logo} alt="" />
                        </span>
                        <h1 className="text-center text-xl">Bureau of Jail Management<br />and Penology</h1>
                </div>
                <div className="login__card w-6/12 px-16">
                    <form
                        className="login__form w-full h-full flex flex-col justify-center items-center gap-2"
                        onSubmit={handleLogin}
                    >
                        <img className="w-40 pb-4" src={syndicalogo} alt="" />

                        <div className="login__row w-full">
                            <h1 className="text-2xl w-full">LOGIN TO YOUR ACCOUNT</h1>
                            <p className="text-sm w-full">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero amet minima natus aliquid aut mollitia magnam voluptatem dolor!</p>
                        </div>

                        <div className="login__row w-full">
                            <label className="w-full font-medium" htmlFor="login__emailField">Email Address</label>
                            <input
                                className="w-full p-2 rounded-lg h-10 bg-neutral-200"
                                type="email"
                                name="emailField"
                                id="login__emailField"
                                placeholder="Enter your email"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <p className="text-xs text-red-600">{usernameError ? `* ${usernameError}` : ''}</p>
                        </div>

                        <div className="login__row w-full">
                            <label className="w-full font-medium" htmlFor="login__passwordField">Password</label>
                            <input
                                className="w-full h-10 p-2 rounded-lg bg-neutral-200"
                                type="password"
                                name="passwordField"
                                id="login__passwordField"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <p className="text-xs text-red-600">{passwordError ? `* ${passwordError}` : ''}</p>
                        </div>

                        <div className="login__row w-full flex items-center justify-between">
                            <div className="w-fit h-full flex justify-start items-center gap-1">
                                <input
                                    type="checkbox"
                                    name="rememberMeCheckbox"
                                    id="login__rememberMeCheckbox"
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                />
                                <label className="login__remember-label font-light text-xs" htmlFor="login__rememberMeCheckbox">Remember Me</label>
                            </div>
                            <Link className="forgot-password__return text-xs font-semibold" to="/forgot-password">Forgot Password</Link>
                        </div>
                        <input className="login__submit w-full h-10 rounded-lg font-semibold button-hover mt-2" type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Loginpage;

import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../css/auth/passwordreset.css';
import logo from '../../assets/svg/logo-tag.svg'

const Resetpassword = () => {
    const [email, setEmail] = useState('');
    const [token, setToken] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [errors, setErrors] = useState([]);
    const [message, setMessage] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const validatePassword = (password) => {
        const minLength = 8;
        const hasUppercase = /[A-Z]/.test(password);
        const hasLowercase = /[a-z]/.test(password);
        const hasNumber = /[0-9]/.test(password);
        
        return password.length >= minLength && hasUppercase && hasLowercase && hasNumber;
      };
      

    useEffect(() => {
        // Extract token and email from URL
        const queryParams = new URLSearchParams(location.search);
        const emailParam = queryParams.get('email');
        const tokenParam = location.pathname.split('/').pop();

        setEmail(emailParam || '');
        setToken(tokenParam || '');
    }, [location]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate password
        if (!validatePassword(password)) {
            setErrors({
            password: 'Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, and a number.'
            });
            return;
        }

        // Prepare form data
        const data = {
            email,
            token,
            password,
            password_confirmation: passwordConfirmation,
        };

        try {
            // Send POST request to reset password
            const response = await axios.post('http://localhost:8000/api/password/reset', data);
            setMessage(response.data.message);
            setErrors([]);
            navigate('/login')
        } catch (error) {
            if (error.response && error.response.data.errors) {
                setErrors(error.response.data.errors);
            } else {
                setErrors({ general: 'An unexpected error occurred.' });
            }
        }
    };


    return (
        <div className="passwordreset__container w-1/2 h-auto my-16 mx-auto flex flex-col items-center overflow-hidden p-4 rounded-xl gap-8">
            <img className="w-64" src={logo} alt="" />
            <h1>Reset Password</h1>
            {message && <p className="p-5 rounded bg-green-400">{message}</p>}
            {errors.general && <p className="p-5 rounded bg-red-400">{errors.general}</p>}
            <form className="w-80" onSubmit={handleSubmit}>
                {errors.token && <p>{errors.token}</p>}
                <input
                type="hidden"
                name="token"
                value={token}
                />
                <input
                type="hidden"
                name="email"
                value={email}
                />
                <div className="flex flex-col mb-4">
                    <label htmlFor="password">New Password</label>
                    <input
                        className="p-2 rounded border-none"
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter your new password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="flex flex-col mb-4">
                    <label htmlFor="password_confirmation">Confirm Password</label>
                    <input
                        className="p-2 rounded border-none"
                        type="password"
                        id="password_confirmation"
                        name="password_confirmation"
                        placeholder="Re-enter your new password"
                        value={passwordConfirmation}
                        onChange={(e) => setPasswordConfirmation(e.target.value)}
                        required
                    />
                </div>
                <button className="p-2 w-full rounded" type="submit">Reset Password</button>
            </form>
            {errors.password && <p>{errors.password}</p>}
            <div className="profilesecurity__tip w-full h-auto rounded p-2">
                <p className="text-sm font-semibold opacity-70">Your password must be:</p>
                <ul className="w-full list-inside pl-2">
                    <li className="text-sm opacity-50"><em>At least 8 characters long</em></li>
                    <li className="text-sm opacity-50"><em>Including at least one uppercase letter</em></li>
                    <li className="text-sm opacity-50"><em>Including at least one lowercase letter</em></li>
                    <li className="text-sm opacity-50"><em>Including at least one number</em></li>
                </ul>
            </div>
        </div>
    );
};

export default Resetpassword;

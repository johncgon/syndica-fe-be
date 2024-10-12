import React from 'react';
import { Navigate } from 'react-router-dom';

const Privateroute = ({ children, allowedRoles }) => {
    const token = localStorage.getItem('token') || sessionStorage.getItem('token');
    const userRole = localStorage.getItem('role') || sessionStorage.getItem('role');

    if (!token || !userRole) {
        return <Navigate to="/login" />;
    }

    if (allowedRoles && !allowedRoles.includes(userRole)) {
        return <Navigate to="/login" />;
    }
    
    return children;
};

export default Privateroute;

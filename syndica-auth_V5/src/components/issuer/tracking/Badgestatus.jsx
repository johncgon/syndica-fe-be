import React from 'react';
import '../../../css/user/issuer-badge.css'

const BadgeStatus = ({ status }) => {
    switch (status) {
        case 'ongoing':
            return (
                <div className="badge__container badge__ongoing p-1 rounded-sm w-20 text-center">
                    <p className="text-xs font-medium select-none">On Going</p>
                </div>
            );
        case 'completed':
            return (
                <div className="badge__container badge__completed p-1 rounded-sm w-20 text-center">
                    <p className="text-xs font-medium select-none">Approved</p>
                </div>
            );
        case 'return':
            return (
                <div className="badge__container badge__return p-1 rounded-sm w-20 text-center">
                    <p className="text-xs font-medium select-none">Return</p>
                </div>
            );
        case 'onhold':
            return (
                <div className="badge__container badge__onhold p-1 rounded-sm w-20 text-center">
                    <p className="text-xs font-medium select-none">On Hold</p>
                </div>
            );
        default:
            return (
                <div className="badge__container badge__unknown p-1 rounded-sm w-20 text-center">
                    <p className="text-xs font-medium select-none">Unknown</p>
                </div>
            );
    }
};

export default BadgeStatus;

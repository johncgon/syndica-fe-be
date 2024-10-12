import React from 'react';
import '../../css/authorizer/header.css';
import Datetimedisplay from '../Datetimedisplay';
import IconButton from '../buttons/IconButton';

const NotifIcon = "M12 2C16.9706 2 21 6.04348 21 11.0314V20H3V11.0314C3 6.04348 7.02944 2 12 2ZM9.5 21H14.5C14.5 22.3807 13.3807 23.5 12 23.5C10.6193 23.5 9.5 22.3807 9.5 21Z"

const Header = ({ currentPage }) => {
    return (
        <div className="authorizer__header-container flex w-full h-16 px-6 items-center justify-between shrink-0">
            <h2>{currentPage}</h2>
            <div className="authorizer__header-right-wrapper flex items-center gap-4">
                <div className="authorizer__header-time-date flex flex-col items-end">
                    <Datetimedisplay/>
                </div>
                <IconButton icon={NotifIcon}/>
                <button type="button" className="authorizer__profile flex w-11 h-11 rounded-full items-center justify-center">
                    A
                </button>
            </div>
        </div>
    );
}

export default Header;
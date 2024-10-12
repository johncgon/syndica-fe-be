import React from 'react';
import '../../css/authorizer/button.css'

const IconButton = ({icon}) => {
    return (
        <button type="button" className="icon-button flex w-8 h-8 items-center justify-center shrink-0">
            <svg width="1.25rem" height="1.25rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d={icon}></path></svg>
        </button>
    );
}

export default IconButton;
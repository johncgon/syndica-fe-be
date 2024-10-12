import React, { useState } from 'react';
import Progressbar from './progress/Progressbar';
import Category from './Category';
import Dvform from './Dvform';
import Summary from './Summary';

import '../../../css/user/issuedv.css';

const Issuedv = () => {
    const [currentState, setCurrentState] = useState(1);

    const handleCategoryItemClick = (item) => {
        setCurrentState(2);
    };


    return (
        <div className="w-full h-full flex flex-col gap-4">
            <Progressbar currentState={currentState} setCurrentState={setCurrentState} />

            {currentState === 1 && <Category onCategoryItemClick={handleCategoryItemClick} />}
            {currentState === 2 && <Dvform />}
            {currentState === 3 && <Summary />}
        </div>
    );
}

export default Issuedv;

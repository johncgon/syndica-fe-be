import React from 'react';
import Back from './Back';
import Submit from './Submit';
import Done from './Done';
import '../../../../css/user/issuedv-progressbar.css';

const Progressbar = ({ currentState, setCurrentState }) => {
    const handleBackClick = () => {
        if (currentState > 1) {
            setCurrentState(currentState - 1);
        }
    };

    const handleNextClick = () => {
        if (currentState < 3) {
            setCurrentState(currentState + 1);
        }
    };

    const getTextAndButtons = () => {
        switch (currentState) {
            case 1:
                return {
                    text: "Choose voucher type",
                    buttons: null,
                    dotsActive: [true, false, false]
                };
            case 2:
                return {
                    text: "Fill in the details and check requirements",
                    buttons: (
                        <>
                            <Back onClick={handleBackClick} />
                            <Submit onClick={handleNextClick} />
                        </>
                    ),
                    dotsActive: [false, true, false]
                };
            case 3:
                return {
                    text: "Check summary and print waybill",
                    buttons: <Done/>,
                    dotsActive: [false, false, true]
                };
            default:
                return {
                    text: "",
                    buttons: null,
                    dotsActive: [false, false, false]
                };
        }
    };

    const { text, buttons, dotsActive } = getTextAndButtons();

    return (
        <div className="issuedv__progressbar-container w-full flex justify-between items-center py-4 px-6 rounded-lg">
            <div className="issuedv__backbutton flex items-center w-24">
                {currentState === 2 && <Back onClick={handleBackClick} />}
            </div>
            <div className="progress__inner w-auto h-full flex flex-col justify-center items-center gap-2">
                <div className="progress__box w-full flex gap-1 items-center justify-center">
                    <div className={`progress__dot w-6 h-1.5 rounded-lg ${dotsActive[0] ? 'progress__active' : ''}`}></div>
                    <div className={`progress__dot w-6 h-1.5 rounded-lg ${dotsActive[1] ? 'progress__active' : ''}`}></div>
                    <div className={`progress__dot w-6 h-1.5 rounded-lg ${dotsActive[2] ? 'progress__active' : ''}`}></div>
                </div>
                <h4 className="text-center">{text}</h4>
            </div>
            <div className="issuedv__nextbutton flex items-center w-24">
                {currentState === 2 && <Submit onClick={handleNextClick} />}
                {currentState === 3 && <Done onClick={handleNextClick} />}
            </div>
        </div>
    );
}

export default Progressbar;

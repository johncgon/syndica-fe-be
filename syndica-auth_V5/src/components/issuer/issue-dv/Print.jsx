import React, { useRef } from 'react';
import Syndicalogo from '../../../assets/svg/logo.svg'; 
import Bjmplogo from '../../../assets/res/Homepage/bjmp-logo.png'; 
import Printicon from '../../../assets/svg/print.svg';

const Print = () => {
    const printRef = useRef();

    const handlePrint = () => {
        const printContents = printRef.current.innerHTML;
        const originalContents = document.body.innerHTML;

        document.body.innerHTML = printContents;
        window.print();
        document.body.innerHTML = originalContents;
        window.location.reload(); 
    };

    return (
        <>
            <div ref={printRef} className="print__container w-full h-full flex flex-col items-center justify-start gap-4">
                <div className="print__inner w-full h-auto overflow-y-auto">
                    <div className="print__header w-full flex justify-center items-center gap-4 p-4">
                        <img className="w-14 h-14" src={Syndicalogo} alt="Syndica Logo" />
                        <img className="w-14 h-14" src={Bjmplogo} alt="BJMP Logo" />
                        <h4>Bureau of Jail Management and <br />
                        Penology Regional Office III</h4>
                    </div>
                    <div className="print__information-container w-full flex">
                        <div className="print__information-inner w-1/2 p-4">
                            <h4>Voucher ID</h4>
                            <p>RO2024-01-001</p>
                            <br />
                            <h4>Voucher Type</h4>
                            <p>Electricity</p>
                        </div>
                        <div className="print__information-inner w-1/2 p-4">
                            <h4>Issuer</h4>
                            <p>Name Goes Here</p>
                            <br />
                            <h4>Date Issued</h4>
                            <p>21/07/2024</p>
                        </div>
                    </div>
                    <div className="print__additional flex">
                        <div className="print__note p-4">
                            <h4>Note:</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <div className="print__qr w-fit p-4">
                            <img className="max-w-32" src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example" alt="QR Code" />
                        </div>
                    </div>
                </div>
                <button onClick={handlePrint} className="print__button no__print p-2 flex items-center justify-center gap-1 rounded-md no-print">
                    <p className="font-medium">Print</p>
                    <img src={Printicon} alt="Print Icon" />
                </button>
            </div>
        </>
    );
};

export default Print;

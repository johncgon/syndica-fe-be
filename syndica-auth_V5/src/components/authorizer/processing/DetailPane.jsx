import React from 'react';

const DetailPane = () => {
    return (
        <div className="authorizer__processing-process-detail flex flex-col w-full p-4">
            <div className="authorizer__processing-process-detail-header">
                <h3>Voucher ID: RO2024-01-001</h3>
            </div>
            <hr />
            <div className="authorizer__processing-detail-wrapper flex flex-col h-full gap-10 pt-4">
                <div className="flex gap-10">
                    <div className="inputs flex flex-col w-full gap-2">
                        <label htmlFor='reportname'>
                            <h5 className="opacity-50">Voucher Category</h5>
                        </label>
                        <input className="forminput__textbox rounded-md  p-2 h-8 w-56" type="text" name="reportname" id="reportname" placeholder="" defaultValue="Utility Expenses" disabled/>
                        <label htmlFor='reportname'>
                            <h5 className="opacity-50">Jail Unit</h5>
                        </label>
                        <input className="forminput__textbox rounded-md p-2 h-8 w-56" type="text" name="reportname" id="reportname" placeholder="" defaultValue="Calumpit" disabled/>
                        <label htmlFor='reportname'>
                            <h5 className="opacity-50">Period Covered</h5>
                        </label>
                        <input className="forminput__textbox rounded-md  p-2 h-8 w-56" type="text" name="reportname" id="reportname" placeholder="" defaultValue="21/06/2024-21/07/2024" disabled/>
                    </div>
                    <div className="inputs flex flex-col w-full gap-2">
                        <label htmlFor='reportname'>
                            <h5 className="opacity-50">Voucher Type</h5>
                        </label>
                        <input className="forminput__textbox rounded-md  p-2 h-8 w-56" type="text" name="reportname" id="reportname" placeholder="" defaultValue="Electricity" disabled/>
                        <label htmlFor='reportname'>
                            <h5 className="opacity-50">Bill Number</h5>
                        </label>
                        <input className="forminput__textbox rounded-md  p-2 h-8 w-56" type="text" name="reportname" id="reportname" placeholder="" defaultValue="1234567890" disabled/>
                    </div>
                </div>
                <div className="flex flex-col w-full h-full gap-2">
                    <label htmlFor="note">
                        <h5 className="opacity-50">Note</h5>
                    </label>
                    <textarea id="note" name="w3review" className="h-1/2 p-2" disabled defaultValue="This is additional note that I would like to be added."></textarea>
                </div>
            </div>
            <div className="flex gap-4 justify-end">
                <input className="return-button w-1/5 h-8 font-semibold" type="submit" defaultValue="Return" />
                <input className="onhold-button w-1/5 h-8 font-semibold" type="submit" defaultValue="On-Hold" />
                <input className="auth-button w-1/5 h-8 font-semibold" type="submit" defaultValue="Authorize" />
            </div>
        </div>
    );
}

export default DetailPane;
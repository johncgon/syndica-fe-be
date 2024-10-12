import React from 'react';

const ReportBuilder = () => {
    return (
        <div className="authorizer__reports-builder-container flex flex-col w-1/4 p-4 gap-4">
            <div className="authorizer__reports-builder-header flex">
                <h3>Report Builder</h3>
            </div>
            <div className="authorizer__reports-builder-content flex flex-col gap-6">
                <div>
                    <h3>1. Choosing Name</h3>
                    <p>This is what your file be named when exported.</p>
                    <label htmlFor='reportname'>
                        <h5 className="opacity-50">Report Name</h5>
                    </label>
                    <input className="forminput__textbox rounded-md p-2 h-8 w-56" type="text" name="reportname" id="reportname" placeholder="Report Name"/>
                </div>
                <div>
                    <h3>2. Filtering Report</h3>
                    <p>This determines what the report will be including.</p>
                    <label htmlFor='vouchertype'>
                        <h5 className="opacity-50">Voucher Type</h5>
                    </label>
                    <select id="vouchertype" className="w-full h-8 rounded-md">
                        <option value="electricity">Electricity</option>
                        <option value="internet">Internet</option>
                        <option value="water">Water</option>
                        <option value="inmate-transferee">Inmate Transferee</option>
                    </select>
                    <label htmlFor='daterange'>
                        <h5 className="opacity-50">Date Range</h5>
                    </label>
                    <input className="forminput__textbox rounded-md p-2 h-8 w-56" type="text" name="daterange" id="daterange" placeholder="From when to when"/>
                    <label htmlFor='sorting'>
                        <h5 className="opacity-50">Sorting</h5>
                    </label>
                    <select id="sorting" className="w-full h-8 rounded-md">
                        <option value="asc">Ascending</option>
                        <option value="desc">Descending</option>
                    </select>
                </div>
            </div>
            <div className="flex gap-4 justify-end">
                    <input className="export-button font-semibold py-1 px-2" type="submit" value="Export as CSV" />
                    <input className="generate-button font-semibold py-1 px-2" type="submit" value="Generate" />
            </div>
        </div>
    );
}

export default ReportBuilder;
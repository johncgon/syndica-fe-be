import React from 'react';

const ReportPreview = () => {
    return (
        <div className="authorizer__reports-preview-container flex flex-col w-full p-4">
            <div className="authorizer__reports-preview-header flex">
                <h3>Preview</h3>
            </div>
            <div className="authorizer__reports-preview-result flex w-full">
                <table className="historytable w-full gap-2">
                    <tr>
                        <th className="text-sm font-normal opacity-50 pb-1">Voucher ID</th>
                        <th className="text-sm font-normal opacity-50 pb-1">Category</th>
                        <th className="text-sm font-normal opacity-50 pb-1">Type</th>
                        <th className="text-sm font-normal opacity-50 pb-1">Jail Unit</th>
                        <th className="text-sm font-normal opacity-50 pb-1">Date & Time Issued</th>
                    </tr>
                    <tr>
                        <td>RO2024-01-001</td>
                        <td>Utility Expense</td>
                        <td>Electricity</td>
                        <td>Calumpit</td>
                        <td>2024-07-05 11:00 AM</td>
                    </tr>
                    <tr>
                        <td>RO2024-01-001</td>
                        <td>Utility Expense</td>
                        <td>Electricity</td>
                        <td>Calumpit</td>
                        <td>2024-07-05 11:00 AM</td>
                    </tr>
                    <tr>
                        <td>RO2024-01-001</td>
                        <td>Utility Expense</td>
                        <td>Electricity</td>
                        <td>Calumpit</td>
                        <td>2024-07-05 11:00 AM</td>
                    </tr>
                    <tr>
                        <td>RO2024-01-001</td>
                        <td>Utility Expense</td>
                        <td>Electricity</td>
                        <td>Calumpit</td>
                        <td>2024-07-05 11:00 AM</td>
                    </tr>
                    <tr>
                        <td>RO2024-01-001</td>
                        <td>Utility Expense</td>
                        <td>Electricity</td>
                        <td>Calumpit</td>
                        <td>2024-07-05 11:00 AM</td>
                    </tr>  
                </table>
            </div>
        </div>
    );
}

export default ReportPreview;
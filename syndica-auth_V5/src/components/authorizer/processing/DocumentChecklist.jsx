import React from 'react';

const DocumentChecklist = () => {
    return (
        <div className="authorizer__processing-checklist flex flex-col w-1/3 p-4">
            <div className="authorizer__processing-checklist-header flex">
                <h3>Document Checklist</h3>
            </div>
            <div className="authorizer__processing-checklist-document-list flex flex-col py-4">
                <div className="authorizer__processing-checklist-item flex w-full p-2 items-center gap-4">
                    <input type="checkbox" />
                    <div className="authorizer__processing-checklist-item-details flex flex-col ">
                        <h4>Copy of DV</h4>
                        <p>x2</p>
                    </div>
                </div>
                <div className="authorizer__processing-checklist-item flex w-full p-2 items-center gap-4">
                    <input type="checkbox" />
                    <div className="authorizer__processing-checklist-item-details flex flex-col">
                        <h4>Original Billing Statement</h4>
                        <p>x1</p>
                    </div>
                </div>
                <div className="authorizer__processing-checklist-item flex w-full p-2 items-center gap-4">
                    <input type="checkbox" />
                    <div className="authorizer__processing-checklist-item-details flex flex-col">
                        <h4>Official Receipt</h4>
                        <p>x1</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DocumentChecklist;
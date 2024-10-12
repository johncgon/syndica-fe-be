import React from 'react'
import Forminput from './Forminput'

const data = [
    {
        input__name: "Voucher ID",
        input__type: "text",
        input__placeholder: "ROXXXX-XX-XXX"
    },
    {
        input__name: "Voucher Category",
        input__type: "text",
        input__placeholder: "Category"
    },
    {
        input__name: "Voucher Type",
        input__type: "text",
        input__placeholder: "Type"
    },
    {
        input__name: "Jail Unit",
        input__type: "text",
        input__placeholder: "Select Jail Unit"
    },
    {
        input__name: "Bill Number",
        input__type: "number",
        input__placeholder: "XXXXXXXXXXX"
    },
    {
        input__name: "Period Covered",
        input__type: "date",
        input__placeholder: "--/--/---- - --/--/----"
    },
]

const Form = () => {
    return (
        <>
            <div className="issuedv__form-container w-full h-full overflow-y-auto flex flex-col gap-2">
                <form className="voucher__information w-full flex flex-col gap-2">
                    <h5>Voucher Information</h5>
                    <hr />
                    <div className="voucher__information-inner w-full flex gap-4 flex-wrap mb-4">
                        {data.map((input, index)=> (
                            <Forminput 
                                key={index}
                                name={input.input__name}
                                type={input.input__type}
                                placeholder={input.input__placeholder}
                            />
                        ))}
                    </div>
                    <h5>Additional Information</h5>
                    <hr />
                    <h5 className="opacity-50">Note</h5>
                    <textarea className="forminput__textbox max-w-full min-w-full min-h-32 p-2 rounded-md" name="input__notes" id="input__notes" placeholder="Write additional information here..."></textarea>
                </form>
            </div>
        </>
    )
}

export default Form
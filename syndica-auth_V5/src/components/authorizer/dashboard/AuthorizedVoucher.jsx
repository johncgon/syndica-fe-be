import React from 'react'
import '../../../css/authorizer/authorizedvoucher.css'
import DateFilterButton from '../../buttons/DateFilterButton'

const VoucherCard = () => {
    return (
        <div className="authorizedvoucher__card w-32 h-32 rounded-lg flex flex-col items-center justify-center p-2 gap-3 relative overflow-hidden bg-[#E8F0F6]">
            <div className="authorizedvoucher__card-TopCounter absolute top-0 right-0 w-8 h-8 flex justify-center items-center bg-[var(--accent)]">
                <h4>12</h4>
            </div>
            <div className="authorizedvoucher__card-icon w-12 h-12 absolute top-6">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 10H20L11 23V14H4L13 1V10Z"></path></svg>
            </div>
            <p className="w-full text-ellipsis overflow-hidden absolute bottom-4 text-center">Electricity</p>
        </div>
    )
}

const AuthorizedVoucher = () => {
    return (
        <div className="authorizedvoucher__list-container flex flex-col h-full bg-white p-4 gap-4 rounded-lg">
            <div className="authorizedvoucher__header-wrapper flex w-full h-10 items-center justify-between">
                <h3>Authorized Vouchers</h3>
                <DateFilterButton/>
            </div>
            <div className="authorizedvoucher__list flex flex-wrap gap-6">
                <VoucherCard/>
                <VoucherCard/>
                <VoucherCard/>
                <VoucherCard/>
                <VoucherCard/>
                <VoucherCard/>
                <VoucherCard/>
                <VoucherCard/>
            </div>
        </div>
    )
}

export default AuthorizedVoucher
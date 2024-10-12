import React from "react";

const VoucherDetails = () => {
  return (
    <>
      <header className="w-full h-8 flex justify-start items-center">
        <h3>Voucher Details</h3>
      </header>

      <div className="w-full h-full flex flex-col gap-2">
        
        <h5 className="text-gray-400">Icon</h5>
        <label htmlFor="profilePictureUpload" className="VoucherDetails__UploadIcon w-full h-10 px-4 py-2 cursor-pointer">
          <input name="profilePictureUpload" id="profilePictureUpload" type="file" accept="image/png, image/jpeg, image/svg" hidden/>
          <span className="w-full h-full text-black text-sm">
            Upload Icon
          </span>
        </label>

        <h4 className="">Name and Category</h4>

        <span className="w-full">
          <label className="text-sm text-black opacity-35" htmlFor="">
            <h4>Voucher Name</h4>
          </label>
          <input className="w-full px-4 py-2 rounded" type="text" placeholder="Voucher Name" />
        </span>

        <span className="w-full">
        <label className="text-sm text-black opacity-35" htmlFor="">
            <h4>Category</h4>
          </label>
          <select className="w-full h-10 px-2 rounded">
            <option value="Logistic Office">Repair and Maintenance</option>
            <option value="Test">Foods</option>
            <option value="Test">Cars</option>
          </select>
        </span>
      </div>
    </>
  );
};

export default VoucherDetails;

import React from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import { MdSecurity } from "react-icons/md";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { RiSecurePaymentLine } from "react-icons/ri";
function Services() {
  return (
    <div className="bg-stone-100 p-5">
      <div className="grid md:grid-cols-3 gap-5">
        <div className="service-1 h-20 flex justify-center items-center  border w-full bg-stone-300 md:h-40 rounded-lg">
          <div className="">
            <CiDeliveryTruck className="text-blue-900 text-3xl" />
            <h1 className="text-sm">Fast and Free Delivery</h1>
          </div>
        </div>
        <div className="service-2 md:relative w-full">
          <div className="flex mb-5 gap-5 w-full justify-center h-20 md:h-16 items-center border bg-stone-300 rounded-lg">
            <MdSecurity className="text-blue-900 text-3xl" />
            <h1 className="text-sm">Non-contact Shiping</h1>
          </div>
          <div className="flex gap-5 w-full justify-center h-20 md:h-16 items-center border bg-stone-300 md:absolute bottom-0 rounded-lg">
            <FaMoneyBillTrendUp className="text-blue-900 text-3xl" />
            <h1>Non-contact Shiping</h1>
          </div>
        </div>
        <div className="service-3 h-20 w-full flex justify-center items-center bg-stone-300 md:h-40 rounded-lg">
          <div className="">
            <RiSecurePaymentLine className=" text-blue-900 text-3xl" />
            <h1>Secure Payment System</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;

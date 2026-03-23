import React from "react";

const Currency = () => {
  return (
    <div
      className="block overflow-hidden  clear-both text-[14px]"
      id="currency"
    >
      <h3 className="hidden leading-[1.6] text-[1.25rem] font-[500] mb-[20px]">
        Equity
      </h3>
      <div className="overflow-auto w-[100%] max-w-[100%] ">
        <table className="w-[100%] border-solid border border-[#ddd] rounded-[3px]">
          <thead>
            <tr className="border-b border-[#ddd] ">
              <th className="pl-[15px] border-l-0 m-auto ">&nbsp;</th>
              <th className="m-auto text-[0.875rem] font-[500]  px-[18px] py-[14px] text-left">
                Currency futures{" "}
              </th>
              <th className="m-auto text-[0.875rem] font-[500]  px-[18px] py-[14px] text-left">
                Currency options{" "}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="">
              <td className="px-[18px] py-[14px]">Brokerage </td>
              <td className="px-[18px] py-[14px]">
                0.03% or ₹ 20/executed order whichever is lower{" "}
              </td>
              <td className="px-[18px] py-[14px]"> ₹ 20/executed order</td>
            </tr>
            <tr className="bg-[#fbfbfb] ">
              <td className="px-[18px] py-[14px]">STT/CTT</td>
              <td className="px-[18px] py-[14px]"> No STT</td>
              <td className="px-[18px] py-[14px]">No STT</td>
            </tr>
            <tr className="">
              <td className="px-[18px] py-[14px]">Transaction charges</td>
              <td className="px-[18px] py-[14px]">
                NSE: 0.00035% <br />
                BSE: 0.00045%
              </td>
              <td className="px-[18px] py-[14px]">
                {" "}
                NSE: 0.0311%
                <br />
                BSE: 0.001%
              </td>
            </tr>
            <tr className="bg-[#fbfbfb] ">
              <td className="px-[18px] py-[14px]">GST</td>
              <td className="px-[18px] py-[14px]">
                {" "}
                18% on (brokerage + SEBI charges + transaction charges)
              </td>
              <td className="px-[18px] py-[14px]">
                {" "}
                18% on (brokerage + SEBI charges + transaction charges)
              </td>
            </tr>
            <tr className="">
              <td className="px-[18px] py-[14px]">SEBI charges </td>
              <td className="px-[18px] py-[14px]">₹10 / crore</td>
              <td className="px-[18px] py-[14px]"> ₹10 / crore</td>
            </tr>
            <tr className="bg-[#fbfbfb] ">
              <td className="px-[18px] py-[14px]">Stamp charges </td>
              <td className="px-[18px] py-[14px]">
                0.0001% or ₹10 / crore on buy side
              </td>
              <td className="px-[18px] py-[14px]">
                {" "}
                0.0001% or ₹10 / crore on buy side
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Currency;

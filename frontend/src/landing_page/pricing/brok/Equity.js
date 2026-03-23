import React from "react";

const Equity = () => {
  return (
    <div
      className="block overflow-hidden  clear-both text-[14px]"
      id="equalities"
    >
      <h3 className="hidden leading-[1.6] text-[1.25rem] font-[500] mb-[20px]">
        Equity
      </h3>
      <div className="overflow-auto w-[100%] max-w-[100%] ">
        <table className="w-[100%] border-solid border border-[#ddd] rounded-[3px]">
          <thead>
            <tr className="border-b border-[#ddd] ">
              <th className="pl-[18px] border-l-0 m-auto ">&nbsp;</th>
              <th className="m-auto text-[0.875rem] font-[500]  px-[18px] py-[14px] text-left">
                Equity delivery{" "}
              </th>
              <th className="m-auto text-[0.875rem] font-[500]  px-[18px] py-[14px] text-left">
                Equity intraday{" "}
              </th>
              <th className="m-auto text-[0.875rem] font-[500]  px-[18px] py-[14px] text-left">
                F&O - Futures
              </th>
              <th className="m-auto text-[0.875rem] font-[500]  px-[18px] py-[14px] text-left">
                F&O - Options
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="">
              <td className="px-[18px] py-[14px]">Brokerage</td>
              <td className="px-[18px] py-[14px]">Zero Brokerage</td>
              <td className="px-[18px] py-[14px]">
                {" "}
                0.03% or Rs. 20/executed order whichever is lower
              </td>
              <td className="px-[18px] py-[14px]">
                0.03% or Rs. 20/executed order whichever is lower
              </td>
              <td className="px-[18px] py-[14px]">
                Flat Rs. 20 per executed order
              </td>
            </tr>
            <tr className="bg-[#fbfbfb] ">
              <td className="px-[18px] py-[14px]">STT/CTT</td>
              <td className="px-[18px] py-[14px]"> 0.1% on buy & sell</td>
              <td className="px-[18px] py-[14px]">0.025% on the sell side</td>
              <td className="px-[18px] py-[14px]">0.02% on the sell side</td>
              <td className="px-[18px] py-[14px]">
                <ul className="list-disc">
                  <li className="mb-[2px]">
                    0.125% of the intrinsic value on options that are bought and
                    exercised
                  </li>
                  <li>0.1% on sell side (on premium)</li>
                </ul>
              </td>
            </tr>
            <tr className="">
              <td className="px-[18px] py-[14px]">Transaction charges</td>
              <td className="px-[18px] py-[14px]">
                NSE: 0.00307% <br />
                BSE: 0.00375%
              </td>
              <td className="px-[18px] py-[14px]">
                {" "}
                NSE: 0.00307%
                <br />
                BSE: 0.00375%
              </td>
              <td className="px-[18px] py-[14px]">
                NSE: 0.00183%
                <br />
                BSE: 0
              </td>
              <td className="px-[18px] py-[14px]">
                NSE: 0.03553% (on premium) <br />
                BSE: 0.0325% (on premium)
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
              <td className="px-[18px] py-[14px]">
                18% on (brokerage + SEBI charges + transaction charges)
              </td>
              <td className="px-[18px] py-[14px]">
                18% on (brokerage + SEBI charges + transaction charges)
              </td>
            </tr>
            <tr className="">
              <td className="px-[18px] py-[14px]">SEBI charges </td>
              <td className="px-[18px] py-[14px]">₹10 / crore</td>
              <td className="px-[18px] py-[14px]"> ₹10 / crore</td>
              <td className="px-[18px] py-[14px]">₹10 / crore</td>
              <td className="px-[18px] py-[14px]">₹10 / crore</td>
            </tr>
            <tr className="bg-[#fbfbfb] ">
              <td className="px-[18px] py-[14px]">Stamp charges </td>
              <td className="px-[18px] py-[14px]">
                0.015% or ₹1500 / crore on buy side{" "}
              </td>
              <td className="px-[18px] py-[14px]">
                {" "}
                0.003% or ₹300 / crore on buy side
              </td>
              <td className="px-[18px] py-[14px]">
                0.002% or ₹200 / crore on buy side
              </td>
              <td className="px-[18px] py-[14px]">
                0.003% or ₹300 / crore on buy side
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Equity;

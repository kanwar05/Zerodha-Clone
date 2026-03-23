import React from "react";

const OpenAccount = () => {
  return (
    <div>
      <div className="max-w-6xl mx-auto mb-5 pb-[100px]">
        <div className="flex flex-col items-center text-center">
          <div className="mt-[20px]">
            <h2 className="text-[28px] m-[0] mt-[20px] ">
              Open a Zerodha account
            </h2>
            <p className="text-[16px] mt-[10px] mb-[15px] text-muted py-4">
              Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
            </p>
            <button className="p-2 px-4 bg-[#387ed1] hover:bg-black rounded-[4px] transition-colors duration:300">
              <a href="./" className="no-underline text-[#FFFFFF] ">
                <span className="font-semibold">Sign up for free</span>
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenAccount;

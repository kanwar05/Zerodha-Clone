import React from "react";

const Hero = () => {
  return (
    <div className='px-[140px] '>
      <section className="py-[100px] ">
        <div className="container text-center">
          <h1 className="text-[28px]">Charges</h1>
          <p className="text-muted text-[20px] mt-[10px] mb-[15px]">
            List of all charges and taxes
          </p>
        </div>
      </section>

      <section className=" text-center pt-[80px] mx-[35px] px-0 ">
        <div className="row justify-between text-center">
          <div className="col-4 flex flex-col items-center justify-start">
            <img
              src="media/images/pricingEquity.svg"
              alt=""
              className="w-[250px] mb-[15px]"
            />
            <h2 className="text-[28px] mb-[20px] font-medium ">
              Free equity delivery
            </h2>
            <p className="text-[16px] mb-[15px] mt-[16px] text-muted ">
              All equity delivery investments (NSE, BSE), are absolutely free —
              ₹ 0 brokerage.
            </p>
          </div>
          <div className="col-4 flex flex-col items-center justify-start">
            <img
              src="media/images/intradayTrades.svg"
              alt=""
              className="w-[250px] mb-[15px]"
            />
            <h2 className="text-[28px] mb-[20px] font-medium">
              Intraday and F&O trades
            </h2>
            <p className="text-[16px] mb-[15px] mt-[16px] text-muted ">
              Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
              intraday trades across equity, currency, and commodity trades.
              Flat ₹20 on all option trades.
            </p>
          </div>
          <div className="col-4 flex flex-col items-center justify-start">
            <img
              src="media/images/pricingMF.svg"
              alt=""
              className="w-[250px] mb-[15px]"
            />
            <h2 className="text-[28px] mb-[20px] font-medium">
              Free direct MF
            </h2>
            <p className="text-[16px] mb-[15px] mt-[16px] text-muted ">
              All direct mutual fund investments are absolutely free — ₹ 0
              commissions & DP charges.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;

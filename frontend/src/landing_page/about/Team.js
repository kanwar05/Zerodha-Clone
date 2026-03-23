import React from "react";

const Team = () => {
  return (
    <div className="container text-center py-5 px-[18%]  ">
      <h1 className="text-[24px] mb-[20px]">People</h1>
      <div className="row pb-[100px] pt-[40px]  ">
        <div className="col-5 flex flex-col items-center  ">
          <img
            src="media/images/nithinKamath.jpg"
            alt="nithin kamath"
            className="w-[295px] rounded-full mb-[10px]"
          />
          <h5 className="text-[18px]">Nithin Kamath</h5>
          <p className="my-[16px] text-[14px]">Founder, CEO</p>
        </div>
        <div className="col-7 text-start  flex flex-col items-start justify-start">
          <p className="text-[16px] my-[16px] leading-[2em]">
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p className="text-[16px] mb-[16px] leading-[2em]">
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p className="text-[16px] mb-[16px] leading-[2em]">
            Playing basketball is his zen.
          </p>
          <p className="text-[16px] leading-[2em]">
            Connect on <a href="./" className="text-[#387ed1]">Homepage</a> / <a href="./" className="text-[#387ed1]">TradingQnA</a> /
            <a href="./" className="text-[#387ed1]">Twitter</a>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;

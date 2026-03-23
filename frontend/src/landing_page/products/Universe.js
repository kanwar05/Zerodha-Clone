import React from "react";

const Universe = () => {
  return (
    <div className="container px-[15%] text-center">
      <div className="text-center pt-[80px] ">
        <p className="text-[20px] mt-[10px] mb-[15px]">
          Want to know more about our technology stack? Check out the{" "}
          <a
            href="./"
            className="no-underline text-[#387ed1] hover:text-[#000] text-[22px] "
          >
            Zerodha.tech
          </a>{" "}
          blog.
        </p>
      </div>

      <div className="row text-center pt-[80px]">
        <h2 className="text-[24px] mb-[10px]">The Zerodha Universe</h2>
        <p className="text-[16px] mt-[15px] mb-[15px]">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="row mt-[40px] gap-16 px-[90px]">
          <div className="col flex flex-col items-center justify-between mt-[20px] ">
            <div className="row-6">
              <a
                href="./"
                className="no-underline flex flex-col items-center justify-center   "
              >
                <img
                  alt="img"
                  src="media/images/zerodhaFundhouse.png"
                  className="w-[79%] opacity-90 hover:opacity-100 transition-all duration-300"
                />
                <br />
                <span className="text-[12px] text-muted mt-[10px]">
                  Our asset management venture that is creating simple and
                  transparent index funds to help you save for your goals.
                </span>
              </a>
            </div>
            <div className="row-6 mt-[60px]">
              <a
                href="./"
                className="no-underline flex flex-col items-center justify-center   "
              >
                <img
                  alt="img"
                  src="media/images/streakLogo.png"
                  className="w-[66%] opacity-90 hover:opacity-100 transition-all duration-300"
                />
                <br />
                <span className="text-[12px] text-muted mt-[10px]">
                  Systematic trading platform that allows you to create and
                  backtest strategies without coding.
                </span>
              </a>
            </div>
          </div>
          <div className="col flex flex-col items-center justify-between mt-[20px]">
            <div className="row-6">
              <a
                href="./"
                className="no-underline flex flex-col items-center justify-center   "
              >
                <img
                  alt="img"
                  src="media/images/sensibullLogo.svg"
                  className="w-[89%]  opacity-90 hover:opacity-100 transition-all duration-300"
                />
                <br />
                <span className="text-[12px] text-muted mt-[10px]">
                  Options trading platform that lets you create strategies,
                  analyze positions, and examine data points like open interest,
                  FII/DII, and more.
                </span>
              </a>
            </div>
            <div className="row-6 mt-[20px]">
              <a
                href="./"
                className="no-underline flex flex-col items-center justify-center   "
              >
                <img
                  alt="img"
                  src="media/images/smallcaseLogo.png"
                  className="w-[84%] opacity-90 hover:opacity-100 transition-all duration-300"
                />
                <br />
                <span className="text-[12px] text-muted mt-[10px]">
                  Thematic investing platform that helps you invest in
                  diversified baskets of stocks on ETFs.
                </span>
              </a>
            </div>
          </div>
          <div className="col flex flex-col items-center justify-between mt-[20px]">
            <div className="row-6 ">
              <a
                href="./"
                className="no-underline flex flex-col items-center justify-center  "
              >
                <img
                  alt="img"
                  src="media/images/tijori.svg"
                  className="w-[58%]  opacity-90 hover:opacity-100 transition-all duration-300"
                />
                <br />
                <span className="text-[12px] text-muted mt-[10px]">
                  Investment research platform that offers detailed insights on
                  stocks, sectors, supply chains, and more.
                </span>
              </a>
            </div>
            <div className="row-6 mt-[20px]">
              <a
                href="./"
                className="no-underline flex flex-col items-center justify-center  "
              >
                <img
                  alt="img"
                  src="media/images/dittoLogo.png"
                  className="w-[57%] opacity-90 hover:opacity-100 transition-all duration-300"
                />
                <br />
                <span className="text-[12px] text-muted mt-[10px]">
                  Personalized advice on life and health insurance. No spam and
                  no mis-selling.
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-[40px] pb-[80px] ">
        <button className="p-2 mt-[20px] px-4 bg-[#387ed1] hover:bg-black rounded-[4px] transition-colors duration:300 ">
          <a href="./" className="no-underline text-[#FFFFFF] ">
            <span className="font-semibold text-[20px]">Sign up for free</span>
          </a>
        </button>
      </div>
    </div>
  );
};

export default Universe;

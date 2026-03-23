import React from "react";

const Hero = () => {
  return (
    <div className="container">
      <div className="mx-[10%] py-[100px] text-center border-b">
        <h1 className="text-[28px]">Zerodha Products</h1>
        <p className="text-[20px] mt-[10px] mb-[15px]">
          Sleek, modern, and intuitive trading platforms
        </p>
        <p className="text-[16px] mt-[15px] mb-[16px]">
          Check out our{" "}
          <a
            href="./"
            className="no-underline text-[#387ed1] hover:text-[#000] "
          >
            investment offerings <i className="fa-solid fa-arrow-right"></i>
          </a>{" "}
        </p>
      </div>
    </div>
  );
};

export default Hero;

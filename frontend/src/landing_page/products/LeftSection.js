import React from "react";

const LeftSection = ({
  imageurl,
  productName,
  description,
  link1,
  link2,
  googlePlay,
  applePlay,
}) => {
  return (
    <div className="container px-[13%]  ">
      <div className="row  pt-[80px]">
        <div className="col-7">
          <img alt="img" src={imageurl} className="" />
        </div>
        <div className="col-1"></div>
        <div className="col-4 pt-5 pl-5">
          <h2 className="text-[24px] mb-[20px] font-semibold">{productName}</h2>
          <p className="my-[16px] font-[16px] leading-[2em] text-muted">
            {description}
          </p>
          <div className="flex flex-row justify-between">
            {link1 ? (
              <a
                href="./"
                className="no-underline text-[#387ed1] hover:text-[#000] "
              >
                {link1} <i className="fa-solid fa-arrow-right"></i>
              </a>
            ) : (
              ""
            )}
            {link2 ? (
              <a
                href="./"
                className="no-underline text-[#387ed1] hover:text-[#000] "
              >
                {link2} <i className="fa-solid fa-arrow-right"></i>
              </a>
            ) : (
              ""
            )}
          </div>
          <div className="mt-[25px] flex flex-row justify-between pr-6">
            <a
              href={googlePlay}
              className="no-underline text-[#387ed1] hover:text-[#000] "
            >
              <img alt="img"
                src="media/images/googlePlayBadge.svg"
                className=" opacity-80 hover:opacity-100 transition-all duration-300"
              />
            </a>
            <a
              href={applePlay}
              className="no-underline text-[#387ed1] hover:text-[#000] "
            >
              <img alt="img"
                src="media/images/appstoreBadge.svg"
                className="opacity-80 hover:opacity-100 transition-all duration-300"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;

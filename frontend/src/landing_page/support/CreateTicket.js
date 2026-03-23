import React from "react";

const CreateTicket = () => {
  return (
    <div className="w-full bg-[#f6f6f6] pt-[100px]">
      <div className="p-6 md:py-10 m-auto max-w-7xl">
        <div className="flex flex-wrap pb-5 md:pb-8 gap-3 justify-between items-center">
          <p className="pr-2 md:text-4xl text-xl sm:text-2xl font-semibold">
            <a href="./" className="cursor-pointer">
              Support Portal
            </a>
          </p>

          <a
            href="./"
            className="flex py-1.5 px-3 md:px-4 md:py-2 md:text-base hover:bg-[#0A0A0A] bg-[#387ed1] text-white text-sm rounded-[4px] gap-1.5 items-center shrink-0 outline-offset-2"
          >
            <span className="font-medium">My tickets</span>
          </a>
        </div>

        <div className="relative flex px-4 md:px-5 md:gap-3 border border-[#387ed1] h-[60px] has-focus-visibile:shadow-[1px 1px 6px #e0e7ef] bg-[#fff] border rounded-sm gap-2 items-center transition-shadow outline-[#666] outline-offset-2 ">
          <span className="md:block hidden text-[#666]">
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
          <input
            id="searchInput"
            className="pl-1 py-2 w-full border-0 outline-none "
            type="text"
            autoComplete="off"
            placeholder="Eg: How do I open my account, How do i activate F&O..."
            autoFocus
          ></input>
          <div className=""></div>
        </div>
      </div>
    </div>
  );
};

export default CreateTicket;

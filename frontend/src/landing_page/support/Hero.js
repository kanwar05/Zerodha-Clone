import React from "react";
import { LuCirclePlus } from "react-icons/lu";
import { RiAccountCircleLine, RiMoneyRupeeCircleLine } from "react-icons/ri";
import { SiBuildkite, SiCircleci } from "react-icons/si";
import { BsCoin } from "react-icons/bs";
import { CgChevronUp } from "react-icons/cg";

const Hero = () => {
  return (
    <div className="flex flex-col pt-5 px-6 m-auto max-w-7xl md:pt-7 md:gap-10 md:flex-row">
      <div
        id="featured-content"
        className="flex flex-col px-[20px] py-[12px] md:hidden w-full bg-[#ff910020] border-l-8 border-[#ff9100] "
      >
        <ul className="list-disc ml-[12px]">
          <li className="py-[5px] hover:text-[#000] text-[#397dd0] transition-colors duration-300 ">
            <a className="underline featured-link text-[16px] " href="./">
              Rights Entitlements listing in March 2026
            </a>
          </li>
          <li className="py-[5px] hover:text-[#000] text-[#397dd0]">
            <a href="./" className="underline featured-link text-[16px]">
              Latest Intraday leverages and Square-off timings
            </a>
          </li>
        </ul>
      </div>

      <div className="flex flex-col pt-[20px] md:pb-10 w-full gap-7">
        {/* 1 */}
        <details className="group">
          <summary className="flex hover:scale-[1.02] border border-[#eee] border-solid rounded-xs items-center duration-300 trasition-transform cursor-pointer select-none">
            <div className="flex px-[20px] bg-[#f2f8fe99] rounded-xs items-center self-stretch shrink-0">
              <span className="text-xl text-[#397dd0]">
                <LuCirclePlus className="" />
              </span>
            </div>
            <h2 className="px-2.5 py-3 font-medium md:text-lg">
              Account Opening
            </h2>
            <span className="ml-auto px-4 text-[24px] text-bold text-[#397dd0]  transition-transform shrink-0 group-open:rotate-0 rotate-180 ">
              {" "}
              <CgChevronUp className="p-0" />{" "}
            </span>
          </summary>
          <div className="flex flex-col w-full border-b border-r border-l border-[#eee] ">
            <ul className="flex flex-col pl-12 py-4 md:pl-16 w-full list-disc">
              <li className="pl-1 hover:text-[#000] text-[#397dd0] cursor-pointer">
                <a className="flex py-2 px-2" href="./">
                  Resident individual
                </a>
              </li>
              <li className="pl-1 hover:text-[#000] text-[#397dd0] cursor-pointer">
                <a className="flex py-2 px-2" href="./">
                  Minor
                </a>
              </li>
              <li className="pl-1 hover:text-[#000] text-[#397dd0] cursor-pointer">
                <a className="flex py-2 px-2" href="./">
                  Non Resident Indian (NRI)
                </a>
              </li>
              <li className="pl-1 hover:text-[#000] text-[#397dd0] cursor-pointer">
                <a className="flex py-2 px-2" href="./">
                  Company, Partnership, HUF and LLP{" "}
                </a>
              </li>
              <li className="pl-1 hover:text-[#000] text-[#397dd0] cursor-pointer">
                <a className="flex py-2 px-2" href="./">
                  Glossary
                </a>
              </li>
            </ul>
          </div>
        </details>
        {/* 2 */}
        <details className="group">
          <summary className="flex hover:scale-[1.02] border border-[#eee] border-solid rounded-xs items-center duration-300 trasition-transform cursor-pointer select-none">
            <div className="flex px-[20px] bg-[#f2f8fe99] rounded-xs items-center self-stretch shrink-0">
              <span className="text-xl text-[#397dd0]">
                <RiAccountCircleLine className="" />
              </span>
            </div>
            <h2 className="px-2.5 py-3 font-medium md:text-lg">
              Your Zerodha Account
            </h2>
            <span className="ml-auto px-4 text-[24px] text-bold text-[#397dd0]  transition-transform shrink-0 group-open:rotate-0 rotate-180 ">
              {" "}
              <CgChevronUp className="p-0" />{" "}
            </span>
          </summary>
          <div className="flex flex-col w-full border-b border-r border-l border-[#eee] ">
            <ul className="flex flex-col pl-12 py-4 md:pl-16 w-full list-disc">
              <li className="pl-1 hover:text-[#000] text-[#397dd0] cursor-pointer">
                <a className="flex py-2 px-2" href="./">
                  Your Profile
                </a>
              </li>
              <li className="pl-1 hover:text-[#000] text-[#397dd0] cursor-pointer">
                <a className="flex py-2 px-2" href="./">
                  Account modification
                </a>
              </li>
              <li className="pl-1 hover:text-[#000] text-[#397dd0] cursor-pointer">
                <a className="flex py-2 px-2" href="./">
                  Client Master Report (CMR) and Depository Participant (DP)
                </a>
              </li>
              <li className="pl-1 hover:text-[#000] text-[#397dd0] cursor-pointer">
                <a className="flex py-2 px-2" href="./">
                  Nomination
                </a>
              </li>
              <li className="pl-1 hover:text-[#000] text-[#397dd0] cursor-pointer">
                <a className="flex py-2 px-2" href="./">
                  Transfer and conversion of securities{" "}
                </a>
              </li>
            </ul>
          </div>
        </details>
        {/* 3 */}
        <details className="group">
          <summary className="flex hover:scale-[1.02] border border-[#eee] border-solid rounded-xs items-center duration-300 trasition-transform cursor-pointer select-none">
            <div className="flex px-[20px] bg-[#f2f8fe99] rounded-xs items-center self-stretch shrink-0">
              <span className="text-xl text-[#397dd0]">
                <SiBuildkite className="" />
              </span>
            </div>
            <h2 className="px-2.5 py-3 font-medium md:text-lg">Kite</h2>
            <span className="ml-auto px-4 text-[24px] text-bold text-[#397dd0]  transition-transform shrink-0 group-open:rotate-0 rotate-180 ">
              {" "}
              <CgChevronUp className="p-0" />{" "}
            </span>
          </summary>
          <div className="flex flex-col w-full border-b border-r border-l border-[#eee] ">
            <ul className="flex flex-col pl-12 py-4 md:pl-16 w-full list-disc">
              <li className="pl-1 hover:text-[#000] text-[#397dd0] cursor-pointer">
                <a className="flex py-2 px-2" href="./">
                  IPO
                </a>
              </li>
              <li className="pl-1 hover:text-[#000] text-[#397dd0] cursor-pointer">
                <a className="flex py-2 px-2" href="./">
                  Trading FAQs
                </a>
              </li>
              <li className="pl-1 hover:text-[#000] text-[#397dd0] cursor-pointer">
                <a className="flex py-2 px-2" href="./">
                  Margin Trading Facility (MTF) and Margins
                </a>
              </li>
              <li className="pl-1 hover:text-[#000] text-[#397dd0] cursor-pointer">
                <a className="flex py-2 px-2" href="./">
                  Charts and orders
                </a>
              </li>
              <li className="pl-1 hover:text-[#000] text-[#397dd0] cursor-pointer">
                <a className="flex py-2 px-2" href="./">
                  Alerts and Nudges
                </a>
              </li>
              <li className="pl-1 hover:text-[#000] text-[#397dd0] cursor-pointer">
                <a className="flex py-2 px-2" href="./">
                  General
                </a>
              </li>
            </ul>
          </div>
        </details>
        {/* 4 */}
        <details className="group">
          <summary className="flex hover:scale-[1.02] border border-[#eee] border-solid rounded-xs items-center duration-300 trasition-transform cursor-pointer select-none">
            <div className="flex px-[20px] bg-[#f2f8fe99] rounded-xs items-center self-stretch shrink-0">
              <span className="text-xl text-[#397dd0]">
                <RiMoneyRupeeCircleLine className="" />
              </span>
            </div>
            <h2 className="px-2.5 py-3 font-medium md:text-lg">Funds</h2>
            <span className="ml-auto px-4 text-[24px] text-bold text-[#397dd0]  transition-transform shrink-0 group-open:rotate-0 rotate-180 ">
              {" "}
              <CgChevronUp className="p-0" />{" "}
            </span>
          </summary>
          <div className="flex flex-col w-full border-b border-r border-l border-[#eee] ">
            <ul className="flex flex-col pl-12 py-4 md:pl-16 w-full list-disc">
              <li className="pl-1 hover:text-[#000] text-[#397dd0] cursor-pointer">
                <a className="flex py-2 px-2" href="./">
                  Add money
                </a>
              </li>
              <li className="pl-1 hover:text-[#000] text-[#397dd0] cursor-pointer">
                <a className="flex py-2 px-2" href="./">
                  Withdraw money
                </a>
              </li>
              <li className="pl-1 hover:text-[#000] text-[#397dd0] cursor-pointer">
                <a className="flex py-2 px-2" href="./">
                  Add bank accounts
                </a>
              </li>
              <li className="pl-1 hover:text-[#000] text-[#397dd0] cursor-pointer">
                <a className="flex py-2 px-2" href="./">
                  eMandates
                </a>
              </li>
            </ul>
          </div>
        </details>
        {/* 5 */}
        <details className="group">
          <summary className="flex hover:scale-[1.02] border border-[#eee] border-solid rounded-xs items-center duration-300 trasition-transform cursor-pointer select-none">
            <div className="flex px-[20px] bg-[#f2f8fe99] rounded-xs items-center self-stretch shrink-0">
              <span className="text-xl text-[#397dd0]">
                <SiCircleci className="" />
              </span>
            </div>
            <h2 className="px-2.5 py-3 font-medium md:text-lg">Console</h2>
            <span className="ml-auto px-4 text-[24px] text-bold text-[#397dd0]  transition-transform shrink-0 group-open:rotate-0 rotate-180 ">
              {" "}
              <CgChevronUp className="p-0" />{" "}
            </span>
          </summary>
          <div className="flex flex-col w-full border-b border-r border-l border-[#eee] ">
            <ul className="flex flex-col pl-12 py-4 md:pl-16 w-full list-disc">
              <li className="pl-1 hover:text-[#000] text-[#397dd0] cursor-pointer">
                <a className="flex py-2 px-2" href="./">
                  Portfolio
                </a>
              </li>
              <li className="pl-1 hover:text-[#000] text-[#397dd0] cursor-pointer">
                <a className="flex py-2 px-2" href="./">
                  Corporate actions
                </a>
              </li>
              <li className="pl-1 hover:text-[#000] text-[#397dd0] cursor-pointer">
                <a className="flex py-2 px-2" href="./">
                  Funds statement
                </a>
              </li>
              <li className="pl-1 hover:text-[#000] text-[#397dd0] cursor-pointer">
                <a className="flex py-2 px-2" href="./">
                  Reports
                </a>
              </li>
              <li className="pl-1 hover:text-[#000] text-[#397dd0] cursor-pointer">
                <a className="flex py-2 px-2" href="./">
                  Profile
                </a>
              </li>
              <li className="pl-1 hover:text-[#000] text-[#397dd0] cursor-pointer">
                <a className="flex py-2 px-2" href="./">
                  Segments
                </a>
              </li>
            </ul>
          </div>
        </details>
        {/* 6 */}
        <details className="group">
          <summary className="flex hover:scale-[1.02] border border-[#eee] border-solid rounded-xs items-center duration-300 trasition-transform cursor-pointer select-none">
            <div className="flex px-[20px] bg-[#f2f8fe99] rounded-xs items-center self-stretch shrink-0">
              <span className="text-xl text-[#397dd0]">
                <BsCoin className="" />
              </span>
            </div>
            <h2 className="px-2.5 py-3 font-medium md:text-lg">Coin</h2>
            <span className="ml-auto px-4 text-[24px] text-bold text-[#397dd0]  transition-transform shrink-0 group-open:rotate-0 rotate-180 ">
              {" "}
              <CgChevronUp className="p-0" />{" "}
            </span>
          </summary>
          <div className="flex flex-col w-full border-b border-r border-l border-[#eee] ">
            <ul className="flex flex-col pl-12 py-4 md:pl-16 w-full list-disc">
              <li className="pl-1 hover:text-[#000] text-[#397dd0] cursor-pointer">
                <a className="flex py-2 px-2" href="./">
                  Mutual funds
                </a>
              </li>
              <li className="pl-1 hover:text-[#000] text-[#397dd0] cursor-pointer">
                <a className="flex py-2 px-2" href="./">
                  National Pension Scheme (NPS)
                </a>
              </li>
              <li className="pl-1 hover:text-[#000] text-[#397dd0] cursor-pointer">
                <a className="flex py-2 px-2" href="./">
                  Fixed Deposit (FD)
                </a>
              </li>
              <li className="pl-1 hover:text-[#000] text-[#397dd0] cursor-pointer">
                <a className="flex py-2 px-2" href="./">
                  Features on Coin
                </a>
              </li>
              <li className="pl-1 hover:text-[#000] text-[#397dd0] cursor-pointer">
                <a className="flex py-2 px-2" href="./">
                  Payments and Orders
                </a>
              </li>
              <li className="pl-1 hover:text-[#000] text-[#397dd0] cursor-pointer">
                <a className="flex py-2 px-2" href="./">
                  General
                </a>
              </li>
            </ul>
          </div>
        </details>
      </div>

      <div className="">
        <div
          id="featured-content"
          className="flex flex-col mt-[20px] px-[20px] py-[12px] md:flex hidden w-full bg-[#ff910020] border-l-8 border-[#ff9100] gap-3 "
        >
          <ul className="list-disc ml-[12px]">
            <li className="py-[5px] hover:text-[#000] text-[#397dd0]  transition-colors duration-300">
              <a className="underline featured-link text-[16px] " href="./">
                Rights Entitlements listing in March 2026
              </a>
            </li>
            <li className="py-[5px] hover:text-[#000] text-[#397dd0]">
              <a href="./" className="underline featured-link text-[16px]">
                Latest Intraday leverages and Square-off timings
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col py-[20px] w-full ">
          <div className="px-[20px] py-[16px] bg-[#f6f6f6] font-medium">
            {" "}
            Quick Links
          </div>
          <a
            href="./"
            className="px-[20px] py-[16px] hover:text-[#000] text-[#397dd0]  transition-colors duration-300 border border-t-0 cursor-pointer"
          >
            1. Track account opening
          </a>
          <a
            href="./"
            className="px-[20px] py-[16px] hover:text-[#000] text-[#397dd0]  transition-colors duration-300 border border-t-0 cursor-pointer"
          >
            2. Track segment activation
          </a>
          <a
            href="./"
            className="px-[20px] py-[16px] hover:text-[#000] text-[#397dd0]  transition-colors duration-300 border border-t-0 cursor-pointer"
          >
            3. Intraday margins
          </a>
          <a
            href="./"
            className="px-[20px] py-[16px] hover:text-[#000] text-[#397dd0]  transition-colors duration-300 border border-t-0 cursor-pointer"
          >
            4. Kite user manual
          </a>
          <a
            href="./"
            className="px-[20px] py-[16px] hover:text-[#000] text-[#397dd0]  transition-colors duration-300 border border-t-0 cursor-pointer"
          >
            5. Learn how to create a ticket
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;

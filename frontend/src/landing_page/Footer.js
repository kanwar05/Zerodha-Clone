import React from "react";

const Footer = () => {
  return (
    <div className="container px-[125px] border-t bg-[#fbfbfb]">
      <div className="row mt-[30px] pb-2 gap-3 px-5">
        <div className="col">
          <img
            src="media/images/logo.svg"
            alt="logo"
            className="w-[80%] py-[10px]"
          />
          <p className="text-[14px] text-muted">
            &copy; 2010-2026, Zerodha Broking Ltd. All rights reserved.
          </p>
          <ul className="flex flex-cols gap-4 my-3">
            <li className="">
              <a href="./" className="">
                <i className="fa-brands fa-x-twitter opacity-[0.75] hover:opacity-[1]  w-[20px] h-[20px] "></i>
              </a>
            </li>
            <li className="">
              <a href="./" className="">
                <i className="fa-brands fa-square-facebook opacity-[0.75] hover:opacity-[1] w-[20px] h-[20px] "></i>
              </a>
            </li>
            <li className="">
              <a href="./" className="">
                <i className="fa-brands fa-instagram opacity-[0.75] hover:opacity-[1] w-[20px] h-[20px] "></i>
              </a>
            </li>
            <li className="">
              <a href="./" className="">
                <i className="fa-brands fa-linkedin-in opacity-[0.75] hover:opacity-[1] w-[20px] h-[20px] "></i>
              </a>
            </li>
          </ul>
          <hr />
          <ul className="flex flex-cols gap-4 my-3">
            <li className="">
              <a href="./" className="">
                <i className="fa-brands fa-youtube opacity-[0.75] hover:opacity-[1] w-[20px] h-[20px] "></i>
              </a>
            </li>
            <li className="">
              <a href="./" className="">
                <i className="fa-brands fa-whatsapp opacity-[0.75] hover:opacity-[1] w-[20px] h-[20px] "></i>
              </a>
            </li>
            <li className="">
              <a href="./" className="">
                <i className="fa-brands fa-telegram opacity-[0.75] hover:opacity-[1] w-[20px] h-[20px] "></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="col">
          <p className="fs-[18px] font-semibold mb-[20px]">Account</p>
          <ul>
            <li className="mt-2">
              <a className="text-muted" href="./" alt="">
                <span className="text-[14px] hover:text-[#387ed1]">
                  Open demat account
                </span>
              </a>
            </li>
            <li className="mt-2">
              <a className="text-muted" href="./">
                <span className="text-[14px] hover:text-[#387ed1]">
                  Minor demat account
                </span>
              </a>
            </li>
            <li className="mt-2">
              <a className="text-muted" href="./">
                <span className="text-[14px] hover:text-[#387ed1]">
                  NRI demat account
                </span>
              </a>
            </li>
            <li className="mt-2">
              <a className="text-muted" href="./">
                <span className="text-[14px] hover:text-[#387ed1]">
                  {" "}
                  Commodity
                </span>
              </a>
            </li>
            <li className="mt-2">
              <a className="text-muted" href="./">
                <span className="text-[14px] hover:text-[#387ed1]">
                  Dematerialisation
                </span>
              </a>
            </li>
            <li className="mt-2">
              <a className="text-muted" href="./">
                <span className="text-[14px] hover:text-[#387ed1]">
                  Fund transfer
                </span>
              </a>
            </li>
            <li className="mt-2">
              <a className="text-muted" href="./">
                <span className="text-[14px] hover:text-[#387ed1]"> MTF</span>
              </a>
            </li>
            <li className="mt-2">
              <a className="text-muted" href="./">
                <span className="text-[14px] hover:text-[#387ed1]">
                  Referral program
                </span>
              </a>
            </li>
          </ul>
        </div>

        <div className="col">
          <p className="fs-[18px] font-semibold mb-[20px]">Support</p>
          <ul>
            <li className="mt-2">
              <a className="text-muted" href="./" alt="">
                <span className="text-[14px] hover:text-[#387ed1]">
                  Contact us
                </span>
              </a>
            </li>
            <li className="mt-2">
              <a className="text-muted" href="./">
                <span className="text-[14px] hover:text-[#387ed1]">
                  Support portal
                </span>
              </a>
            </li>
            <li className="mt-2">
              <a className="text-muted" href="./">
                <span className="text-[14px] hover:text-[#387ed1]">
                  How to file a complaint?
                </span>
              </a>
            </li>
            <li className="mt-2">
              <a className="text-muted" href="./">
                <span className="text-[14px] hover:text-[#387ed1]">
                  {" "}
                  Status of your complaints
                </span>
              </a>
            </li>
            <li className="mt-2">
              <a className="text-muted" href="./">
                <span className="text-[14px] hover:text-[#387ed1]">
                  Bulletin
                </span>
              </a>
            </li>
            <li className="mt-2">
              <a className="text-muted" href="./">
                <span className="text-[14px] hover:text-[#387ed1]">
                  Circular
                </span>
              </a>
            </li>
            <li className="mt-2">
              <a className="text-muted" href="./">
                <span className="text-[14px] hover:text-[#387ed1]">
                  {" "}
                  Z-Connect blog
                </span>
              </a>
            </li>
            <li className="mt-2">
              <a className="text-muted" href="./">
                <span className="text-[14px] hover:text-[#387ed1]">
                  Downloads
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div className="col">
          <p className="fs-[18px] font-semibold mb-[20px]">Company</p>
          <ul>
            <li className="mt-2">
              <a className="text-muted" href="./" alt="">
                <span className="text-[14px] hover:text-[#387ed1]">About</span>
              </a>
            </li>
            <li className="mt-2">
              <a className="text-muted" href="./">
                <span className="text-[14px] hover:text-[#387ed1]">
                  Philosophy
                </span>
              </a>
            </li>
            <li className="mt-2">
              <a className="text-muted" href="./">
                <span className="text-[14px] hover:text-[#387ed1]">
                  Press & media
                </span>
              </a>
            </li>
            <li className="mt-2">
              <a className="text-muted" href="./">
                <span className="text-[14px] hover:text-[#387ed1]">
                  {" "}
                  Careers
                </span>
              </a>
            </li>
            <li className="mt-2">
              <a className="text-muted" href="./">
                <span className="text-[14px] hover:text-[#387ed1]">
                  Zerodha Cares (CSR)
                </span>
              </a>
            </li>
            <li className="mt-2">
              <a className="text-muted" href="./">
                <span className="text-[14px] hover:text-[#387ed1]">
                  Zerodha.tech
                </span>
              </a>
            </li>
            <li className="mt-2">
              <a className="text-muted" href="./">
                <span className="text-[14px] hover:text-[#387ed1]">
                  Open source
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div className="col">
          <p className="fs-[18px] font-semibold mb-[20px]">Quick links</p>
          <ul>
            <li className="mt-2">
              <a className="text-muted" href="./" alt="">
                <span className="text-[14px] hover:text-[#387ed1]">
                  Upcoming IPOs
                </span>
              </a>
            </li>
            <li className="mt-2">
              <a className="text-muted" href="./">
                <span className="text-[14px] hover:text-[#387ed1]">
                  Brokerage charges
                </span>
              </a>
            </li>
            <li className="mt-2">
              <a className="text-muted" href="./">
                <span className="text-[14px] hover:text-[#387ed1]">
                  Market holidays
                </span>
              </a>
            </li>
            <li className="mt-2">
              <a className="text-muted" href="./">
                <span className="text-[14px] hover:text-[#387ed1]">
                  {" "}
                  Economic calendar
                </span>
              </a>
            </li>
            <li className="mt-2">
              <a className="text-muted" href="./">
                <span className="text-[14px] hover:text-[#387ed1]">
                  Calculators
                </span>
              </a>
            </li>
            <li className="mt-2">
              <a className="text-muted" href="./">
                <span className="text-[14px] hover:text-[#387ed1]">
                  Markets
                </span>
              </a>
            </li>
            <li className="mt-2">
              <a className="text-muted" href="./">
                <span className="text-[14px] hover:text-[#387ed1]">
                  {" "}
                  Sectors
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="px-5">
        <p className="text-[10px] text-muted mt-9 mb-3">
          Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI
          Registration no.: INZ000031633 CDSL/NSDL: Depository services through
          Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019
          Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars
          Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru -
          560078, Karnataka, India. For any complaints pertaining to securities
          broking please write to{" "}
          <a
            href="./"
            className="no-underline text-[#387ed1] hover:text-[#000] "
          >
            complaints@zerodha.com{" "}
          </a>
          , for DP related to{" "}
          <a
            href="./"
            className="no-underline text-[#387ed1] hover:text-[#000] "
          >
            dp@zerodha.com{" "}
          </a>{" "}
          . Please ensure you carefully read the Risk Disclosure Document as
          prescribed by SEBI | ICF{" "}
        </p>

        <p className="text-[10px] text-muted mb-3">
          Procedure to file a complaint on
          <a
            href="./"
            className="no-underline text-[#387ed1] hover:text-[#000] "
          >
            SEBI SCORES{" "}
          </a>{" "}
          : Register on SCORES portal. Mandatory details for filing complaints
          on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits:
          Effective Communication, Speedy redressal of the grievances
        </p>

        <p className="text-[10px] text-muted mb-3">
          <a
            href="./"
            className="no-underline text-[#387ed1] hover:text-[#000] "
          >
            Smart Online Dispute Resolution{" "}
          </a>
          |
          <a
            href="./"
            className="no-underline text-[#387ed1] hover:text-[#000] "
          >
            Grievances Redressal Mechanism{" "}
          </a>
        </p>

        <p className="text-[10px] text-muted mb-3">
          Investments in securities market are subject to market risks; read all
          the related documents carefully before investing.
        </p>

        <p className="text-[10px] text-muted mb-3">
          Attention investors: 1 {") "} Stock brokers can accept securities as margins
          from clients only by way of pledge in the depository system w.e.f
          September 01, 2020. 2 {") "} Update your e-mail and phone number with your
          stock broker / depository participant and receive OTP directly from
          depository on your e-mail and/or mobile number to create pledge. 3 {") "}
          Check your securities / MF / bonds in the consolidated account
          statement issued by NSDL/CDSL every month.
        </p>

        <p className="text-[10px] text-muted mb-3">
          India's largest broker based on networth as per NSE.
          <a
            href="./"
            className="no-underline text-[#387ed1] hover:text-[#000] "
          >
            NSE broker factsheet{" "}
          </a>
        </p>

        <p className="text-[10px] text-muted mb-3">
          "Prevent unauthorised transactions in your account. Update your mobile
          numbers/email IDs with your stock brokers. Receive information of your
          transactions directly from Exchange on your mobile/email at the end of
          the day. Issued in the interest of investors. KYC is one time exercise
          while dealing in securities markets - once KYC is done through a SEBI
          registered intermediary (broker, DP, Mutual Fund etc.), you need not
          undergo the same process again when you approach another
          intermediary." Dear Investor, if you are subscribing to an IPO, there
          is no need to issue a cheque. Please write the Bank account number and
          sign the IPO application form to authorize your bank to make payment
          in case of allotment. In case of non allotment the funds will remain
          in your bank account. As a business we don't give stock tips, and have
          not authorized anyone to trade on behalf of others. If you find anyone
          claiming to be part of Zerodha and offering such services, please{" "}
          <br/>
          <a
            href="./"
            className="no-underline text-[#387ed1] hover:text-[#000] "
          >
            create a ticket here{" "}
          </a>{" "}
          .
        </p>

        <p className="text-[10px] text-muted mb-3">
          *Customers availing insurance advisory services offered by Ditto
          Tacterial Consulting Private Limited | IRDAI Registered Corporate
          Agent (Composite) License No CA0738 will not have access to the
          exchange investor grievance redressal forum, SEBI SCORES/ODR, or
          arbitration mechanism for such products.
        </p>
      </div>

      <ul className="flex flex-row items-center justify-center gap-4 mb-4">
        <li>
          <a href="./" className="text-muted">
            <span className=" hover:text-[#387ed1] text-[12px]">NSE </span>
          </a>
        </li>
        <li>
          <a href="./" className="text-muted">
            <span className="hover:text-[#387ed1] text-[12px]">BSE </span>
          </a>
        </li>
        <li>
          <a href="./" className="text-muted">
            <span className="hover:text-[#387ed1] text-[12px]">MCX </span>
          </a>
        </li>
        <li>
          <a href="./" className="text-muted">
            <span className="hover:text-[#387ed1] text-[12px]">
              Terms & conditions{" "}
            </span>
          </a>
        </li>
        <li>
          <a href="./" className="text-muted">
            <span className="hover:text-[#387ed1] text-[12px]">
              Policies & procedures{" "}
            </span>
          </a>
        </li>
        <li>
          <a href="./" className="text-muted">
            <span className="hover:text-[#387ed1] text-[12px]">
              Privacy policy{" "}
            </span>
          </a>
        </li>
        <li>
          <a href="./" className="text-muted">
            <span className="hover:text-[#387ed1] text-[12px]">
              Disclosure{" "}
            </span>
          </a>
        </li>
        <li>
          <a href="./" className="text-muted">
            <span className="hover:text-[#387ed1] text-[12px]">
              For investor's attention{" "}
            </span>
          </a>
        </li>
        <li>
          <a href="./" className="text-muted">
            <span className="hover:text-[#387ed1] text-[12px]">
              Investor charter
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;

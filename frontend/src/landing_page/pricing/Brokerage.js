import React from "react";
import { useState } from "react";
import Equity from "./brok/Equity";
import Currency from "./brok/Currency";
import Commodities from "./brok/Commodities";

const Brokerage = () => {
  const [activeTab, setActiveTab] = useState("equities");
  return (
    <section className="py-[80px] px-[140px]">
      <div className=" mx-[54px] text-[#424242]">
        <div id="charges-tab" className=" ">
          <nav className="flex flex-row flex-wrap border-b border-[#e1e1e1] mb-[30px]">
            <button
              onClick={() => setActiveTab("equities")}
              className={`block py-[6px] px-[15px] text-[24px] font-[500] mr-[3px] cursor-pointer
              ${activeTab === "equities" ? "border-b-[2px] border-[#387ed1] text-[#666]" : "text-[#387ed1] hover:text-[#666]"}`}
            >
              Equity
            </button>

            <button
              onClick={() => setActiveTab("currency")}
              className={`block py-[6px] px-[15px] text-[24px] font-[500] mr-[3px] cursor-pointer 
              ${activeTab === "currency" ? "border-b-[2px] border-[#387ed1] text-[#666]" : "text-[#387ed1] hover:text-[#666] "}`}
            >
              Currency
            </button>

            <button
              onClick={() => setActiveTab("commodities")}
              className={`block py-[6px] px-[15px] text-[24px] font-[500] mr-[3px] cursor-pointer
              ${activeTab === "commodities" ? "border-b-[2px] border-[#387ed1] text-[#666]" : "text-[#387ed1] hover:text-[#666]"}`}
            >
              Commodity
            </button>
            <a
              href="./"
              data-id="fo"
              className="hidden py-[6px] px-[15px] no-underline text-[24px] font-[500] mr-[3px]  active:border-b-[2px] active:border-[#387ed1]  active:border-solid active:text-[#666] hover:text-[#666] text-[#387ed1] text-center min-w-[130px] font-[500]"
            >
              F&O
            </a>
          </nav>

          {activeTab === "equities" && <Equity />}

          {activeTab === "fo" && <div className="text-[14px]" id="fo"></div>}

          {activeTab === "currency" && <Currency />}
          {activeTab === "commodities" && <Commodities />}
        </div>

        <br />

        <p className="text-[20px] mb-[20px] text-center ">
          <a
            href="./"
            className="no-underline text-[#387ed1] hover:text-[#000] "
          >
            Calculate your costs upfront
          </a>{" "}
          using our brokerage calculator
        </p>

        <section className="pt-[80px] w-[100%] ">
          <div className="container w-[100%]">
            <h2 className="text-[24px] mb-[20px] font-medium ">
              Charges for account opening
            </h2>
            <div className="w-[100%] max-w-[100%} overflow-auto  ">
              <table className="border border-[#ddd] rounded-3xl w-[100%] text-[14px]  ">
                <thead className="w-[100%]">
                  <tr className="border-b rounded-3xl border-[#f4f4f4]">
                    <th className="px-[15px] py-[12px] font-normal">
                      Type of account{" "}
                    </th>
                    <th className="px-[15px] py-[12px] font-normal">Charges</th>
                  </tr>
                </thead>
                <tbody className="w-[100%]">
                  <tr>
                    <td className="px-[15px] py-[12px]">Online account </td>
                    <td className="px-[15px] py-[12px]">
                      <span className="py-[4px] px-[10px] bg-[#4caf50] text-[11px] font-[500] rounded-[2px] text-white ">
                        FREE
                      </span>
                    </td>
                  </tr>
                  <tr className="bg-[#fbfbfb]">
                    <td className="px-[15px] py-[12px]">Offline account </td>
                    <td className="px-[15px] py-[12px]">
                      <span className="py-[4px] px-[10px] bg-[#4caf50] text-[11px] font-[500] rounded-[2px] text-white">
                        FREE
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-[15px] py-[12px]">
                      NRI account (offline only){" "}
                    </td>
                    <td className="px-[15px] py-[12px]">₹ 500</td>
                  </tr>
                  <tr className="bg-[#fbfbfb]">
                    <td className="px-[15px] py-[12px]">
                      Partnership, LLP, HUF, or Corporate accounts (offline
                      only){" "}
                    </td>
                    <td className="px-[15px] py-[12px]">₹ 500</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="pt-[80px] w-[100%]">
          <div className="container w-[100%]">
            <h2 className="text-[24px] mb-[20px] font-medium ">
              Demat AMC (Annual Maintenance Charge)
            </h2>
            <div className="w-[100%] max-w-[100%} overflow-auto  ">
              <table className="border border-[#ddd] rounded-3xl w-[100%] text-[14px]  ">
                <thead className="w-[100%]">
                  <tr className="border-b rounded-3xl border-[#f4f4f4]">
                    <th className="px-[15px] py-[12px] font-normal w-[40%]">
                      Value of holdings{" "}
                    </th>
                    <th className="px-[15px] py-[12px] font-normal w-[60%]">
                      AMC
                    </th>
                  </tr>
                </thead>
                <tbody className="w-[100%]">
                  <tr>
                    <td className="px-[15px] py-[12px]">Up to ₹4 lakh </td>
                    <td className="px-[15px] py-[12px]">
                      <span className="py-[4px] px-[10px] bg-[#4caf50] text-[11px] font-[500] rounded-[2px] text-white ">
                        FREE*
                      </span>
                    </td>
                  </tr>
                  <tr className="bg-[#fbfbfb]">
                    <td className="px-[15px] py-[12px]">₹4 lakh - ₹10 lakh </td>
                    <td className="px-[15px] py-[12px]">
                      ₹ 100 per year, charged quarterly*
                    </td>
                  </tr>
                  <tr>
                    <td className="px-[15px] py-[12px]">Above ₹10 lakh </td>
                    <td className="px-[15px] py-[12px]">
                      ₹ 300 per year, charged quarterly
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-[12px] mb-[15px] mt-[10px] ">
              * Lower AMC is applicable only if the account qualifies as a Basic
              Services Demat Account (BSDA). BSDA account holders cannot hold
              more than one demat account. To learn more about BSDA,{" "}
              <a className="text-[#387ed1] hover:text-[#000]" href="./">
                click here.
              </a>
            </p>
          </div>
        </section>

        <section className="pt-[80px] w-[100%] ">
          <div className="container w-[100%]">
            <h2 className="text-[24px] mb-[20px] font-medium ">
              Charges for optional value added services
            </h2>
            <div className="w-[100%] max-w-[100%} overflow-auto  ">
              <table className="border border-[#ddd] rounded-3xl w-[100%] text-[14px]  ">
                <thead className="w-[100%]">
                  <tr className="border-b rounded-3xl border-[#f4f4f4]">
                    <th className="px-[15px] py-[12px] font-normal">Service</th>
                    <th className="px-[15px] py-[12px] font-normal">
                      Billing Frquency
                    </th>
                    <th className="px-[15px] py-[12px] font-normal">Charges</th>
                  </tr>
                </thead>
                <tbody className="w-[100%]">
                  <tr>
                    <td className="px-[15px] py-[12px]">Tickertape </td>
                    <td className="px-[15px] py-[12px]">Monthly / Annual</td>
                    <td className="px-[15px] py-[12px]">
                      Free: 0 | Pro: 249/2399
                    </td>
                  </tr>
                  <tr className="bg-[#fbfbfb]">
                    <td className="px-[15px] py-[12px]">Smallcase </td>
                    <td className="px-[15px] py-[12px]">Per transaction</td>
                    <td className="px-[15px] py-[12px]">
                      Buy & Invest More: 100 | SIP: 10
                    </td>
                  </tr>
                  <tr>
                    <td className="px-[15px] py-[12px]">Kite Connect</td>
                    <td className="px-[15px] py-[12px]">Monthly </td>
                    <td className="px-[15px] py-[12px]">
                      Connect: 500 | Personal: Free{" "}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <h2 className="mb-[20px] pt-[80px] text-[24px] text-[#424242] ">
          Charges Explained
        </h2>

        <div className="row flex justify-between gap-5">
          <div className="col">
            <p className="text-muted mt-[16px] mb-[15px]">
              Securities/Commodities transaction tax
            </p>
            <p className="text-muted mt-[12px] mb-[15px] text-[12px]">
              Tax by the government when transacting on the exchanges. Charged
              as above on both buy and sell sides when trading equity delivery.
              Charged only on selling side when trading intraday or on F&O.
            </p>
            <p className="text-muted mt-[12px] mb-[15px] text-[12px]">
              When trading at Zerodha, STT/CTT can be a lot more than the
              brokerage we charge. Important to keep a tab.
            </p>
            <p className="text-muted mt-[16px] mb-[15px]">
              Transaction/Turnover Charges
            </p>
            <p className="text-muted mt-[12px] mb-[15px] text-[12px]">
              Charged by exchanges (NSE, BSE, MCX) on the value of your
              transactions.
            </p>
            <p className="text-muted mt-[12px] mb-[15px] text-[12px]">
              BSE has revised transaction charges in XC, XD, XT, Z and ZP groups
              to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been
              merged into a new group X w.e.f 01.12.2017)
            </p>
            <p className="text-muted mt-[12px] mb-[15px] text-[12px]">
              BSE has revised transaction charges in SS and ST groups to
              ₹1,00,000 per crore of gross turnover.
            </p>
            <p className="text-muted mt-[12px] mb-[15px] text-[12px]">
              BSE has revised transaction charges for group A, B and other non
              exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC,
              W, T) at ₹375 per crore of turnover on flat rate basis w.e.f.
              December 1, 2022.
            </p>
            <p className="text-muted mt-[12px] mb-[15px] text-[12px]">
              BSE has revised transaction charges in M, MT, TS and MS groups to
              ₹275 per crore of gross turnover.
            </p>
            <p className="text-muted mt-[16px] mb-[15px]">Call & trade</p>
            <p className="text-muted mt-[12px] mb-[15px] text-[12px]">
              Additional charges of ₹50 per order for orders placed through a
              dealer at Zerodha including auto square off orders.
            </p>
            <p className="text-muted mt-[16px] mb-[15px]">Stamp charges</p>
            <p className="text-muted mt-[12px] mb-[15px] text-[12px]">
              Stamp charges by the Government of India as per the Indian Stamp
              Act of 1899 for transacting in instruments on the stock exchanges
              and depositories.
            </p>
            <p className="text-muted mt-[16px] mb-[15px]">
              NRI brokerage charges
              <ul className="list-disc text-[12px] pl-[20px] my-[20px]">
                <li className="mb-[5px]">
                  For a non-PIS account, 0.5% or ₹50 per executed order for
                  equity and F&O (whichever is lower).
                </li>
                <li className="mb-[5px]">
                  For a PIS account, 0.5% or ₹200 per executed order for equity
                  (whichever is lower).
                </li>
                <li className="mb-[5px]">
                  ₹500 + GST as yearly account maintenance charges (AMC)
                  charges.
                </li>
              </ul>
            </p>
            <p className="text-muted mt-[16px] mb-[15px]">
              Account with debit balance
            </p>
            <p className="text-muted mt-[12px] mb-[15px] text-[12px]">
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per executed order.
            </p>
            <p className="text-muted mt-[16px] mb-[15px]">
              Charges for Investor's Protection Fund Trust (IPFT) by NSE
              <ul className="list-disc text-[12px] pl-[20px] my-[20px]">
                <li className="mb-[5px]">
                  Equity and Futures - ₹0.01 per crore + GST of the traded
                  value.
                </li>
                <li className="mb-[5px]">
                  Options - ₹0.01 per crore + GST traded value (premium value)..
                </li>
                <li className="mb-[5px]">
                  Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2
                  per lakh + GST of premium for Options.
                </li>
              </ul>
            </p>
            <p className="text-muted mt-[16px] mb-[15px]">
              Margin Trading Facility (MTF)
              <ul className="list-disc text-[12px] pl-[20px] my-[20px]">
                <li className="mb-[5px]">
                  MTF Interest: 0.04% per day (₹40 per lakh) on the funded
                  amount. The interest is applied from T+1 day until the day MTF
                  stocks are sold.
                </li>
                <li className="mb-[5px]">
                  MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is
                  lower.
                </li>
                <li className="mb-[5px]">
                  MTF pledge charge: ₹15 + GST per pledge and unpledge request
                  per ISIN.
                </li>
              </ul>
            </p>
          </div>

          <div className="col">
            <p className="text-muted mt-[16px] mb-[15px]">GST</p>
            <p className="text-muted mt-[12px] mb-[15px] text-[12px]">
              Tax levied by the government on the services rendered. 18% of (
              brokerage + SEBI charges + transaction charges)
            </p>
            <p className="text-muted mt-[16px] mb-[15px]">SEBI Charges</p>
            <p className="text-muted mt-[12px] mb-[15px] text-[12px]">
              Charged at ₹10 per crore + GST by Securities and Exchange Board of
              India for regulating the markets.
            </p>
            <p className="text-muted mt-[16px] mb-[15px]">
              DP (Depository participant) charges
            </p>
            <p className="text-muted mt-[12px] mb-[15px] text-[12px]">
              ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is
              charged on the trading account ledger when stocks are sold,
              irrespective of quantity.
            </p>
            <p className="text-muted mt-[12px] mb-[15px] text-[12px]">
              Female demat account holders (as first holder) will enjoy a
              discount of ₹0.25 per transaction on the CDSL fee.
            </p>
            <p className="text-muted mt-[12px] mb-[15px] text-[12px]">
              Debit transactions of mutual funds & bonds get an additional
              discount of ₹0.25 on the CDSL fee.
            </p>
            <p className="text-muted mt-[16px] mb-[15px]">Pledging charges</p>
            <p className="text-muted mt-[12px] mb-[15px] text-[12px]">
              ₹30 + GST per pledge request per ISIN.
            </p>
            <p className="text-muted mt-[16px] mb-[15px]">
              AMC (Account maintenance charges)
            </p>
            <p className="text-muted mt-[12px] mb-[15px] text-[12px]">
              For BSDA demat account: Zero charges if the holding value is less
              than ₹4,00,000. To learn more about BSDA, Click here
            </p>
            <p className="text-muted mt-[12px] mb-[15px] text-[12px]">
              For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly
              (90 days). To learn more about AMC, Click here
            </p>
            <p className="text-muted mt-[16px] mb-[15px]">
              Corporate action order charges
            </p>
            <p className="text-muted mt-[12px] mb-[15px]vtext-[12px]">
              ₹20 plus GST will be charged for OFS / buyback / takeover /
              delisting orders placed through Console.
            </p>
            <p className="text-muted mt-[16px] mb-[15px]">
              Off-market transfer charges
            </p>
            <p className="text-muted mt-[12px] mb-[15px] text-[12px]">
              ₹25 per transaction.
            </p>
            <p className="text-muted mt-[16px] mb-[15px]">
              Physical CMR request
            </p>
            <p className="text-muted mt-[12px] mb-[15px] text-[12px]">
              First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST
              for subsequent requests.
            </p>
            <p className="text-muted mt-[16px] mb-[15px]">
              Payment gateway charges
            </p>
            <p className="text-muted mt-[12px] mb-[15px] text-[12px]">
              ₹9 + GST (Not levied on transfers done via UPI)
            </p>
            <p className="text-muted mt-[16px] mb-[15px]">
              Delayed Payment Charges
            </p>
            <p className="text-muted mt-[12px] mb-[15px] text-[12px]">
              Interest is levied at 18% a year or 0.05% per day on the debit
              balance in your trading account. Learn more.
            </p>
            <p className="text-muted mt-[12px] mb-[15px]">
              Trading using 3-in-1 account with block functionality
              <ul className="list-disc text-[12px] pl-[20px] my-[20px]">
                <li className="mb-[5px]">
                  Delivery & MTF Brokerage: 0.5% per executed order.
                </li>
                <li className="mb-[5px]">
                  Intraday Brokerage: 0.05% per executed order.
                </li>
              </ul>
            </p>
          </div>
        </div>

        <p className="mt-[16px] mb-[15px]">Disclaimer</p>
        <p className="text-[12px] mb-[15px] mt-[10px]">
          For Delivery based trades, a minimum of ₹0.01 will be charged per
          contract note. Clients who opt to receive physical contract notes will
          be charged ₹20 per contract note plus courier charges. Brokerage will
          not exceed the rates specified by SEBI and the exchanges. All
          statutory and regulatory charges will be levied at actuals. Brokerage
          is also charged on expired, exercised, and assigned options contracts.
          Free investments are available only for our retail individual clients.
          Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20
          (whichever is less) as delivery brokerage. A brokerage of 0.25% of the
          contract value will be charged for contracts where physical delivery
          happens. For netted off positions in physically settled contracts, a
          brokerage of 0.1% will be charged.
        </p>
      </div>
    </section>
  );
};

export default Brokerage;

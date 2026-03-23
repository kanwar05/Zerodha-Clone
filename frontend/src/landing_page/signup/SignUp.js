import React from "react";

const SignUp = () => {
  return (
    <section className="pt-[100px]">
      {/* intro section */}
      <div className="pt-[100px] pb-[50px] text-[16px]">
        <div className="container mx-[52px] p-0">
          <h1 className="text-center text-[28px] px-[20px] mb-[20px] font-medium ">
            Open a free demat and trading account online
          </h1>
          <p className="text-center text-[20px] mt-[10px] mb-[15px] text-muted ">
            Start investing brokerage free and join a community of 1.6+ crore
            investors and traders
          </p>
        </div>
      </div>

      {/* SignUp section */}
      <div className="">
        <div className="container">
          <div className="row">
            <div className="col">
              <img
                src="/media/images/account_open.svg"
                alt="account open "
              ></img>
            </div>
            <div className="col">
              <h1 className="text-[24px] mb-[5px]  ">Signup Now</h1>

              <span className="text-[16px] text-muted">
                Or track your existing application
              </span>

              <input type="email" id="signupEmail" placeholder="Email" />
              <input
                type="password"
                id="signupPassword"
                placeholder="Password"
              />
              <button onclick="signup()">Signup</button>

              <br />
              <input type="email" id="loginEmail" placeholder="Email" />
              <input
                type="password"
                id="loginPassword"
                placeholder="Password"
              />
              <button onclick="signin()">Login</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;

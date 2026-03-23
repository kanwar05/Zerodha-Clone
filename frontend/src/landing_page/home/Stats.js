import React from 'react'

const Stats = () => {
  return (
    <section className="container px-[120px] pb-[20px]">
      <div className="row p-5 ">
        {/* Left: Text Content */}
        <div className="col-6 p-5" >
          <h2 className="fs-3 mb-[40px]">Trust with confidence</h2>
          <div className="pb-[20px]">
            
              <h3 className="fs-4 mb-2 mt-6">Customer-first always</h3>
              <p className="text-muted">That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
            
            
              <h3 className="fs-4 mb-2 mt-6">No spam or gimmicks</h3>
              <p className="text-muted">No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>
            
            
              <h3 className="fs-4 mb-2 mt-6">The Zerodha universe</h3>
              <p className="text-muted">Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
           
              <h3 className="fs-4 mb-2 mt-6">Do better with money</h3>
              <p className="text-muted">With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
           
          </div>
        </div>
        {/* Right: Image and Buttons */}
        <div className="col-6 p-5 flex flex-col items-center justify-center">
          <img src="media/images/ecosystem.png" alt="stats" className="w-[90%] h-auto " />
          <div className="flex flex-row gap-8 w-full justify-center mt-[30px]">
            <a href="./" className="no-underline text-[#387ed1] hover:text-[#000] mx-5">
              Explore our products <i className="fa-solid fa-arrow-right"></i>
            </a>
            <a href="./" className="no-underline text-[#387ed1] hover:text-[#000]">
              Try Kite demo <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>

      {/* press logos */}
        <div className=" ">
          <div className="flex flex-col items-center justify-center">
            <img
              src="media/images/pressLogos.png"
              alt="press logo"
              className="w-[60%] h-auto opacity-60 hover:opacity-100 transition-all duration-300"
            />
          </div>
        </div>
    </section>
  );
}

export default Stats

import React from 'react'

const Hero = () => {
  return (
    <div className="max-w-6xl mx-auto pb-[60px] pt-[100px]">
      <div className="flex flex-col items-center text-center">
        <img
          src="media/images/homeHero.png"
          alt="hero"
          className="w-3/5 h-[30%]"
        />

        <div className='mt-[20px]'>
          <h1 className="text-[28px] m-[0] mt-[20px] ">Invest in everything</h1>
          <p className="text-[16px] mt-[10px] mb-[15px] text-muted py-4">Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
          <button className='p-2 px-4 bg-[#387ed1] hover:bg-black rounded-[4px] transition-colors duration:300 '>
            <a href='./' className="no-underline text-[#FFFFFF] ">
              <span className='font-semibold'>Sign up for free</span>
            </a>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero